> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledata/replacebytes(in:withbytes:length:)](https://developer.apple.com/documentation/foundation/nsmutabledata/replacebytes(in:withbytes:length:))

# replaceBytes(in:withBytes:length:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces with a given set of bytes a given range within the contents of the receiver.

## Declaration

```swift
func replaceBytes(in range: NSRange, withBytes replacementBytes: UnsafeRawPointer?, length replacementLength: Int)
```

## Parameters

- `range`: The range within the receiver’s contents to replace with `bytes`. The range must not exceed the bounds of the receiver.
- `replacementBytes`: The data to insert into the receiver’s contents.
- `replacementLength`: The number of bytes to take from `replacementBytes`.

<a id="Discussion"></a>

## Discussion

If the length of `range` is not equal to `replacementLength`, the receiver is resized to accommodate the new bytes. Any bytes past `range` in the receiver are shifted to accommodate the new bytes. You can therefore pass `NULL` for `replacementBytes` and `0` for `replacementLength` to delete bytes in the receiver in the range `range`. You can also replace a range (which might be zero-length) with more bytes than the length of the range, which has the effect of insertion (or “replace some and insert more”).

## See Also

### Modifying Bytes

- [replaceBytes(in:withBytes:)](replacebytes%28in_withbytes_%29.md): Replaces with a given set of bytes a given range within the contents of the receiver.
- [resetBytes(in:)](resetbytes%28in_%29.md): Replaces with zeroes the contents of the receiver in a given range.
- [setData(\_:)](setdata%28__%29.md): Replaces the entire contents of the receiver with the contents of another data object.

# replaceBytesInRange:withBytes:length: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces with a given set of bytes a given range within the contents of the receiver.

## Declaration

```objectivec
- (void) replaceBytesInRange:(NSRange) range withBytes:(const void *) replacementBytes length:(NSUInteger) replacementLength;
```

## Parameters

- `range`: The range within the receiver’s contents to replace with `bytes`. The range must not exceed the bounds of the receiver.
- `replacementBytes`: The data to insert into the receiver’s contents.
- `replacementLength`: The number of bytes to take from `replacementBytes`.

<a id="Discussion"></a>

## Discussion

If the length of `range` is not equal to `replacementLength`, the receiver is resized to accommodate the new bytes. Any bytes past `range` in the receiver are shifted to accommodate the new bytes. You can therefore pass `NULL` for `replacementBytes` and `0` for `replacementLength` to delete bytes in the receiver in the range `range`. You can also replace a range (which might be zero-length) with more bytes than the length of the range, which has the effect of insertion (or “replace some and insert more”).

## See Also

### Modifying Bytes

- [replaceBytesInRange:withBytes:](replacebytes%28in_withbytes_%29.md): Replaces with a given set of bytes a given range within the contents of the receiver.
- [resetBytesInRange:](resetbytes%28in_%29.md): Replaces with zeroes the contents of the receiver in a given range.
- [setData:](setdata%28__%29.md): Replaces the entire contents of the receiver with the contents of another data object.
