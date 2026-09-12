> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledata/replacebytes(in:withbytes:)](https://developer.apple.com/documentation/foundation/nsmutabledata/replacebytes(in:withbytes:))

# replaceBytes(in:withBytes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces with a given set of bytes a given range within the contents of the receiver.

## Declaration

```swift
func replaceBytes(in range: NSRange, withBytes bytes: UnsafeRawPointer)
```

## Parameters

- `range`: The range within the receiver’s contents to replace with `bytes`. The range must not exceed the bounds of the receiver.
- `bytes`: The data to insert into the receiver’s contents.

<a id="Discussion"></a>

## Discussion

If the location of `range` isn’t within the receiver’s range of bytes, an `NSRangeException` is raised. The receiver is resized to accommodate the new bytes, if necessary.

A sample using this method is given in [Working With Mutable Binary Data](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/BinaryData/Tasks/WorkingMutableData.html#//apple_ref/doc/uid/20002150).

## See Also

### Modifying Bytes

- [replaceBytes(in:withBytes:length:)](replacebytes%28in_withbytes_length_%29.md): Replaces with a given set of bytes a given range within the contents of the receiver.
- [resetBytes(in:)](resetbytes%28in_%29.md): Replaces with zeroes the contents of the receiver in a given range.
- [setData(\_:)](setdata%28__%29.md): Replaces the entire contents of the receiver with the contents of another data object.

# replaceBytesInRange:withBytes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces with a given set of bytes a given range within the contents of the receiver.

## Declaration

```objectivec
- (void) replaceBytesInRange:(NSRange) range withBytes:(const void *) bytes;
```

## Parameters

- `range`: The range within the receiver’s contents to replace with `bytes`. The range must not exceed the bounds of the receiver.
- `bytes`: The data to insert into the receiver’s contents.

<a id="Discussion"></a>

## Discussion

If the location of `range` isn’t within the receiver’s range of bytes, an `NSRangeException` is raised. The receiver is resized to accommodate the new bytes, if necessary.

A sample using this method is given in [Working With Mutable Binary Data](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/BinaryData/Tasks/WorkingMutableData.html#//apple_ref/doc/uid/20002150).

## See Also

### Modifying Bytes

- [replaceBytesInRange:withBytes:length:](replacebytes%28in_withbytes_length_%29.md): Replaces with a given set of bytes a given range within the contents of the receiver.
- [resetBytesInRange:](resetbytes%28in_%29.md): Replaces with zeroes the contents of the receiver in a given range.
- [setData:](setdata%28__%29.md): Replaces the entire contents of the receiver with the contents of another data object.
