> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/inputstream/getbuffer(_:length:)](https://developer.apple.com/documentation/foundation/inputstream/getbuffer(_:length:))

# getBuffer(\_:length:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns by reference a pointer to a read buffer and, by reference, the number of bytes available, and returns a Boolean value that indicates whether the buffer is available.

## Declaration

```swift
func getBuffer(_ buffer: UnsafeMutablePointer<UnsafeMutablePointer<UInt8>?>, length len: UnsafeMutablePointer<Int>) -> Bool
```

## Parameters

- `buffer`: Upon return, contains a pointer to a read buffer. The buffer is only valid until the next stream operation is performed.
- `len`: Upon return, contains the number of bytes available.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the buffer is available, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="discussion"></a>

## Discussion

Subclasses of `NSInputStream` may return [false](https://developer.apple.com/documentation/swift/false) if this operation is not appropriate for the stream type.

## See Also

### Using Streams

- [read(\_:maxLength:)](read%28__maxlength_%29.md): Reads up to a given number of bytes into a given buffer.
- [hasBytesAvailable](hasbytesavailable.md): A Boolean value that indicates whether the receiver has bytes available to read.

# getBuffer:length: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns by reference a pointer to a read buffer and, by reference, the number of bytes available, and returns a Boolean value that indicates whether the buffer is available.

## Declaration

```objectivec
- (BOOL) getBuffer:(uint8_t **) buffer length:(NSUInteger *) len;
```

## Parameters

- `buffer`: Upon return, contains a pointer to a read buffer. The buffer is only valid until the next stream operation is performed.
- `len`: Upon return, contains the number of bytes available.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the buffer is available, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="discussion"></a>

## Discussion

Subclasses of `NSInputStream` may return [false](https://developer.apple.com/documentation/swift/false) if this operation is not appropriate for the stream type.

## See Also

### Using Streams

- [read:maxLength:](read%28__maxlength_%29.md): Reads up to a given number of bytes into a given buffer.
- [hasBytesAvailable](hasbytesavailable.md): A Boolean value that indicates whether the receiver has bytes available to read.
