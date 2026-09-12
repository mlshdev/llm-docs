> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/outputstream/hasspaceavailable](https://developer.apple.com/documentation/foundation/outputstream/hasspaceavailable)

# hasSpaceAvailable (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A boolean value that indicates whether the receiver can be written to.

## Declaration

```swift
var hasSpaceAvailable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver can be written to or if a write must be attempted in order to determine if space is available, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Using Streams

- [write(\_:maxLength:)](write%28__maxlength_%29.md): Writes the contents of a provided data buffer to the receiver.

# hasSpaceAvailable (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A boolean value that indicates whether the receiver can be written to.

## Declaration

```objectivec
@property (readonly) BOOL hasSpaceAvailable;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver can be written to or if a write must be attempted in order to determine if space is available, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Using Streams

- [write:maxLength:](write%28__maxlength_%29.md): Writes the contents of a provided data buffer to the receiver.
