> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitem/datatype](https://developer.apple.com/documentation/avfoundation/avmetadataitem/datatype)

# dataType (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The data type of the metadata item’s value.

## Declaration

```swift
var dataType: String? { get }
```

## See Also

### Loading values

- [value](../avpartialasyncproperty/value.md): Conforms when `Root` inherits `AVMetadataItem`. The value of the metadata item.
- [stringValue](../avpartialasyncproperty/stringvalue.md): Conforms when `Root` inherits `AVMetadataItem`. The value of the metadata item as a string.
- [numberValue](../avpartialasyncproperty/numbervalue.md): Conforms when `Root` inherits `AVMetadataItem`. The value of the metadata item as a number.
- [dateValue](../avpartialasyncproperty/datevalue.md): Conforms when `Root` inherits `AVMetadataItem`. The value of the metadata item as a date.
- [dataValue](../avpartialasyncproperty/datavalue.md): Conforms when `Root` inherits `AVMetadataItem`. The value of the metadata item as a data value.
- [extraAttributes](../avpartialasyncproperty/extraattributes.md): Conforms when `Root` inherits `AVMetadataItem`. A dictionary of additional attributes for the item.

# dataType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The data type of the metadata item’s value.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * dataType;
```
