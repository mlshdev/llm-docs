> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/datavalue](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/datavalue)

# dataValue

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The value of the metadata item as a data value.

## Declaration

```swift
static var dataValue: AVAsyncProperty<Root, Data?> { get }
```

## Mentioned In

- [Retrieving media metadata](../retrieving-media-metadata.md)

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

## See Also

### Loading values

- [dataType](../avmetadataitem/datatype.md): The data type of the metadata item’s value.
- [value](value.md): Conforms when `Root` inherits `AVMetadataItem`. The value of the metadata item.
- [stringValue](stringvalue.md): Conforms when `Root` inherits `AVMetadataItem`. The value of the metadata item as a string.
- [numberValue](numbervalue.md): Conforms when `Root` inherits `AVMetadataItem`. The value of the metadata item as a number.
- [dateValue](datevalue.md): Conforms when `Root` inherits `AVMetadataItem`. The value of the metadata item as a date.
- [extraAttributes](extraattributes.md): Conforms when `Root` inherits `AVMetadataItem`. A dictionary of additional attributes for the item.
