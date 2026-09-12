> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledata/append(_:length:)](https://developer.apple.com/documentation/foundation/nsmutabledata/append(_:length:))

# append(\_:length:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Appends to the receiver a given number of bytes from a given buffer.

## Declaration

```swift
func append(_ bytes: UnsafeRawPointer, length: Int)
```

## Parameters

- `bytes`: A buffer containing data to append to the receiver’s content.
- `length`: The number of bytes from `bytes` to append.

<a id="Discussion"></a>

## Discussion

A sample using this method can be found in [Working With Mutable Binary Data](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/BinaryData/Tasks/WorkingMutableData.html#//apple_ref/doc/uid/20002150).

## See Also

### Adding Bytes

- [append(\_:)](append%28__%29.md): Appends the content of another data object to the receiver.
- [increaseLength(by:)](increaselength%28by_%29.md): Increases the length of the receiver by a given number of bytes.

# appendBytes:length: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Appends to the receiver a given number of bytes from a given buffer.

## Declaration

```objectivec
- (void) appendBytes:(const void *) bytes length:(NSUInteger) length;
```

## Parameters

- `bytes`: A buffer containing data to append to the receiver’s content.
- `length`: The number of bytes from `bytes` to append.

<a id="Discussion"></a>

## Discussion

A sample using this method can be found in [Working With Mutable Binary Data](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/BinaryData/Tasks/WorkingMutableData.html#//apple_ref/doc/uid/20002150).

## See Also

### Adding Bytes

- [appendData:](append%28__%29.md): Appends the content of another data object to the receiver.
- [increaseLengthBy:](increaselength%28by_%29.md): Increases the length of the receiver by a given number of bytes.
