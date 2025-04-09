const toolsData = {
    imageTools: [
        {
            id: 'image-to-png',
            name: 'Image to PNG Converter',
            description: 'Convert images to PNG format easily',
            category: 'image',
            url: 'tools/image/image-to-png.html'
        },
        {
            id: 'image-to-jpg',
            name: 'Image to JPG Converter',
            description: 'Convert images to JPG format with quality control',
            category: 'image',
            url: 'tools/image/image-to-jpg.html'
        },
        // Add more image tools here
    ],
    seoTools: [
        {
            id: 'meta-tag-generator',
            name: 'Meta Tag Generator',
            description: 'Generate SEO-friendly meta tags for your website',
            category: 'seo',
            url: 'tools/seo/meta-tag-generator.html'
        },
        {
            id: 'keyword-density',
            name: 'Keyword Density Checker',
            description: 'Check keyword density in your content',
            category: 'seo',
            url: 'tools/seo/keyword-density.html'
        },
        // Add more SEO tools here
    ],
    textTools: [
        {
            id: 'word-counter',
            name: 'Word Counter',
            description: 'Count words, characters, and paragraphs in your text',
            category: 'text',
            url: 'tools/text/word-counter.html'
        },
        {
            id: 'case-converter',
            name: 'Case Converter',
            description: 'Convert text case to uppercase, lowercase, or title case',
            category: 'text',
            url: 'tools/text/case-converter.html'
        },
        // Add more text tools here
    ],
    developerTools: [
        {
            id: 'json-formatter',
            name: 'JSON Formatter',
            description: 'Format and validate JSON data',
            category: 'developer',
            url: 'tools/developer/json-formatter.html'
        },
        {
            id: 'html-to-markdown',
            name: 'HTML to Markdown',
            description: 'Convert HTML to Markdown format',
            category: 'developer',
            url: 'tools/developer/html-to-markdown.html'
        },
        // Add more developer tools here
    ],
    calculators: [
        {
            id: 'percentage-calculator',
            name: 'Percentage Calculator',
            description: 'Calculate percentages easily',
            category: 'calculator',
            url: 'tools/calculator/percentage-calculator.html'
        },
        {
            id: 'age-calculator',
            name: 'Age Calculator',
            description: 'Calculate age between two dates',
            category: 'calculator',
            url: 'tools/calculator/age-calculator.html'
        },
        // Add more calculators here
    ],
    converters: [
        {
            id: 'length-converter',
            name: 'Length Converter',
            description: 'Convert between different length units',
            category: 'converter',
            url: 'tools/converter/length-converter.html'
        },
        {
            id: 'weight-converter',
            name: 'Weight Converter',
            description: 'Convert between different weight units',
            category: 'converter',
            url: 'tools/converter/weight-converter.html'
        },
        // Add more converters here
    ],
    securityTools: [
        {
            id: 'password-generator',
            name: 'Password Generator',
            description: 'Generate strong, secure passwords',
            category: 'security',
            url: 'tools/security/password-generator.html'
        },
        {
            id: 'hash-generator',
            name: 'Hash Generator',
            description: 'Generate MD5, SHA-256 hashes',
            category: 'security',
            url: 'tools/security/hash-generator.html'
        },
        // Add more security tools here
    ],
    socialTools: [
        {
            id: 'youtube-thumbnail',
            name: 'YouTube Thumbnail Downloader',
            description: 'Download YouTube video thumbnails',
            category: 'social',
            url: 'tools/social/youtube-thumbnail.html'
        },
        {
            id: 'instagram-downloader',
            name: 'Instagram Photo Downloader',
            description: 'Download Instagram photos',
            category: 'social',
            url: 'tools/social/instagram-downloader.html'
        },
        // Add more social media tools here
    ],
    miscTools: [
        {
            id: 'qr-generator',
            name: 'QR Code Generator',
            description: 'Generate QR codes for text or URLs',
            category: 'misc',
            url: 'tools/misc/qr-generator.html'
        },
        {
            id: 'random-number',
            name: 'Random Number Generator',
            description: 'Generate random numbers with custom range',
            category: 'misc',
            url: 'tools/misc/random-number.html'
        },
        // Add more miscellaneous tools here
    ]
};

// Combine all tools into a single array for easier searching
const allTools = [
    ...toolsData.imageTools,
    ...toolsData.seoTools,
    ...toolsData.textTools,
    ...toolsData.developerTools,
    ...toolsData.calculators,
    ...toolsData.converters,
    ...toolsData.securityTools,
    ...toolsData.socialTools,
    ...toolsData.miscTools
];