> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/locale-calendar-identifiers](https://developer.apple.com/documentation/corefoundation/locale-calendar-identifiers)

# Locale Calendar Identifiers (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

Predefined locale keys used to get calendar values—values for `kCFLocaleCalendarIdentifier`.

<a id="overview"></a>

## Overview

Locale objects use key-value pairs to store property values. Use the [CFLocaleGetValue(\_:\_:)](cflocalegetvalue%28____%29.md) function to get the value of a specific property listed above.

## Topics

### Constants

- [gregorianCalendar](cfcalendaridentifier/gregoriancalendar.md): The name of the calendar currently supported by the [calendarName](cfdateformatterkey/calendarname.md) property.
- [buddhistCalendar](cfcalendaridentifier/buddhistcalendar.md): Specifies the Buddhist calendar.
- [chineseCalendar](cfcalendaridentifier/chinesecalendar.md): Specifies the Chinese calendar.
- [hebrewCalendar](cfcalendaridentifier/hebrewcalendar.md): Specifies the Hebrew calendar.
- [islamicCalendar](cfcalendaridentifier/islamiccalendar.md): Specifies the Islamic calendar.
- [islamicCivilCalendar](cfcalendaridentifier/islamiccivilcalendar.md): Specifies the Islamic tabular calendar with Friday (civil) origin.
- [islamicTabularCalendar](cfcalendaridentifier/islamictabularcalendar.md): Specifies the Islamic tabular calendar with Thursday (astronomical) origin.
- [islamicUmmAlQuraCalendar](cfcalendaridentifier/islamicummalquracalendar.md): Specifies the Islamic Umm Al Qura calendar.
- [japaneseCalendar](cfcalendaridentifier/japanesecalendar.md): Specifies the Japanese calendar.
- [republicOfChinaCalendar](cfcalendaridentifier/republicofchinacalendar.md): Specifies the calendar for the Republic of China.
- [persianCalendar](cfcalendaridentifier/persiancalendar.md): Specifies the Persian calendar.
- [indianCalendar](cfcalendaridentifier/indiancalendar.md): Specifies the Indian calendar.
- [cfiso8601Calendar](cfcalendaridentifier/cfiso8601calendar.md): Specifies the ISO 8601 calendar.

## See Also

### Constants

- [CFLocaleLanguageDirection](cflocalelanguagedirection.md): These constants describe the text direction for a language. They are returned by the functions [CFLocaleGetLanguageCharacterDirection(\_:)](cflocalegetlanguagecharacterdirection%28__%29.md) and [CFLocaleGetLanguageLineDirection(\_:)](cflocalegetlanguagelinedirection%28__%29.md).
- [Locale Property Keys](locale-property-keys.md): Predefined locale keys used to get property values.
- [Locale Change Notification](locale-change-notification.md): Identifier for notification sent if the current locale changes.

# Locale Calendar Identifiers (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

Predefined locale keys used to get calendar values—values for `kCFLocaleCalendarIdentifier`.

<a id="overview"></a>

## Overview

Locale objects use key-value pairs to store property values. Use the [CFLocaleGetValue](cflocalegetvalue%28____%29.md) function to get the value of a specific property listed above.

## Topics

### Constants

- [kCFGregorianCalendar](cfcalendaridentifier/gregoriancalendar.md): The name of the calendar currently supported by the [kCFDateFormatterCalendarName](cfdateformatterkey/calendarname.md) property.
- [kCFBuddhistCalendar](cfcalendaridentifier/buddhistcalendar.md): Specifies the Buddhist calendar.
- [kCFChineseCalendar](cfcalendaridentifier/chinesecalendar.md): Specifies the Chinese calendar.
- [kCFHebrewCalendar](cfcalendaridentifier/hebrewcalendar.md): Specifies the Hebrew calendar.
- [kCFIslamicCalendar](cfcalendaridentifier/islamiccalendar.md): Specifies the Islamic calendar.
- [kCFIslamicCivilCalendar](cfcalendaridentifier/islamiccivilcalendar.md): Specifies the Islamic tabular calendar with Friday (civil) origin.
- [kCFIslamicTabularCalendar](cfcalendaridentifier/islamictabularcalendar.md): Specifies the Islamic tabular calendar with Thursday (astronomical) origin.
- [kCFIslamicUmmAlQuraCalendar](cfcalendaridentifier/islamicummalquracalendar.md): Specifies the Islamic Umm Al Qura calendar.
- [kCFJapaneseCalendar](cfcalendaridentifier/japanesecalendar.md): Specifies the Japanese calendar.
- [kCFRepublicOfChinaCalendar](cfcalendaridentifier/republicofchinacalendar.md): Specifies the calendar for the Republic of China.
- [kCFPersianCalendar](cfcalendaridentifier/persiancalendar.md): Specifies the Persian calendar.
- [kCFIndianCalendar](cfcalendaridentifier/indiancalendar.md): Specifies the Indian calendar.
- [kCFISO8601Calendar](cfcalendaridentifier/cfiso8601calendar.md): Specifies the ISO 8601 calendar.

## See Also

### Constants

- [CFLocaleLanguageDirection](cflocalelanguagedirection.md): These constants describe the text direction for a language. They are returned by the functions [CFLocaleGetLanguageCharacterDirection](cflocalegetlanguagecharacterdirection%28__%29.md) and [CFLocaleGetLanguageLineDirection](cflocalegetlanguagelinedirection%28__%29.md).
- [Locale Property Keys](locale-property-keys.md): Predefined locale keys used to get property values.
- [Locale Change Notification](locale-change-notification.md): Identifier for notification sent if the current locale changes.
