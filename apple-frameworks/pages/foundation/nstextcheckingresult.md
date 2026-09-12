> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult](https://developer.apple.com/documentation/foundation/nstextcheckingresult)

# NSTextCheckingResult (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An occurrence of textual content found during the analysis of a block of text, such as when matching a regular expression.

## Declaration

```swift
class NSTextCheckingResult
```

<a id="overview"></a>

## Overview

On both iOS and macOS, instances of [NSTextCheckingResult](nstextcheckingresult.md) are returned by the [NSRegularExpression](nsregularexpression.md) class and the [NSDataDetector](nsdatadetector.md) class to indicate the discovery of content. In those cases, what is found may be a match for a regular expression or a date, address, phone number, and so on. In macOS, instances of `NSTextCheckingResult` are returned by the [NSSpellChecker](https://developer.apple.com/documentation/appkit/nsspellchecker) object to describe the results of spelling, grammar, or text-substitution actions.

## Topics

### Text Checking Type Range and Type

- [range](nstextcheckingresult/range.md): Returns the range of the result that the receiver represents.
- [resultType](nstextcheckingresult/resulttype.md): Returns the text checking result type that the receiver represents.
- [numberOfRanges](nstextcheckingresult/numberofranges.md): Returns the number of ranges.
- [range(at:)](nstextcheckingresult/range%28at_%29.md): Returns the result type that the range represents.

### Text Checking Results for Text Replacement

- [replacementCheckingResult(range:replacementString:)](nstextcheckingresult/replacementcheckingresult%28range_replacementstring_%29.md): Creates and returns a text checking result with the specified replacement string.
- [replacementString](nstextcheckingresult/replacementstring.md): A replacement string from one of a number of replacement checking results.

### Text Checking Results for Regular Expressions

- [regularExpressionCheckingResult(ranges:count:regularExpression:)](nstextcheckingresult/regularexpressioncheckingresult%28ranges_count_regularexpression_%29.md): Creates and returns a type checking result with the specified regular expression data.
- [regularExpression](nstextcheckingresult/regularexpression.md): The regular expression of a type checking result.

### Text Checking Result Components

- [components](nstextcheckingresult/components.md): A dictionary containing the components of a type checking result.

### Text Checking Results for URLs

- [linkCheckingResult(range:url:)](nstextcheckingresult/linkcheckingresult%28range_url_%29.md): Creates and returns a text checking result with the specified URL.
- [url](nstextcheckingresult/url.md): The URL of a type checking result.

### Text Checking Results for Addresses

- [addressCheckingResult(range:components:)](nstextcheckingresult/addresscheckingresult%28range_components_%29.md): Creates and returns a text checking result with the specified address components.
- [addressComponents](nstextcheckingresult/addresscomponents.md): The address dictionary of a type checking result.

### Text Checking Results for Transit Information

- [transitInformationCheckingResult(range:components:)](nstextcheckingresult/transitinformationcheckingresult%28range_components_%29.md): Creates and returns a text checking result with the specified transit information.

### Text Checking Results for Phone Numbers

- [phoneNumberCheckingResult(range:phoneNumber:)](nstextcheckingresult/phonenumbercheckingresult%28range_phonenumber_%29.md): Creates and returns a text checking result with the specified phone number.
- [phoneNumber](nstextcheckingresult/phonenumber.md): The phone number of a type checking result.

### Text Checking Results for Dates and Times

- [dateCheckingResult(range:date:)](nstextcheckingresult/datecheckingresult%28range_date_%29.md): Creates and returns a text checking result with the specified date.
- [dateCheckingResult(range:date:timeZone:duration:)](nstextcheckingresult/datecheckingresult%28range_date_timezone_duration_%29.md): Creates and returns a text checking result with the specified date, time zone, and duration.
- [date](nstextcheckingresult/date.md): The date component of a type checking result.
- [duration](nstextcheckingresult/duration.md): The duration component of a type checking result.
- [timeZone](nstextcheckingresult/timezone.md): The time zone component of a type checking result.

### Text Checking Results for Typography

- [dashCheckingResult(range:replacementString:)](nstextcheckingresult/dashcheckingresult%28range_replacementstring_%29.md): Creates and returns a text checking result with the specified dash corrected replacement string.
- [quoteCheckingResult(range:replacementString:)](nstextcheckingresult/quotecheckingresult%28range_replacementstring_%29.md): Creates and returns a text checking result with the specified quote-balanced replacement string.

### Text Checking Results for Spelling

- [spellCheckingResult(range:)](nstextcheckingresult/spellcheckingresult%28range_%29.md): Creates and returns a text checking result with the range of a misspelled word.
- [correctionCheckingResult(range:replacementString:)](nstextcheckingresult/correctioncheckingresult%28range_replacementstring_%29.md): Creates and returns a text checking result after detecting a possible correction.

### Text Checking Results for Orthography

- [orthographyCheckingResult(range:orthography:)](nstextcheckingresult/orthographycheckingresult%28range_orthography_%29.md): Creates and returns a text checking result with the specified orthography.
- [orthography](nstextcheckingresult/orthography.md): The detected orthography of a type checking result.

### Text Checking Results for Grammar

- [grammarCheckingResult(range:details:)](nstextcheckingresult/grammarcheckingresult%28range_details_%29.md): Creates and returns a text checking result with the specified array of grammatical errors.
- [grammarDetails](nstextcheckingresult/grammardetails.md): The details of a located grammatical type checking result.

### Adjusting the Ranges of a Text Checking Result

- [adjustingRanges(offset:)](nstextcheckingresult/adjustingranges%28offset_%29.md): Returns a new text checking result after adjusting the ranges as specified by the offset.

### Constants

- [Keys for Transit Components](keys-for-transit-components.md): The following constants identify the possible keys returned in the components dictionary.
- [Keys for Address Components](keys-for-address-components.md): The following constants identify the possible keys returned in the [addressComponents](nstextcheckingresult/addresscomponents.md) dictionary.
- [NSTextCheckingResult.CheckingType](nstextcheckingresult/checkingtype.md): These constants specify the type of checking the methods should do. They are returned by [resultType](nstextcheckingresult/resulttype.md).
- [NSTextCheckingTypes](nstextcheckingtypes.md): Defines the types of checking that are available. These values can be combined using the C-bitwise OR operator. The system supports its own internal types, and the user can extend those types by subclassing `NSTextCheckingResult` and adding their own custom types.
- [NSTextCheckingKey](nstextcheckingkey.md)
- [Anonymous](1476845-anonymous.md)

### Initializers

- [init(coder:)](nstextcheckingresult/init%28coder_%29.md)

### Instance Properties

- [alternativeStrings](nstextcheckingresult/alternativestrings.md)

### Instance Methods

- [range(withName:)](nstextcheckingresult/range%28withname_%29.md)

### Type Methods

- [correctionCheckingResult(range:replacementString:alternativeStrings:)](nstextcheckingresult/correctioncheckingresult%28range_replacementstring_alternativestrings_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Pattern Matching

- [Scanner](scanner.md): A string parser that scans for substrings or characters in a character set, and for numeric values from decimal, hexadecimal, and floating-point representations.
- [NSRegularExpression](nsregularexpression.md): An immutable representation of a compiled regular expression that you apply to Unicode strings.
- [NSDataDetector](nsdatadetector.md): A specialized regular expression object that matches natural language text for predefined data patterns.
- [NSNotFound](nsnotfound-4qp9h.md): A value indicating that a requested item couldn’t be found or doesn’t exist.

# NSTextCheckingResult (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An occurrence of textual content found during the analysis of a block of text, such as when matching a regular expression.

## Declaration

```objectivec
@interface NSTextCheckingResult : NSObject
```

<a id="overview"></a>

## Overview

On both iOS and macOS, instances of [NSTextCheckingResult](nstextcheckingresult.md) are returned by the [NSRegularExpression](nsregularexpression.md) class and the [NSDataDetector](nsdatadetector.md) class to indicate the discovery of content. In those cases, what is found may be a match for a regular expression or a date, address, phone number, and so on. In macOS, instances of `NSTextCheckingResult` are returned by the [NSSpellChecker](https://developer.apple.com/documentation/appkit/nsspellchecker) object to describe the results of spelling, grammar, or text-substitution actions.

## Topics

### Text Checking Type Range and Type

- [range](nstextcheckingresult/range.md): Returns the range of the result that the receiver represents.
- [resultType](nstextcheckingresult/resulttype.md): Returns the text checking result type that the receiver represents.
- [numberOfRanges](nstextcheckingresult/numberofranges.md): Returns the number of ranges.
- [rangeAtIndex:](nstextcheckingresult/range%28at_%29.md): Returns the result type that the range represents.

### Text Checking Results for Text Replacement

- [replacementCheckingResultWithRange:replacementString:](nstextcheckingresult/replacementcheckingresult%28range_replacementstring_%29.md): Creates and returns a text checking result with the specified replacement string.
- [replacementString](nstextcheckingresult/replacementstring.md): A replacement string from one of a number of replacement checking results.

### Text Checking Results for Regular Expressions

- [regularExpressionCheckingResultWithRanges:count:regularExpression:](nstextcheckingresult/regularexpressioncheckingresult%28ranges_count_regularexpression_%29.md): Creates and returns a type checking result with the specified regular expression data.
- [regularExpression](nstextcheckingresult/regularexpression.md): The regular expression of a type checking result.

### Text Checking Result Components

- [components](nstextcheckingresult/components.md): A dictionary containing the components of a type checking result.

### Text Checking Results for URLs

- [linkCheckingResultWithRange:URL:](nstextcheckingresult/linkcheckingresult%28range_url_%29.md): Creates and returns a text checking result with the specified URL.
- [URL](nstextcheckingresult/url.md): The URL of a type checking result.

### Text Checking Results for Addresses

- [addressCheckingResultWithRange:components:](nstextcheckingresult/addresscheckingresult%28range_components_%29.md): Creates and returns a text checking result with the specified address components.
- [addressComponents](nstextcheckingresult/addresscomponents.md): The address dictionary of a type checking result.

### Text Checking Results for Transit Information

- [transitInformationCheckingResultWithRange:components:](nstextcheckingresult/transitinformationcheckingresult%28range_components_%29.md): Creates and returns a text checking result with the specified transit information.

### Text Checking Results for Phone Numbers

- [phoneNumberCheckingResultWithRange:phoneNumber:](nstextcheckingresult/phonenumbercheckingresult%28range_phonenumber_%29.md): Creates and returns a text checking result with the specified phone number.
- [phoneNumber](nstextcheckingresult/phonenumber.md): The phone number of a type checking result.

### Text Checking Results for Dates and Times

- [dateCheckingResultWithRange:date:](nstextcheckingresult/datecheckingresult%28range_date_%29.md): Creates and returns a text checking result with the specified date.
- [dateCheckingResultWithRange:date:timeZone:duration:](nstextcheckingresult/datecheckingresult%28range_date_timezone_duration_%29.md): Creates and returns a text checking result with the specified date, time zone, and duration.
- [date](nstextcheckingresult/date.md): The date component of a type checking result.
- [duration](nstextcheckingresult/duration.md): The duration component of a type checking result.
- [timeZone](nstextcheckingresult/timezone.md): The time zone component of a type checking result.

### Text Checking Results for Typography

- [dashCheckingResultWithRange:replacementString:](nstextcheckingresult/dashcheckingresult%28range_replacementstring_%29.md): Creates and returns a text checking result with the specified dash corrected replacement string.
- [quoteCheckingResultWithRange:replacementString:](nstextcheckingresult/quotecheckingresult%28range_replacementstring_%29.md): Creates and returns a text checking result with the specified quote-balanced replacement string.

### Text Checking Results for Spelling

- [spellCheckingResultWithRange:](nstextcheckingresult/spellcheckingresult%28range_%29.md): Creates and returns a text checking result with the range of a misspelled word.
- [correctionCheckingResultWithRange:replacementString:](nstextcheckingresult/correctioncheckingresult%28range_replacementstring_%29.md): Creates and returns a text checking result after detecting a possible correction.

### Text Checking Results for Orthography

- [orthographyCheckingResultWithRange:orthography:](nstextcheckingresult/orthographycheckingresult%28range_orthography_%29.md): Creates and returns a text checking result with the specified orthography.
- [orthography](nstextcheckingresult/orthography.md): The detected orthography of a type checking result.

### Text Checking Results for Grammar

- [grammarCheckingResultWithRange:details:](nstextcheckingresult/grammarcheckingresult%28range_details_%29.md): Creates and returns a text checking result with the specified array of grammatical errors.
- [grammarDetails](nstextcheckingresult/grammardetails.md): The details of a located grammatical type checking result.

### Adjusting the Ranges of a Text Checking Result

- [resultByAdjustingRangesWithOffset:](nstextcheckingresult/adjustingranges%28offset_%29.md): Returns a new text checking result after adjusting the ranges as specified by the offset.

### Constants

- [Keys for Transit Components](keys-for-transit-components.md): The following constants identify the possible keys returned in the components dictionary.
- [Keys for Address Components](keys-for-address-components.md): The following constants identify the possible keys returned in the [addressComponents](nstextcheckingresult/addresscomponents.md) dictionary.
- [NSTextCheckingType](nstextcheckingresult/checkingtype.md): These constants specify the type of checking the methods should do. They are returned by [resultType](nstextcheckingresult/resulttype.md).
- [NSTextCheckingTypes](nstextcheckingtypes.md): Defines the types of checking that are available. These values can be combined using the C-bitwise OR operator. The system supports its own internal types, and the user can extend those types by subclassing `NSTextCheckingResult` and adding their own custom types.
- [NSTextCheckingKey](nstextcheckingkey.md)
- [Anonymous](1476845-anonymous.md)

### Instance Properties

- [alternativeStrings](nstextcheckingresult/alternativestrings.md)

### Instance Methods

- [rangeWithName:](nstextcheckingresult/range%28withname_%29.md)

### Type Methods

- [correctionCheckingResultWithRange:replacementString:alternativeStrings:](nstextcheckingresult/correctioncheckingresult%28range_replacementstring_alternativestrings_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Pattern Matching

- [NSScanner](scanner.md): A string parser that scans for substrings or characters in a character set, and for numeric values from decimal, hexadecimal, and floating-point representations.
- [NSRegularExpression](nsregularexpression.md): An immutable representation of a compiled regular expression that you apply to Unicode strings.
- [NSDataDetector](nsdatadetector.md): A specialized regular expression object that matches natural language text for predefined data patterns.
- [NSNotFound](nsnotfound-4qp9h.md): A value indicating that a requested item couldn’t be found or doesn’t exist.
