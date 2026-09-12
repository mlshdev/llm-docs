> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatter/string(frombytecount:)](https://developer.apple.com/documentation/foundation/bytecountformatter/string(frombytecount:))

# string(fromByteCount:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts a byte count into a string without creating an `NSNumber` object.

## Declaration

```swift
func string(fromByteCount byteCount: Int64) -> String
```

## Parameters

- `byteCount`: The byte count.

<a id="return-value"></a>

## Return Value

A string containing the formatted `byteCount` value.

## See Also

### Creating Strings from Byte Count

- [string(fromByteCount:countStyle:)](string%28frombytecount_countstyle_%29.md): Converts a byte count into the specified string format without creating an `NSNumber` object.

# stringFromByteCount: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts a byte count into a string without creating an `NSNumber` object.

## Declaration

```objectivec
- (NSString *) stringFromByteCount:(long long) byteCount;
```

## Parameters

- `byteCount`: The byte count.

<a id="return-value"></a>

## Return Value

A string containing the formatted `byteCount` value.

## See Also

### Creating Strings from Byte Count

- [stringFromByteCount:countStyle:](string%28frombytecount_countstyle_%29.md): Converts a byte count into the specified string format without creating an `NSNumber` object.
