> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/scanner/locale](https://developer.apple.com/documentation/foundation/scanner/locale)

# locale (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The locale to use when scanning.

## Declaration

```swift
var locale: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

A scanner’s locale affects the way it interprets numeric values from the string. In particular, a scanner uses the locale’s decimal separator to distinguish the integer and fractional parts of floating-point representations. A scanner with no locale set uses non-localized values. New scanners have no locale by default.

## See Also

### Configuring a Scanner

- [scanLocation](scanlocation.md): Deprecated. The character position at which the receiver will begin its next scanning operation.
- [caseSensitive](casesensitive.md): Flag that indicates whether the receiver distinguishes case in the characters it scans.
- [charactersToBeSkipped](characterstobeskipped.md): Character set containing the characters the scanner ignores when looking for a scannable element.

# locale (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The locale to use when scanning.

## Declaration

```objectivec
@property (retain, nullable) id locale;
```

<a id="Discussion"></a>

## Discussion

A scanner’s locale affects the way it interprets numeric values from the string. In particular, a scanner uses the locale’s decimal separator to distinguish the integer and fractional parts of floating-point representations. A scanner with no locale set uses non-localized values. New scanners have no locale by default.

## See Also

### Configuring a Scanner

- [scanLocation](scanlocation.md): Deprecated. The character position at which the receiver will begin its next scanning operation.
- [caseSensitive](casesensitive.md): Flag that indicates whether the receiver distinguishes case in the characters it scans.
- [charactersToBeSkipped](characterstobeskipped.md): Character set containing the characters the scanner ignores when looking for a scannable element.
