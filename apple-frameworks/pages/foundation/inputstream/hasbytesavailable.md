> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/inputstream/hasbytesavailable](https://developer.apple.com/documentation/foundation/inputstream/hasbytesavailable)

# hasBytesAvailable (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver has bytes available to read.

## Declaration

```swift
var hasBytesAvailable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver has bytes available to read, otherwise [false](https://developer.apple.com/documentation/swift/false). May also return [true](https://developer.apple.com/documentation/swift/true) if a read must be attempted in order to determine the availability of bytes.

## See Also

### Using Streams

- [read(\_:maxLength:)](read%28__maxlength_%29.md): Reads up to a given number of bytes into a given buffer.
- [getBuffer(\_:length:)](getbuffer%28__length_%29.md): Returns by reference a pointer to a read buffer and, by reference, the number of bytes available, and returns a Boolean value that indicates whether the buffer is available.

# hasBytesAvailable (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver has bytes available to read.

## Declaration

```objectivec
@property (readonly) BOOL hasBytesAvailable;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver has bytes available to read, otherwise [false](https://developer.apple.com/documentation/swift/false). May also return [true](https://developer.apple.com/documentation/swift/true) if a read must be attempted in order to determine the availability of bytes.

## See Also

### Using Streams

- [read:maxLength:](read%28__maxlength_%29.md): Reads up to a given number of bytes into a given buffer.
- [getBuffer:length:](getbuffer%28__length_%29.md): Returns by reference a pointer to a read buffer and, by reference, the number of bytes available, and returns a Boolean value that indicates whether the buffer is available.
