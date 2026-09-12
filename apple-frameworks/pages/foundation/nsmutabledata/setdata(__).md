> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledata/setdata(_:)](https://developer.apple.com/documentation/foundation/nsmutabledata/setdata(_:))

# setData(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the entire contents of the receiver with the contents of another data object.

## Declaration

```swift
func setData(_ data: Data)
```

## Parameters

- `data`: The data object whose content replaces that of the receiver.

<a id="Discussion"></a>

## Discussion

As part of its implementation, this method calls [replaceBytes(in:withBytes:)](replacebytes%28in_withbytes_%29.md).

## See Also

### Modifying Bytes

- [replaceBytes(in:withBytes:)](replacebytes%28in_withbytes_%29.md): Replaces with a given set of bytes a given range within the contents of the receiver.
- [replaceBytes(in:withBytes:length:)](replacebytes%28in_withbytes_length_%29.md): Replaces with a given set of bytes a given range within the contents of the receiver.
- [resetBytes(in:)](resetbytes%28in_%29.md): Replaces with zeroes the contents of the receiver in a given range.

# setData: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the entire contents of the receiver with the contents of another data object.

## Declaration

```objectivec
- (void) setData:(NSData *) data;
```

## Parameters

- `data`: The data object whose content replaces that of the receiver.

<a id="Discussion"></a>

## Discussion

As part of its implementation, this method calls [replaceBytesInRange:withBytes:](replacebytes%28in_withbytes_%29.md).

## See Also

### Modifying Bytes

- [replaceBytesInRange:withBytes:](replacebytes%28in_withbytes_%29.md): Replaces with a given set of bytes a given range within the contents of the receiver.
- [replaceBytesInRange:withBytes:length:](replacebytes%28in_withbytes_length_%29.md): Replaces with a given set of bytes a given range within the contents of the receiver.
- [resetBytesInRange:](resetbytes%28in_%29.md): Replaces with zeroes the contents of the receiver in a given range.
