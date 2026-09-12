> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdatetimeordering](https://developer.apple.com/documentation/foundation/nsdatetimeordering)

# NSDateTimeOrdering

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Key for the string that specifies how to use ambiguous numbers in date strings.

## Declaration

```objectivec
extern NSString * const NSDateTimeOrdering;
```

<a id="Discussion"></a>

## Discussion

Specify this value as a permutation of the letters M (month), D (day), Y (year), and H (hour). For example, MDYH treats “2/3/01 10” as the 3rd day of February 2001 at 10:00 am, whereas DMYH treats the same value as the 2nd day of March 2001 at 10:00 am. If fewer numbers are specified than are needed, the numbers are prioritized to satisfy day first, then month, and then year. For example, if you supply only the value 12, it means the 12th day of this month in this year because the day must be specified. If you supply “2 12” it means either February 12 or December 2, depending on if the ordering is “MDYH” or “DMYH.”

## See Also

### Date & Time Information

- [NSAMPMDesignation](nsampmdesignation.md): Deprecated. Key for the value that specifies how the morning and afternoon designations are printed, affecting strings that use the `%p` format specifier.
- [NSDateFormatString](nsdateformatstring.md): Deprecated. Key for the format string that specifies how dates are printed using the date format specifiers.
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
- [NSShortTimeDateFormatString](nsshorttimedateformatstring.md): Deprecated. Key for a format string that specifies how times and dates are abbreviated.
- [NSThisDayDesignations](nsthisdaydesignations.md): Deprecated. Key for an array of strings that specify what this day is called.
- [NSTimeDateFormatString](nstimedateformatstring.md): Deprecated. Key for the value that specifies how dates with times are printed, affecting strings that use the format specifiers `%c`, `%X`, or `%x`.
