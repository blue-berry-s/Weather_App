class Weather{
    constructor(weather_cond_text, img_src, color_gradient_main, color_gradient_predict){
        this.weather_cond_text = weather_cond_text;
        this.img_src = img_src;
        this.color_gradient_main = color_gradient_main;
        this.color_gradient_predict = color_gradient_predict;
    }
        
}

const weather_code_0 = new Weather('Clear sky', 'Images\\Sunny_Icon.png', 'linear-gradient(180deg, rgba(139,227,255,1) 0%, rgba(28,72,226,1) 100%)', 'linear-gradient(90deg, rgba(139,227,255,1) 0%, rgba(28,72,226,1) 100%)');
const weather_code_1 = new Weather('Mainly clear', 'Images\\Sun_Small_Cloud_Cover_Icon.png', 'linear-gradient(180deg, rgba(139,227,255,1) 0%, rgba(28,72,226,1) 100%)', 'linear-gradient(90deg, rgba(139,227,255,1) 0%, rgba(28,72,226,1) 100%)');
const weather_code_2 = new Weather('Partly cloudy', 'Images\\Sun_Large_Cloud_Cover_Icon.png', 'linear-gradient(180deg, rgba(30,113,173,1) 0%, rgba(235,226,201,1) 100%)', 'linear-gradient(90deg, rgba(30,113,173,1) 0%, rgba(235,226,201,1) 100%)');
const weather_code_3 = new Weather('Cloudy', 'Images\\Cloudy_Icon.png', 'linear-gradient(180deg, rgba(30,113,173,1) 0%, rgba(235,226,201,1) 100%)', 'linear-gradient(90deg, rgba(30,113,173,1) 0%, rgba(235,226,201,1) 100%)');
const weather_code_45 = new Weather('Fog', 'Images\\Cloudy_Icon.png', 'linear-gradient(180deg, rgba(40,104,150,1) 0%, rgba(115,170,137,1) 100%)', 'linear-gradient(90deg, rgba(40,104,150,1) 0%, rgba(115,170,137,1) 100%)');
const weather_code_48 = new Weather('Depositing rime fog', 'Images\\Cloudy_Icon.png', 'linear-gradient(180deg, rgba(72,56,255,1) 0%, rgba(208,249,255,1) 100%)', 'linear-gradient(90deg, rgba(72,56,255,1) 0%, rgba(208,249,255,1) 100%)');
const weather_code_51 = new Weather('Light drizzle', 'Images\\Sun_Rain_Icon.png', 'linear-gradient(180deg, rgba(139,227,255,1) 0%, rgba(28,72,226,1) 100%)', 'linear-gradient(90deg, rgba(139,227,255,1) 0%, rgba(28,72,226,1) 100%)');
const weather_code_53 = new Weather('Moderate drizzle', 'Images\\Rain_Icon.png', 'linear-gradient(180deg, rgba(30,113,173,1) 0%, rgba(235,226,201,1) 100%)', 'linear-gradient(90deg, rgba(30,113,173,1) 0%, rgba(235,226,201,1) 100%)');
const weather_code_55 = new Weather('Dense drizzle', 'Images\\Rain_Icon.png', 'linear-gradient(180deg, rgba(40,104,150,1) 0%, rgba(115,170,137,1) 100%)', 'linear-gradient(90deg, rgba(40,104,150,1) 0%, rgba(115,170,137,1) 100%)');
const weather_code_56 = new Weather('Light Freezing drizzle', 'Images\\Sun_Rain_Icon.png', 'linear-gradient(180deg, rgba(72,56,255,1) 0%, rgba(208,249,255,1) 100%)', 'linear-gradient(90deg, rgba(72,56,255,1) 0%, rgba(208,249,255,1) 100%)');
const weather_code_57 = new Weather('Dense Freezing drizzle', 'Images\\Rain_Icon.png', 'linear-gradient(180deg, rgba(40,104,150,1) 0%, rgba(115,170,137,1) 100%)', 'linear-gradient(90deg, rgba(40,104,150,1) 0%, rgba(115,170,137,1) 100%)');
const weather_code_61 = new Weather('Slight Rain', 'Images\\Rain_Icon.png', 'linear-gradient(180deg, rgba(30,113,173,1) 0%, rgba(235,226,201,1) 100%)', 'linear-gradient(90deg, rgba(30,113,173,1) 0%, rgba(235,226,201,1) 100%)');
const weather_code_63 = new Weather('Moderate Rain', 'Images\\Rain_Icon.png', 'linear-gradient(180deg, rgba(40,104,150,1) 0%, rgba(115,170,137,1) 100%)', 'linear-gradient(90deg, rgba(40,104,150,1) 0%, rgba(115,170,137,1) 100%)');
const weather_code_65 = new Weather('Heavy Rain', 'Images\\Rain_Icon.png', 'linear-gradient(180deg, rgba(0,9,55,1) 0%, rgba(146,119,224,1) 100%)', 'linear-gradient(90deg, rgba(0,9,55,1) 0%, rgba(146,119,224,1) 100%)');
const weather_code_66 = new Weather('Slight Freezing Rain', 'Images\\Rain_Icon.png', 'linear-gradient(180deg, rgba(30,113,173,1) 0%, rgba(235,226,201,1) 100%)', 'linear-gradient(90deg, rgba(30,113,173,1) 0%, rgba(235,226,201,1) 100%)');
const weather_code_67 = new Weather('Heaving Freezing Rain', 'Images\\Rain_Icon.png', 'linear-gradient(180deg, rgba(40,104,150,1) 0%, rgba(115,170,137,1) 100%)', 'linear-gradient(90deg, rgba(40,104,150,1) 0%, rgba(115,170,137,1) 100%)');
const weather_code_71 = new Weather('Slight Snow', 'Images\\Snowing_Icon.png', 'linear-gradient(180deg, rgba(72,56,255,1) 0%, rgba(208,249,255,1) 100%)', 'linear-gradient(90deg, rgba(72,56,255,1) 0%, rgba(208,249,255,1) 100%)');
const weather_code_73 = new Weather('Moderate Snow', 'Images\\Snowing_Icon.png', 'linear-gradient(180deg, rgba(30,113,173,1) 0%, rgba(235,226,201,1) 100%)', 'linear-gradient(90deg, rgba(30,113,173,1) 0%, rgba(235,226,201,1) 100%)');
const weather_code_75 = new Weather('Heavy Snow', 'Images\\Snowing_Icon.png', 'linear-gradient(180deg, rgba(40,104,150,1) 0%, rgba(115,170,137,1) 100%)', 'linear-gradient(90deg, rgba(40,104,150,1) 0%, rgba(115,170,137,1) 100%)');
const weather_code_77 = new Weather('Snow grains', 'Images\\Snowing_Icon.png', 'linear-gradient(180deg, rgba(72,56,255,1) 0%, rgba(208,249,255,1) 100%)', 'linear-gradient(90deg, rgba(72,56,255,1) 0%, rgba(208,249,255,1) 100%)');
const weather_code_80 = new Weather('Slight Rain Shower', 'Images\\Rain_Icon.png', 'linear-gradient(180deg, rgba(30,113,173,1) 0%, rgba(235,226,201,1) 100%)', 'linear-gradient(90deg, rgba(30,113,173,1) 0%, rgba(235,226,201,1) 100%)');
const weather_code_81 = new Weather('Moderate Rain Shower', 'Images\\Rain_Icon.png', 'linear-gradient(180deg, rgba(40,104,150,1) 0%, rgba(115,170,137,1) 100%)', 'linear-gradient(90deg, rgba(40,104,150,1) 0%, rgba(115,170,137,1) 100%)');
const weather_code_82 = new Weather('Violent Rain Shower', 'Images\\Rain_Icon.png', 'linear-gradient(180deg, rgba(0,9,55,1) 0%, rgba(146,119,224,1) 100%)', 'linear-gradient(90deg, rgba(0,9,55,1) 0%, rgba(146,119,224,1) 100%)');
const weather_code_85 = new Weather('Slight Snow Showers', 'Images\\Snowing_Icon.png', 'linear-gradient(180deg, rgba(72,56,255,1) 0%, rgba(208,249,255,1) 100%)', 'linear-gradient(90deg, rgba(72,56,255,1) 0%, rgba(208,249,255,1) 100%)');
const weather_code_86 = new Weather('Heaby Snow Showers', 'Images\\Snowing_Icon.png', 'linear-gradient(180deg, rgba(30,113,173,1) 0%, rgba(235,226,201,1) 100%)', 'linear-gradient(90deg, rgba(30,113,173,1) 0%, rgba(235,226,201,1) 100%)');
const weather_code_95 = new Weather('Thunderstorm', 'Images\\Thunder_Storm_Icon.png', 'linear-gradient(180deg, rgba(0,9,55,1) 0%, rgba(146,119,224,1) 100%)', 'linear-gradient(90deg, rgba(0,9,55,1) 0%, rgba(146,119,224,1) 100%)');
const weather_code_96 = new Weather('Thunderstorm with slight hail', 'Images\\Thunder_Storm_Icon.png', 'linear-gradient(180deg, rgba(0,9,55,1) 0%, rgba(146,119,224,1) 100%)', 'linear-gradient(90deg, rgba(0,9,55,1) 0%, rgba(146,119,224,1) 100%)');
const weather_code_99 = new Weather('Thunderstorm with heavy hail', 'Images\\Thunder_Storm_Icon.png', 'linear-gradient(180deg, rgba(0,9,55,1) 0%, rgba(146,119,224,1) 100%)', 'linear-gradient(90deg, rgba(0,9,55,1) 0%, rgba(146,119,224,1) 100%)');

const weather_code_dict = {
    0:  weather_code_0,
    1:  weather_code_1,
    2:  weather_code_2,
    3:  weather_code_3,
    45: weather_code_45,
    48:	weather_code_48,
    51: weather_code_51,
    53: weather_code_53,
    55:	weather_code_55,
    56: weather_code_56,
    57:	weather_code_57,
    61: weather_code_61,
    63: weather_code_63,
    65:	weather_code_65,
    66: weather_code_66,
    67: weather_code_67,
    71: weather_code_71,
    73: weather_code_73,
    75: weather_code_75,
    77: weather_code_77,
    80: weather_code_80,
    81: weather_code_81,
    82:	weather_code_82,
    85: weather_code_85,
    86:	weather_code_86,
    95: weather_code_95,
    96: weather_code_96,
    99: weather_code_99
}

