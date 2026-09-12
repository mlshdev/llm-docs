> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/scanner/scanlocation](https://developer.apple.com/documentation/foundation/scanner/scanlocation)

# scanLocation (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

The character position at which the receiver will begin its next scanning operation.

## Declaration

```swift
var scanLocation: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Raises an `NSRangeException` if `index` is beyond the end of the string being scanned.

This property is useful for backing up to rescan after an error.

Rather than setting the scan location directly to skip known sequences of characters, use [scanString(\_:into:)](scanstring%28__into_%29.md) or [scanCharacters(from:into:)](scancharacters%28from_into_%29.md), which allow you to verify that the expected substring (or set of characters) is in fact present.

## See Also

### Configuring a Scanner

- [caseSensitive](casesensitive.md): Flag that indicates whether the receiver distinguishes case in the characters it scans.
- [charactersToBeSkipped](characterstobeskipped.md): Character set containing the characters the scanner ignores when looking for a scannable element.
- [locale](locale.md): The locale to use when scanning.

# scanLocation (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The character position at which the receiver will begin its next scanning operation.

## Declaration

```objectivec
@property NSUInteger scanLocation;
```

<a id="Discussion"></a>

## Discussion

Raises an `NSRangeException` if `index` is beyond the end of the string being scanned.

This property is useful for backing up to rescan after an error.

Rather than setting the scan location directly to skip known sequences of characters, use [scanString:intoString:](scanstring%28__into_%29.md) or [scanCharactersFromSet:intoString:](scancharacters%28from_into_%29.md), which allow you to verify that the expected substring (or set of characters) is in fact present.

## See Also

### Configuring a Scanner

- [caseSensitive](casesensitive.md): Flag that indicates whether the receiver distinguishes case in the characters it scans.
- [charactersToBeSkipped](characterstobeskipped.md): Character set containing the characters the scanner ignores when looking for a scannable element.
- [locale](locale.md): The locale to use when scanning.
