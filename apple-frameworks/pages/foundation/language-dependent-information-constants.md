> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/language-dependent-information-constants](https://developer.apple.com/documentation/foundation/language-dependent-information-constants)

# Language-Dependent Information Constants (Swift)

**Framework:** Foundation  
**Kind:** API Collection

These constants are deprecated and shouldn’t be used.

## See Also

### Deprecated

- [init(user:)](userdefaults/init%28user_%29.md): Deprecated. Creates a user defaults object initialized with the defaults for the specified user account.
- [synchronize()](userdefaults/synchronize%28%29.md): Waits for any pending asynchronous updates to the defaults database and returns; this method is unnecessary and shouldn’t be used.
- [resetStandardUserDefaults()](userdefaults/resetstandarduserdefaults%28%29.md): This method has no effect and shouldn’t be used.
- [persistentDomainNames()](userdefaults/persistentdomainnames%28%29.md): Deprecated. Returns an array of the current persistent domain names.
- [completedInitialCloudSyncNotification](userdefaults/completedinitialcloudsyncnotification.md): Deprecated. Posted when ubiquitous defaults finish downloading data, either the first time a device is connected to an iCloud account or when a user switches their primary iCloud account.
- [didChangeCloudAccountsNotification](userdefaults/didchangecloudaccountsnotification.md): Deprecated. Posted when the user changes the primary iCloud account.
- [noCloudAccountNotification](userdefaults/nocloudaccountnotification.md): Deprecated. Posted when a cloud default is set, but no iCloud user is logged in.

# Language-Dependent Information Constants (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

These constants are deprecated and shouldn’t be used.

## Topics

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
- [NSShortTimeDateFormatString](nsshorttimedateformatstring.md): Deprecated. Key for a format string that specifies how times and dates are abbreviated.
- [NSThisDayDesignations](nsthisdaydesignations.md): Deprecated. Key for an array of strings that specify what this day is called.
- [NSTimeDateFormatString](nstimedateformatstring.md): Deprecated. Key for the value that specifies how dates with times are printed, affecting strings that use the format specifiers `%c`, `%X`, or `%x`.
- [NSTimeFormatString](nstimeformatstring.md): Deprecated. Key for a format string that specifies how dates with times are printed.
- [NSWeekDayNameArray](nsweekdaynamearray.md): Deprecated. Key for an array of strings that specify the names for the days of the week, affecting strings that use the `%A` format specifier.
- [NSYearMonthWeekDesignations](nsyearmonthweekdesignations.md): Deprecated. Key for an array of strings that specify the words for year, month, and week in the current locale.

### Numeric Information

- [NSCurrencySymbol](nscurrencysymbol.md): Deprecated. A string that specifies the symbol used to denote currency in this language.
- [NSDecimalDigits](nsdecimaldigits.md): Deprecated. Strings that identify the decimal digits in addition to or instead of the ASCII digits.
- [NSDecimalSeparator](nsdecimalseparator.md): Deprecated. A string that specifies the decimal separator.
- [NSInternationalCurrencyString](nsinternationalcurrencystring.md): Deprecated. A string containing a three-letter abbreviation for currency, following the ISO 4217 standard.
- [NSNegativeCurrencyFormatString](nsnegativecurrencyformatstring.md): Deprecated. A format string that specifies how negative numbers are printed when representing a currency value.
- [NSPositiveCurrencyFormatString](nspositivecurrencyformatstring.md): Deprecated. A format string that specifies how positive numbers are printed when representing a currency value.
- [NSThousandsSeparator](nsthousandsseparator.md): Deprecated. A string that specifies the separator character for the thousands place of a decimal number.

## See Also

### Deprecated

- [initWithUser:](userdefaults/init%28user_%29.md): Deprecated. Creates a user defaults object initialized with the defaults for the specified user account.
- [synchronize](userdefaults/synchronize%28%29.md): Waits for any pending asynchronous updates to the defaults database and returns; this method is unnecessary and shouldn’t be used.
- [resetStandardUserDefaults](userdefaults/resetstandarduserdefaults%28%29.md): This method has no effect and shouldn’t be used.
- [persistentDomainNames](userdefaults/persistentdomainnames%28%29.md): Deprecated. Returns an array of the current persistent domain names.
- [NSUbiquitousUserDefaultsCompletedInitialSyncNotification](userdefaults/completedinitialcloudsyncnotification.md): Deprecated. Posted when ubiquitous defaults finish downloading data, either the first time a device is connected to an iCloud account or when a user switches their primary iCloud account.
- [NSUbiquitousUserDefaultsDidChangeAccountsNotification](userdefaults/didchangecloudaccountsnotification.md): Deprecated. Posted when the user changes the primary iCloud account.
- [NSUbiquitousUserDefaultsNoCloudAccountNotification](userdefaults/nocloudaccountnotification.md): Deprecated. Posted when a cloud default is set, but no iCloud user is logged in.
