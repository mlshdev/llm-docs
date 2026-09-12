> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatter/string(frombytecount:countstyle:)](https://developer.apple.com/documentation/foundation/bytecountformatter/string(frombytecount:countstyle:))

# string(fromByteCount:countStyle:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts a byte count into the specified string format without creating an `NSNumber` object.

## Declaration

```swift
class func string(fromByteCount byteCount: Int64, countStyle: ByteCountFormatter.CountStyle) -> String
```

## Parameters

- `byteCount`: The byte count.
- `countStyle`: The formatter style. See [ByteCountFormatter.CountStyle](countstyle-swift.enum.md) for possible values.

<a id="return-value"></a>

## Return Value

A string containing the formatted `byteCount` value.

## See Also

### Related Documentation

- [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i)

### Creating Strings from Byte Count

- [string(fromByteCount:)](string%28frombytecount_%29.md): Converts a byte count into a string without creating an `NSNumber` object.

# stringFromByteCount:countStyle: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts a byte count into the specified string format without creating an `NSNumber` object.

## Declaration

```objectivec
+ (NSString *) stringFromByteCount:(long long) byteCount countStyle:(NSByteCountFormatterCountStyle) countStyle;
```

## Parameters

- `byteCount`: The byte count.
- `countStyle`: The formatter style. See [NSByteCountFormatterCountStyle](countstyle-swift.enum.md) for possible values.

<a id="return-value"></a>

## Return Value

A string containing the formatted `byteCount` value.

## See Also

### Related Documentation

- [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i)

### Creating Strings from Byte Count

- [stringFromByteCount:](string%28frombytecount_%29.md): Converts a byte count into a string without creating an `NSNumber` object.
