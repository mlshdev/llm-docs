> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/description](https://developer.apple.com/documentation/foundation/nsdata/description)

# description (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string that contains a hexadecimal representation of the data object’s contents in a property list format.

## Declaration

```swift
var description: String { get }
```

## See Also

### Related Documentation

- [getBytes(\_:)](getbytes%28__%29.md): Deprecated. Copies a data object’s contents into a given buffer.
- [bytes](bytes.md): A pointer to the data object’s contents.
- [getBytes(\_:range:)](getbytes%28__range_%29.md): Copies a range of bytes from the data object into a given buffer.
- [getBytes(\_:length:)](getbytes%28__length_%29.md): Copies a number of bytes from the start of the data object into a given buffer.

# description (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string that contains a hexadecimal representation of the data object’s contents in a property list format.

## Declaration

```objectivec
@property (copy, readonly) NSString * description;
```

## See Also

### Related Documentation

- [getBytes:](getbytes%28__%29.md): Deprecated. Copies a data object’s contents into a given buffer.
- [bytes](bytes.md): A pointer to the data object’s contents.
- [getBytes:range:](getbytes%28__range_%29.md): Copies a range of bytes from the data object into a given buffer.
- [getBytes:length:](getbytes%28__length_%29.md): Copies a number of bytes from the start of the data object into a given buffer.
