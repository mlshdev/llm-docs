> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemetadataitem/extraattributes](https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem/extraattributes)

# extraAttributes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A dictionary of additional attributes for a metadata item.

## Declaration

```swift
var extraAttributes: [AVMetadataExtraAttributeKey : Any]? { get set }
```

## See Also

### Accessing values

- [value](value.md): The value for the mutable metadata item.
- [dataType](datatype.md): The data type of the metadata item’s value.
- [stringValue](stringvalue.md): The value of the metadata item as a string.
- [numberValue](numbervalue.md): The value of the metadata item as a number.
- [dateValue](datevalue.md): The value of the metadata item as a date.
- [dataValue](datavalue.md): The value of the metadata item as a data value.

# extraAttributes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A dictionary of additional attributes for a metadata item.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSDictionary<NSString *,id> * extraAttributes;
```

## See Also

### Accessing values

- [value](value.md): The value for the mutable metadata item.
- [dataType](datatype.md): The data type of the metadata item’s value.
