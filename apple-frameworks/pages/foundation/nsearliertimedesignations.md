> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsearliertimedesignations](https://developer.apple.com/documentation/foundation/nsearliertimedesignations)

# NSEarlierTimeDesignations

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Key for an array of strings that denote a time in the past.

> There is no direct replacement. If you need to localize words such as “prior,” you should use a strings file as you would for any other localizable text—see Localizing String Resources.

## Declaration

```objectivec
extern NSString * const NSEarlierTimeDesignations;
```

<a id="Discussion"></a>

## Discussion

These are adjectives that modify values from `NSYearMonthWeekDesignations`. The defaults are “prior,” “last,” “past,” and “ago.”

## See Also

### Date & Time Information

- [NSAMPMDesignation](nsampmdesignation.md): Deprecated. Key for the value that specifies how the morning and afternoon designations are printed, affecting strings that use the `%p` format specifier.
- [NSDateFormatString](nsdateformatstring.md): Deprecated. Key for the format string that specifies how dates are printed using the date format specifiers.
- [NSDateTimeOrdering](nsdatetimeordering.md): Deprecated. Key for the string that specifies how to use ambiguous numbers in date strings.
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
