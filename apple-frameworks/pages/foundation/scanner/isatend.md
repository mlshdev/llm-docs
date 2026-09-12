> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/scanner/isatend](https://developer.apple.com/documentation/foundation/scanner/isatend)

# isAtEnd (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Flag that indicates whether the receiver has exhausted all significant characters.

## Declaration

```swift
var isAtEnd: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver has exhausted all significant characters in its string, otherwise [false](https://developer.apple.com/documentation/swift/false).

If only characters from the set to be skipped remain, returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [charactersToBeSkipped](characterstobeskipped.md): Character set containing the characters the scanner ignores when looking for a scannable element.

# atEnd (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Flag that indicates whether the receiver has exhausted all significant characters.

## Declaration

```objectivec
@property (readonly, getter=isAtEnd) BOOL atEnd;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver has exhausted all significant characters in its string, otherwise [false](https://developer.apple.com/documentation/swift/false).

If only characters from the set to be skipped remain, returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [charactersToBeSkipped](characterstobeskipped.md): Character set containing the characters the scanner ignores when looking for a scannable element.
