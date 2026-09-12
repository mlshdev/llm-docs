> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/scanner/casesensitive](https://developer.apple.com/documentation/foundation/scanner/casesensitive)

# caseSensitive (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Flag that indicates whether the receiver distinguishes case in the characters it scans.

## Declaration

```swift
var caseSensitive: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver distinguishes case in the characters it scans, otherwise [false](https://developer.apple.com/documentation/swift/false). The default value is [false](https://developer.apple.com/documentation/swift/false). Note that case sensitivity doesn’t apply to the characters to be skipped.

## See Also

### Configuring a Scanner

- [scanLocation](scanlocation.md): Deprecated. The character position at which the receiver will begin its next scanning operation.
- [charactersToBeSkipped](characterstobeskipped.md): Character set containing the characters the scanner ignores when looking for a scannable element.
- [locale](locale.md): The locale to use when scanning.

# caseSensitive (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Flag that indicates whether the receiver distinguishes case in the characters it scans.

## Declaration

```objectivec
@property BOOL caseSensitive;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver distinguishes case in the characters it scans, otherwise [false](https://developer.apple.com/documentation/swift/false). The default value is [false](https://developer.apple.com/documentation/swift/false). Note that case sensitivity doesn’t apply to the characters to be skipped.

## See Also

### Configuring a Scanner

- [scanLocation](scanlocation.md): Deprecated. The character position at which the receiver will begin its next scanning operation.
- [charactersToBeSkipped](characterstobeskipped.md): Character set containing the characters the scanner ignores when looking for a scannable element.
- [locale](locale.md): The locale to use when scanning.
