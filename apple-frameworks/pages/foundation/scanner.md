> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/scanner](https://developer.apple.com/documentation/foundation/scanner)

# Scanner (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string parser that scans for substrings or characters in a character set, and for numeric values from decimal, hexadecimal, and floating-point representations.

## Declaration

```swift
class Scanner
```

<a id="overview"></a>

## Overview

A [Scanner](scanner.md) object interprets and converts the characters of a [String](https://developer.apple.com/documentation/swift/string) into number and string values. You assign the scanner’s string when you create the scanner, and the scanner progresses through the characters of that string from beginning to end as you request items.

Because of the nature of class clusters, a scanner object isn’t an actual instance of the [Scanner](scanner.md) class, but is one of its private subclasses. Although a scanner object’s class is private, its interface is public, as declared by this abstract superclass, [Scanner](scanner.md). The objects you create using this class are referred to as scanner objects (and when no confusion will result, merely as scanners).

To set a [Scanner](scanner.md) object to ignore a set of characters as it scans the string, use the [charactersToBeSkipped](scanner/characterstobeskipped.md) property. Characters in the skip set are skipped over before the target is scanned. The default set of characters to skip is the whitespace and newline character set.

To retrieve the unscanned remainder of the string, use `scanner.string.substring(from: scanner.scanLocation)`.

## Topics

### Creating a Scanner

- [localizedScanner(with:)](scanner/localizedscanner%28with_%29.md): Returns an `NSScanner` object that scans a given string according to the user’s default locale.
- [init(string:)](scanner/init%28string_%29.md): Returns an `NSScanner` object initialized to scan a given string.

### Getting a Scanner’s String

- [string](scanner/string.md): The string the scanner will scan.

### Configuring a Scanner

- [scanLocation](scanner/scanlocation.md): Deprecated. The character position at which the receiver will begin its next scanning operation.
- [caseSensitive](scanner/casesensitive.md): Flag that indicates whether the receiver distinguishes case in the characters it scans.
- [charactersToBeSkipped](scanner/characterstobeskipped.md): Character set containing the characters the scanner ignores when looking for a scannable element.
- [locale](scanner/locale.md): The locale to use when scanning.

### Scanning Characters and Strings

- [scanCharacters(from:into:)](scanner/scancharacters%28from_into_%29.md): Deprecated. Scans the string as long as characters from a given character set are encountered, accumulating characters into a string that’s returned by reference.
- [scanUpToCharacters(from:into:)](scanner/scanuptocharacters%28from_into_%29.md): Deprecated. Scans the string until a character from a given character set is encountered, accumulating characters into a string that’s returned by reference.
- [scanString(\_:into:)](scanner/scanstring%28__into_%29.md): Deprecated. Scans a given string, returning an equivalent string object by reference if a match is found.
- [scanUpTo(\_:into:)](scanner/scanupto%28__into_%29.md): Deprecated. Scans the string until a given string is encountered, accumulating characters into a string that’s returned by reference.

### Scanning Numeric Values

- [scanDecimal(\_:)](scanner/scandecimal%28__%29.md): Deprecated. Scans for an `NSDecimal` value, returning a found value by reference.
- [scanDouble(\_:)](scanner/scandouble%28__%29.md): Deprecated. Scans for a double value, returning a found value by reference.
- [scanFloat(\_:)](scanner/scanfloat%28__%29.md): Deprecated. Scans for a float value, returning a found value by reference.
- [scanHexDouble(\_:)](scanner/scanhexdouble%28__%29.md): Scans for a double value from a hexadecimal representation, returning a found value by reference.
- [scanHexFloat(\_:)](scanner/scanhexfloat%28__%29.md): Scans for a double value from a hexadecimal representation, returning a found value by reference.
- [scanHexInt32(\_:)](scanner/scanhexint32%28__%29.md): Deprecated. Scans for an unsigned value from a hexadecimal representation, returning a found value by reference.
- [scanHexInt64(\_:)](scanner/scanhexint64%28__%29.md): Scans for a long long value from a hexadecimal representation, returning a found value by reference.
- [scanInt(\_:)](scanner/scanint%28__%29.md): Scans for an NSInteger value from a decimal representation, returning a found value by reference
- [scanInt32(\_:)](scanner/scanint32%28__%29.md): Deprecated. Scans for an int value from a decimal representation, returning a found value by reference.
- [scanInt64(\_:)](scanner/scanint64%28__%29.md): Scans for a long long value from a decimal representation, returning a found value by reference.
- [scanUnsignedLongLong(\_:)](scanner/scanunsignedlonglong%28__%29.md): Scans for an unsigned long long value from a decimal representation, returning a found value by reference.

### Monitoring Scanner Progress

- [isAtEnd](scanner/isatend.md): Flag that indicates whether the receiver has exhausted all significant characters.

### Instance Properties

- [currentIndex](scanner/currentindex.md)

### Instance Methods

- [scanCharacter()](scanner/scancharacter%28%29.md)
- [scanCharacters(from:)](scanner/scancharacters%28from_%29.md)
- [scanDecimal()](scanner/scandecimal%28%29.md)
- [scanDouble(representation:)](scanner/scandouble%28representation_%29.md)
- [scanFloat(representation:)](scanner/scanfloat%28representation_%29.md)
- [scanInt(representation:)](scanner/scanint%28representation_%29.md)
- [scanInt32(representation:)](scanner/scanint32%28representation_%29.md)
- [scanInt64(representation:)](scanner/scanint64%28representation_%29.md)
- [scanString(\_:)](scanner/scanstring%28__%29.md)
- [scanUInt64(representation:)](scanner/scanuint64%28representation_%29.md)
- [scanUpToCharacters(from:)](scanner/scanuptocharacters%28from_%29.md)
- [scanUpToString(\_:)](scanner/scanuptostring%28__%29.md)

### Enumerations

- [Scanner.NumberRepresentation](scanner/numberrepresentation.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Pattern Matching

- [NSRegularExpression](nsregularexpression.md): An immutable representation of a compiled regular expression that you apply to Unicode strings.
- [NSDataDetector](nsdatadetector.md): A specialized regular expression object that matches natural language text for predefined data patterns.
- [NSTextCheckingResult](nstextcheckingresult.md): An occurrence of textual content found during the analysis of a block of text, such as when matching a regular expression.
- [NSNotFound](nsnotfound-4qp9h.md): A value indicating that a requested item couldn’t be found or doesn’t exist.

# NSScanner (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string parser that scans for substrings or characters in a character set, and for numeric values from decimal, hexadecimal, and floating-point representations.

## Declaration

```objectivec
@interface NSScanner : NSObject
```

<a id="overview"></a>

## Overview

A [NSScanner](scanner.md) object interprets and converts the characters of a [String](https://developer.apple.com/documentation/swift/string) into number and string values. You assign the scanner’s string when you create the scanner, and the scanner progresses through the characters of that string from beginning to end as you request items.

Because of the nature of class clusters, a scanner object isn’t an actual instance of the [NSScanner](scanner.md) class, but is one of its private subclasses. Although a scanner object’s class is private, its interface is public, as declared by this abstract superclass, [NSScanner](scanner.md). The objects you create using this class are referred to as scanner objects (and when no confusion will result, merely as scanners).

To set a [NSScanner](scanner.md) object to ignore a set of characters as it scans the string, use the [charactersToBeSkipped](scanner/characterstobeskipped.md) property. Characters in the skip set are skipped over before the target is scanned. The default set of characters to skip is the whitespace and newline character set.

To retrieve the unscanned remainder of the string, use `scanner.string.substring(from: scanner.scanLocation)`.

## Topics

### Creating a Scanner

- [scannerWithString:](nsscanner/scannerwithstring_.md): Returns an `NSScanner` object that scans a given string.
- [localizedScannerWithString:](scanner/localizedscanner%28with_%29.md): Returns an `NSScanner` object that scans a given string according to the user’s default locale.
- [initWithString:](scanner/init%28string_%29.md): Returns an `NSScanner` object initialized to scan a given string.

### Getting a Scanner’s String

- [string](scanner/string.md): The string the scanner will scan.

### Configuring a Scanner

- [scanLocation](scanner/scanlocation.md): Deprecated. The character position at which the receiver will begin its next scanning operation.
- [caseSensitive](scanner/casesensitive.md): Flag that indicates whether the receiver distinguishes case in the characters it scans.
- [charactersToBeSkipped](scanner/characterstobeskipped.md): Character set containing the characters the scanner ignores when looking for a scannable element.
- [locale](scanner/locale.md): The locale to use when scanning.

### Scanning Characters and Strings

- [scanCharactersFromSet:intoString:](scanner/scancharacters%28from_into_%29.md): Deprecated. Scans the string as long as characters from a given character set are encountered, accumulating characters into a string that’s returned by reference.
- [scanUpToCharactersFromSet:intoString:](scanner/scanuptocharacters%28from_into_%29.md): Deprecated. Scans the string until a character from a given character set is encountered, accumulating characters into a string that’s returned by reference.
- [scanString:intoString:](scanner/scanstring%28__into_%29.md): Deprecated. Scans a given string, returning an equivalent string object by reference if a match is found.
- [scanUpToString:intoString:](scanner/scanupto%28__into_%29.md): Deprecated. Scans the string until a given string is encountered, accumulating characters into a string that’s returned by reference.

### Scanning Numeric Values

- [scanDecimal:](scanner/scandecimal%28__%29.md): Deprecated. Scans for an `NSDecimal` value, returning a found value by reference.
- [scanDouble:](scanner/scandouble%28__%29.md): Deprecated. Scans for a double value, returning a found value by reference.
- [scanFloat:](scanner/scanfloat%28__%29.md): Deprecated. Scans for a float value, returning a found value by reference.
- [scanHexDouble:](scanner/scanhexdouble%28__%29.md): Scans for a double value from a hexadecimal representation, returning a found value by reference.
- [scanHexFloat:](scanner/scanhexfloat%28__%29.md): Scans for a double value from a hexadecimal representation, returning a found value by reference.
- [scanHexInt:](scanner/scanhexint32%28__%29.md): Deprecated. Scans for an unsigned value from a hexadecimal representation, returning a found value by reference.
- [scanHexLongLong:](scanner/scanhexint64%28__%29.md): Scans for a long long value from a hexadecimal representation, returning a found value by reference.
- [scanInteger:](scanner/scanint%28__%29.md): Scans for an NSInteger value from a decimal representation, returning a found value by reference
- [scanInt:](scanner/scanint32%28__%29.md): Deprecated. Scans for an int value from a decimal representation, returning a found value by reference.
- [scanLongLong:](scanner/scanint64%28__%29.md): Scans for a long long value from a decimal representation, returning a found value by reference.
- [scanUnsignedLongLong:](scanner/scanunsignedlonglong%28__%29.md): Scans for an unsigned long long value from a decimal representation, returning a found value by reference.

### Monitoring Scanner Progress

- [atEnd](scanner/isatend.md): Flag that indicates whether the receiver has exhausted all significant characters.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)

## See Also

### Pattern Matching

- [NSRegularExpression](nsregularexpression.md): An immutable representation of a compiled regular expression that you apply to Unicode strings.
- [NSDataDetector](nsdatadetector.md): A specialized regular expression object that matches natural language text for predefined data patterns.
- [NSTextCheckingResult](nstextcheckingresult.md): An occurrence of textual content found during the analysis of a block of text, such as when matching a regular expression.
- [NSNotFound](nsnotfound-4qp9h.md): A value indicating that a requested item couldn’t be found or doesn’t exist.
