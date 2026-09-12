> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/outputstream/write(_:maxlength:)](https://developer.apple.com/documentation/foundation/outputstream/write(_:maxlength:))

# write(\_:maxLength:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes the contents of a provided data buffer to the receiver.

## Declaration

```swift
func write(_ buffer: UnsafePointer<UInt8>, maxLength len: Int) -> Int
```

## Parameters

- `buffer`: The data to write.
- `len`: The length of the data buffer, in bytes.

  > **Important**

  >  The behavior of this method is undefined if you pass a negative or zero number.

<a id="return-value"></a>

## Return Value

A number indicating the outcome of the operation:

- A positive number indicates the number of bytes written.
- `0` indicates that a fixed-length stream and has reached its capacity.
- `-1` means that the operation failed; more information about the error can be obtained with [streamError](../stream/streamerror.md).

## Mentioned In

- [Uploading streams of data](../uploading-streams-of-data.md)

## See Also

### Using Streams

- [hasSpaceAvailable](hasspaceavailable.md): A boolean value that indicates whether the receiver can be written to.

# write:maxLength: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes the contents of a provided data buffer to the receiver.

## Declaration

```objectivec
- (NSInteger) write:(const uint8_t *) buffer maxLength:(NSUInteger) len;
```

## Parameters

- `buffer`: The data to write.
- `len`: The length of the data buffer, in bytes.

  > **Important**

  >  The behavior of this method is undefined if you pass a negative or zero number.

<a id="return-value"></a>

## Return Value

A number indicating the outcome of the operation:

- A positive number indicates the number of bytes written.
- `0` indicates that a fixed-length stream and has reached its capacity.
- `-1` means that the operation failed; more information about the error can be obtained with [streamError](../stream/streamerror.md).

## Mentioned In

- [Uploading streams of data](../uploading-streams-of-data.md)

## See Also

### Using Streams

- [hasSpaceAvailable](hasspaceavailable.md): A boolean value that indicates whether the receiver can be written to.
