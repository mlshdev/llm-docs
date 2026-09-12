> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsshorttimedateformatstring](https://developer.apple.com/documentation/foundation/nsshorttimedateformatstring)

# NSShortTimeDateFormatString

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Key for a format string that specifies how times and dates are abbreviated.

> Use the appropriate API from[NSDateFormatter](dateformatter.md) instead—see [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i).

## Declaration

```objectivec
extern NSString * const NSShortTimeDateFormatString;
```

<a id="Discussion"></a>

## Discussion

The default is to use dashes to separate the day, month, and year and to use a 12-hour clock, as in “31-Jan-01 1:30 PM.”\]

## See Also

### Date & Time Information

- [NSAMPMDesignation](nsampmdesignation.md): Deprecated. Key for the value that specifies how the morning and afternoon designations are printed, affecting strings that use the `%p` format specifier.
- [NSDateFormatString](nsdateformatstring.md): Deprecated. Key for the format string that specifies how dates are printed using the date format specifiers.
- [NSDateTimeOrdering](nsdatetimeordering.md): Deprecated. Key for the string that specifies how to use ambiguous numbers in date strings.
- [NSEarlierTimeDesignations](nsearliertimedesignations.md): Deprecated. Key for an array of strings that denote a time in the past.
- [NSHourNameDesignations](nshournamedesignations.md): Deprecated. Key for strings that identify the time of day.
- [NSLaterTimeDesignations](nslatertimedesignations.md): Deprecated. Key for an array of strings that denote a time in the future.
- [NSMonthNameArray](nsmonthnamearray.md): Deprecated. Key for the value that specifies the names for the months, affecting strings that use the `%B` format specifier.
- [NSNextDayDesignations](nsnextdaydesignations.md): Deprecated. Key for an array of strings that denote the day after today.
- [NSNextNextDayDesignations](nsnextnextdaydesignations.md): Deprecated. Key for an array of strings that denote the day after tomorrow.
- [NSPriorDayDesignations](nspriordaydesignations.md): Deprecated. Key for an array of strings that denote the day before today.
- [NSShortDateFormatString](nsshortdateformatstring.md): Deprecated. Key for a format string that specifies how dates are abbreviated.
- [NSShortWeekDayNameArray](nsshortweekdaynamearray.md): Deprecated. Key for an array of strings that specify the abbreviations for the days of the week, affecting strings that use the %a format specifier.
- [NSShortMonthNameArray](nsshortmonthnamearray.md): Deprecated. Key for an array of strings that specify the abbreviations for the months, affecting strings that use the `%b` format specifier.
- [NSThisDayDesignations](nsthisdaydesignations.md): Deprecated. Key for an array of strings that specify what this day is called.
- [NSTimeDateFormatString](nstimedateformatstring.md): Deprecated. Key for the value that specifies how dates with times are printed, affecting strings that use the format specifiers `%c`, `%X`, or `%x`.
