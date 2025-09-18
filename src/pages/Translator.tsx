import React, { useState, useCallback, useEffect } from 'react';
import { Copy, ArrowLeftRight, Volume2, Download, Sparkles, AlertCircle } from 'lucide-react';
import axios from 'axios';
const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;


// Supported languages by LibreTranslate
const languages = [
  { code: "auto", name: "Auto Detect", flag: "🌐" },
  { code: "af", name: "Afrikaans", flag: "🇿🇦" },
  { code: "sq", name: "Albanian", flag: "🇦🇱" },
  { code: "am", name: "Amharic", flag: "🇪🇹" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "hy", name: "Armenian", flag: "🇦🇲" },
  { code: "az", name: "Azerbaijani", flag: "🇦🇿" },
  { code: "eu", name: "Basque", flag: "🇪🇸" },
  { code: "be", name: "Belarusian", flag: "🇧🇾" },
  { code: "bn", name: "Bengali", flag: "🇧🇩" },
  { code: "bs", name: "Bosnian", flag: "🇧🇦" },
  { code: "bg", name: "Bulgarian", flag: "🇧🇬" },
  { code: "ca", name: "Catalan", flag: "🇪🇸" },
  { code: "ceb", name: "Cebuano", flag: "🇵🇭" },
  { code: "ny", name: "Chichewa", flag: "🇲🇼" },
  { code: "zh", name: "Chinese (Simplified)", flag: "🇨🇳" },
  { code: "zh-TW", name: "Chinese (Traditional)", flag: "🇹🇼" },
  { code: "co", name: "Corsican", flag: "🇫🇷" },
  { code: "hr", name: "Croatian", flag: "🇭🇷" },
  { code: "cs", name: "Czech", flag: "🇨🇿" },
  { code: "da", name: "Danish", flag: "🇩🇰" },
  { code: "nl", name: "Dutch", flag: "🇳🇱" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "eo", name: "Esperanto", flag: "🌍" },
  { code: "et", name: "Estonian", flag: "🇪🇪" },
  { code: "tl", name: "Filipino", flag: "🇵🇭" },
  { code: "fi", name: "Finnish", flag: "🇫🇮" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "fy", name: "Frisian", flag: "🇳🇱" },
  { code: "gl", name: "Galician", flag: "🇪🇸" },
  { code: "ka", name: "Georgian", flag: "🇬🇪" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "el", name: "Greek", flag: "🇬🇷" },
  { code: "gu", name: "Gujarati", flag: "🇮🇳" },
  { code: "ht", name: "Haitian Creole", flag: "🇭🇹" },
  { code: "ha", name: "Hausa", flag: "🇳🇬" },
  { code: "haw", name: "Hawaiian", flag: "🇺🇸" },
  { code: "he", name: "Hebrew", flag: "🇮🇱" },
  { code: "hi", name: "Hindi", flag: "🇮🇳" },
  { code: "hmn", name: "Hmong", flag: "🌍" },
  { code: "hu", name: "Hungarian", flag: "🇭🇺" },
  { code: "is", name: "Icelandic", flag: "🇮🇸" },
  { code: "ig", name: "Igbo", flag: "🇳🇬" },
  { code: "id", name: "Indonesian", flag: "🇮🇩" },
  { code: "ga", name: "Irish", flag: "🇮🇪" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "jw", name: "Javanese", flag: "🇮🇩" },
  { code: "kn", name: "Kannada", flag: "🇮🇳" },
  { code: "kk", name: "Kazakh", flag: "🇰🇿" },
  { code: "km", name: "Khmer", flag: "🇰🇭" },
  { code: "rw", name: "Kinyarwanda", flag: "🇷🇼" },
  { code: "ko", name: "Korean", flag: "🇰🇷" },
  { code: "ku", name: "Kurdish (Kurmanji)", flag: "🇹🇷" },
  { code: "ky", name: "Kyrgyz", flag: "🇰🇬" },
  { code: "lo", name: "Lao", flag: "🇱🇦" },
  { code: "la", name: "Latin", flag: "🏛️" },
  { code: "lv", name: "Latvian", flag: "🇱🇻" },
  { code: "lt", name: "Lithuanian", flag: "🇱🇹" },
  { code: "lb", name: "Luxembourgish", flag: "🇱🇺" },
  { code: "mk", name: "Macedonian", flag: "🇲🇰" },
  { code: "mg", name: "Malagasy", flag: "🇲🇬" },
  { code: "ms", name: "Malay", flag: "🇲🇾" },
  { code: "ml", name: "Malayalam", flag: "🇮🇳" },
  { code: "mt", name: "Maltese", flag: "🇲🇹" },
  { code: "mi", name: "Maori", flag: "🇳🇿" },
  { code: "mr", name: "Marathi", flag: "🇮🇳" },
  { code: "mn", name: "Mongolian", flag: "🇲🇳" },
  { code: "my", name: "Myanmar (Burmese)", flag: "🇲🇲" },
  { code: "ne", name: "Nepali", flag: "🇳🇵" },
  { code: "no", name: "Norwegian", flag: "🇳🇴" },
  { code: "or", name: "Odia (Oriya)", flag: "🇮🇳" },
  { code: "ps", name: "Pashto", flag: "🇦🇫" },
  { code: "fa", name: "Persian", flag: "🇮🇷" },
  { code: "pl", name: "Polish", flag: "🇵🇱" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  { code: "pa", name: "Punjabi", flag: "🇮🇳" },
  { code: "ro", name: "Romanian", flag: "🇷🇴" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
  { code: "sm", name: "Samoan", flag: "🇼🇸" },
  { code: "gd", name: "Scots Gaelic", flag: "🏴" },
  { code: "sr", name: "Serbian", flag: "🇷🇸" },
  { code: "st", name: "Sesotho", flag: "🇿🇦" },
  { code: "sn", name: "Shona", flag: "🇿🇼" },
  { code: "sd", name: "Sindhi", flag: "🇵🇰" },
  { code: "si", name: "Sinhala", flag: "🇱🇰" },
  { code: "sk", name: "Slovak", flag: "🇸🇰" },
  { code: "sl", name: "Slovenian", flag: "🇸🇮" },
  { code: "so", name: "Somali", flag: "🇸🇴" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "su", name: "Sundanese", flag: "🇮🇩" },
  { code: "sw", name: "Swahili", flag: "🇰🇪" },
  { code: "sv", name: "Swedish", flag: "🇸🇪" },
  { code: "tg", name: "Tajik", flag: "🇹🇯" },
  { code: "ta", name: "Tamil", flag: "🇮🇳" },
  { code: "tt", name: "Tatar", flag: "🇷🇺" },
  { code: "te", name: "Telugu", flag: "🇮🇳" },
  { code: "th", name: "Thai", flag: "🇹🇭" },
  { code: "tr", name: "Turkish", flag: "🇹🇷" },
  { code: "tk", name: "Turkmen", flag: "🇹🇲" },
  { code: "uk", name: "Ukrainian", flag: "🇺🇦" },
  { code: "ur", name: "Urdu", flag: "🇵🇰" },
  { code: "ug", name: "Uyghur", flag: "🇨🇳" },
  { code: "uz", name: "Uzbek", flag: "🇺🇿" },
  { code: "vi", name: "Vietnamese", flag: "🇻🇳" },
  { code: "cy", name: "Welsh", flag: "🏴" },
  { code: "xh", name: "Xhosa", flag: "🇿🇦" },
  { code: "yi", name: "Yiddish", flag: "🇮🇱" },
  { code: "yo", name: "Yoruba", flag: "🇳🇬" },
  { code: "zu", name: "Zulu", flag: "🇿🇦" }
];


const Translator: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('hi');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(inputText.length);
  }, [inputText]);

  const translateText = useCallback(
  async (text: string, from: string, to: string) => {
    if (!text.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post(
        'https://google-translator9.p.rapidapi.com/v2',
        {
          q: text,
          source: from === 'auto' ? '' : from,
          target: to,
          format: 'text',
        },
        {
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': apiKey,   
            'X-RapidAPI-Host': 'google-translator9.p.rapidapi.com',
          },
        }
      );

      const translated = response.data.data.translations[0].translatedText;
      setTranslatedText(translated);
    } catch (err) {
      console.error('Translation error:', err);
      setError('Translation failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  },
  []
);


const handleTranslate = () => {
  translateText(inputText, sourceLanguage, targetLanguage);
};


  const swapLanguages = useCallback(() => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
    if (translatedText) {
      setInputText(translatedText);
      setTranslatedText('');
    }
  }, [sourceLanguage, targetLanguage, translatedText]);

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
  }, []);

  const clearText = useCallback(() => {
    setInputText('');
    setTranslatedText('');
    setError('');
  }, []);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-6 space-x-2 text-sm font-medium text-blue-700 rounded-full bg-gradient-to-r from-blue-100 to-purple-100">
            <Sparkles className="w-4 h-4" />
            <span>Powered by RapidApi</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900">TEXT TRANSLATOR</h1>
          <p className="text-xl text-gray-600">
            Translate text between supported languages instantly
          </p>
        </div>

        {/* Translator Interface */}
        <div className="overflow-hidden bg-white border border-gray-100 shadow-2xl rounded-3xl">
          {/* Language Selection */}
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex flex-col items-center justify-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">From:</label>
                <select
                  value={sourceLanguage}
                  onChange={(e) => setSourceLanguage(e.target.value)}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {languages.map((lang) => (
                    <option key={`from-${lang.code}`} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={swapLanguages}
                className="p-2 transition-colors duration-200 bg-blue-100 rounded-full hover:bg-blue-200"
                title="Swap languages"
              >
                <ArrowLeftRight className="w-5 h-5 text-blue-600" />
              </button>

              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">To:</label>
                <select
                  value={targetLanguage}
                  onChange={(e) => setTargetLanguage(e.target.value)}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {languages.map((lang) => (
                    <option key={`to-${lang.code}`} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Input & Output */}
          <div className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-2 lg:divide-y-0 lg:divide-x">
            {/* Input */}
            <div className="p-8">
              <div className="relative">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter text to translate..."
                  className="w-full h-64 p-4 text-lg border border-gray-300 resize-none rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  maxLength={5000}
                />
                <div className="absolute text-sm text-gray-500 bottom-4 right-4">
                  {charCount}/5000
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={clearText}
                  className="text-gray-500 transition-colors duration-200 hover:text-gray-700"
                >
                  Clear
                </button>

                <button
                  onClick={handleTranslate}
                  disabled={!inputText.trim() || isLoading}
                  className="px-6 py-2 text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Translating...' : 'Translate'}
                </button>
              </div>
            </div>

            {/* Output */}
            <div className="p-8 bg-gray-50">
              {error ? (
                <div className="flex items-center p-4 space-x-2 text-red-600 rounded-lg bg-red-50">
                  <AlertCircle className="w-5 h-5" />
                  <span>{error}</span>
                </div>
              ) : (
                <div className="relative">
                  <div className="w-full h-64 p-4 overflow-y-auto text-lg bg-white border border-gray-300 rounded-xl">
                    {isLoading ? (
                      <div className="flex items-center justify-center h-full">
                        <div className="w-8 h-8 border-b-2 border-blue-600 rounded-full animate-spin"></div>
                      </div>
                    ) : (
                      <p className={translatedText ? 'text-gray-900' : 'text-gray-400 italic'}>
                        {translatedText || 'Translation will appear here...'}
                      </p>
                    )}
                  </div>

                  {translatedText && (
                    <div className="flex items-center mt-4 space-x-4">
                      <button
                        onClick={() => copyToClipboard(translatedText)}
                        className="flex items-center space-x-2 text-blue-600 transition-colors duration-200 hover:text-blue-700"
                      >
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translator
