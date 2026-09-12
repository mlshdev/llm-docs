> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/strings-and-text](https://developer.apple.com/documentation/foundation/strings-and-text)

# Strings and Text (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Create and process strings of Unicode characters, use regular expressions to find patterns, and perform natural language analysis of text.

## Topics

### Strings

- [String](https://developer.apple.com/documentation/swift/string): A Unicode string value that is a collection of characters.
- [String Encodings](1497293-string-encodings.md): Constants for encoding standards used when converting raw data to and from string representations.

### Strings with Metadata

- [AttributedString](attributedstring.md): A value type for a string with associated attributes for portions of its text.
- [AttributedSubstring](attributedsubstring.md): A portion of an attributed string.
- [Attributed String Supporting Types](attributed-string-supporting-types.md): Types that the attributed string, attributed substring, and helper types extend or conform to, for sharing common functionality.
- [NSAttributedString](nsattributedstring.md): A string of text that manages data, layout, and stylistic information for ranges of characters to support rendering.
- [NSMutableAttributedString](nsmutableattributedstring.md): A mutable string with associated attributes (such as visual style, hyperlinks, or accessibility data) for portions of its text.

### Characters

- [CharacterSet](characterset.md): A set of Unicode character values for use in search operations.
- [UnicodeScalar](https://developer.apple.com/documentation/swift/unicodescalar)

### Pattern Matching

- [Scanner](scanner.md): A string parser that scans for substrings or characters in a character set, and for numeric values from decimal, hexadecimal, and floating-point representations.
- [NSRegularExpression](nsregularexpression.md): An immutable representation of a compiled regular expression that you apply to Unicode strings.
- [NSDataDetector](nsdatadetector.md): A specialized regular expression object that matches natural language text for predefined data patterns.
- [NSTextCheckingResult](nstextcheckingresult.md): An occurrence of textual content found during the analysis of a block of text, such as when matching a regular expression.
- [NSNotFound](nsnotfound-4qp9h.md): A value indicating that a requested item couldn’t be found or doesn’t exist.

### Spelling and Grammar

- [NSSpellServer](nsspellserver.md): A server that your app uses to provide a spell checker service to other apps running in the system.
- [NSSpellServerDelegate](nsspellserverdelegate.md): The optional methods implemented by the delegate of a spell server.

### Localization

- [Locale](locale.md): Information about linguistic, cultural, and technological conventions for use in formatting data for presentation.
- [NSOrthography](nsorthography.md): A description of the linguistic content of natural language text, typically used for spelling and grammar checking.
- [NSLocalizedString(\_:tableName:bundle:value:comment:)](nslocalizedstring%28__tablename_bundle_value_comment_%29.md): Returns a localized string from a table that Xcode generates for you when exporting localizations.
- [LocalizedStringResource](localizedstringresource.md): A reference to a localizable string, accessible from another process.
- [CustomLocalizedStringResourceConvertible](customlocalizedstringresourceconvertible.md): A type that provides an out-of-process localizable description.
- [URLResource](urlresource.md): A resource located at a particular file URL within a bundle.

### Deprecated

- [NSLinguisticTagger](nslinguistictagger.md): Deprecated. Analyze natural language text to tag part of speech and lexical class, identify names, perform lemmatization, and determine the language and script.
- [Deprecated String Encodings](1497268-deprecated-string-encodings.md)

## See Also

### Fundamentals

- [Numbers, Data, and Basic Values](numbers-data-and-basic-values.md): Work with primitive values and other fundamental types used throughout Cocoa.
- [Collections](collections.md): Use arrays, dictionaries, sets, and specialized collections to store and iterate groups of objects or values.
- [Dates and Times](dates-and-times.md): Compare dates and times, and perform calendar and time zone calculations.
- [Units and Measurement](units-and-measurement.md): Label numeric quantities with physical dimensions to allow locale-aware formatting and conversion between related units.
- [Data Formatting](data-formatting.md): Convert numbers, dates, measurements, and other values to and from locale-aware string representations.
- [Filters and Sorting](filters-and-sorting.md): Use predicates, expressions, and sort descriptors to examine elements in collections and other services.

# Strings and Text (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Create and process strings of Unicode characters, use regular expressions to find patterns, and perform natural language analysis of text.

## Topics

### Strings

- [NSString](nsstring.md): A static, plain-text Unicode string object.
- [NSMutableString](nsmutablestring.md): A dynamic plain-text Unicode string object.

### Strings with Metadata

- [NSAttributedString](nsattributedstring.md): A string of text that manages data, layout, and stylistic information for ranges of characters to support rendering.
- [NSMutableAttributedString](nsmutableattributedstring.md): A mutable string with associated attributes (such as visual style, hyperlinks, or accessibility data) for portions of its text.

### Characters

- [NSCharacterSet](nscharacterset.md): An object representing a fixed set of Unicode character values for use in search operations.
- [NSMutableCharacterSet](nsmutablecharacterset.md): An object representing a mutable set of Unicode character values for use in search operations.
- [unichar](unichar.md): Type for UTF-16 code units.

### Pattern Matching

- [NSScanner](scanner.md): A string parser that scans for substrings or characters in a character set, and for numeric values from decimal, hexadecimal, and floating-point representations.
- [NSRegularExpression](nsregularexpression.md): An immutable representation of a compiled regular expression that you apply to Unicode strings.
- [NSDataDetector](nsdatadetector.md): A specialized regular expression object that matches natural language text for predefined data patterns.
- [NSTextCheckingResult](nstextcheckingresult.md): An occurrence of textual content found during the analysis of a block of text, such as when matching a regular expression.
- [NSNotFound](nsnotfound-4qp9h.md): A value indicating that a requested item couldn’t be found or doesn’t exist.

### Spelling and Grammar

- [NSSpellServer](nsspellserver.md): A server that your app uses to provide a spell checker service to other apps running in the system.
- [NSSpellServerDelegate](nsspellserverdelegate.md): The optional methods implemented by the delegate of a spell server.

### Localization

- [NSLocale](nslocale.md): Information about linguistic, cultural, and technological conventions for use in formatting data for presentation.
- [NSOrthography](nsorthography.md): A description of the linguistic content of natural language text, typically used for spelling and grammar checking.
- [NSLocalizedString](nslocalizedstring.md): Returns a localized version of a string from the default table, which Xcode autogenerates when exporting localizations.
- [NSLocalizedStringFromTable](nslocalizedstringfromtable.md): Returns a localized version of a string from the table that you specify, which Xcode autogenerates when exporting localizations.
- [NSLocalizedStringFromTableInBundle](nslocalizedstringfromtableinbundle.md): Returns a localized version of a string from the table and bundle that you specify, which Xcode autogenerates when exporting localizations.
- [NSLocalizedStringWithDefaultValue](nslocalizedstringwithdefaultvalue.md): Returns a localized version of a string identified by a key in the table that you specify, which Xcode autogenerates when exporting localizations.

### Deprecated

- [NSLinguisticTagger](nslinguistictagger.md): Deprecated. Analyze natural language text to tag part of speech and lexical class, identify names, perform lemmatization, and determine the language and script.
- [Deprecated String Encodings](1497268-deprecated-string-encodings.md)

## See Also

### Fundamentals

- [Numbers, Data, and Basic Values](numbers-data-and-basic-values.md): Work with primitive values and other fundamental types used throughout Cocoa.
- [Collections](collections.md): Use arrays, dictionaries, sets, and specialized collections to store and iterate groups of objects or values.
- [Dates and Times](dates-and-times.md): Compare dates and times, and perform calendar and time zone calculations.
- [Units and Measurement](units-and-measurement.md): Label numeric quantities with physical dimensions to allow locale-aware formatting and conversion between related units.
- [Data Formatting](data-formatting.md): Convert numbers, dates, measurements, and other values to and from locale-aware string representations.
- [Filters and Sorting](filters-and-sorting.md): Use predicates, expressions, and sort descriptors to examine elements in collections and other services.
