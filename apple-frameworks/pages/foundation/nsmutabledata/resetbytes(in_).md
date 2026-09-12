> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledata/resetbytes(in:)](https://developer.apple.com/documentation/foundation/nsmutabledata/resetbytes(in:))

# resetBytes(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces with zeroes the contents of the receiver in a given range.

## Declaration

```swift
func resetBytes(in range: NSRange)
```

## Parameters

- `range`: The range within the contents of the receiver to be replaced by zeros. The range must not exceed the bounds of the receiver.

<a id="Discussion"></a>

## Discussion

If the location of `range` isn’t within the receiver’s range of bytes, an `NSRangeException` is raised. The receiver is resized to accommodate the new bytes, if necessary.

## See Also

### Modifying Bytes

- [replaceBytes(in:withBytes:)](replacebytes%28in_withbytes_%29.md): Replaces with a given set of bytes a given range within the contents of the receiver.
- [replaceBytes(in:withBytes:length:)](replacebytes%28in_withbytes_length_%29.md): Replaces with a given set of bytes a given range within the contents of the receiver.
- [setData(\_:)](setdata%28__%29.md): Replaces the entire contents of the receiver with the contents of another data object.

# resetBytesInRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces with zeroes the contents of the receiver in a given range.

## Declaration

```objectivec
- (void) resetBytesInRange:(NSRange) range;
```

## Parameters

- `range`: The range within the contents of the receiver to be replaced by zeros. The range must not exceed the bounds of the receiver.

<a id="Discussion"></a>

## Discussion

If the location of `range` isn’t within the receiver’s range of bytes, an `NSRangeException` is raised. The receiver is resized to accommodate the new bytes, if necessary.

## See Also

### Modifying Bytes

- [replaceBytesInRange:withBytes:](replacebytes%28in_withbytes_%29.md): Replaces with a given set of bytes a given range within the contents of the receiver.
- [replaceBytesInRange:withBytes:length:](replacebytes%28in_withbytes_length_%29.md): Replaces with a given set of bytes a given range within the contents of the receiver.
- [setData:](setdata%28__%29.md): Replaces the entire contents of the receiver with the contents of another data object.
