> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/creationdate](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/creationdate)

# creationDate

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A metadata item that indicates the creation date of an asset.

## Declaration

```swift
static var creationDate: AVAsyncProperty<Root, AVMetadataItem?> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

If the asset stores a creation date in a form the system can convert to an [NSDate](../../foundation/nsdate.md), the metadata item’s [dateValue](../avmetadataitem/datevalue.md) property contains a valid date. Otherwise, the creation date is available only as a string that you retrieve by calling the metadata item’s [stringValue](../avmetadataitem/stringvalue.md) property.

This property may be `nil`.

## See Also

### Loading metadata

- [metadata](metadata-16qej.md): Conforms when `Root` inherits `AVAsset`. The metadata items that an asset contains for all metadata identifiers.
- [commonMetadata](commonmetadata-3j3n4.md): Conforms when `Root` inherits `AVAsset`. The metadata items that an asset contains for common metadata identifiers.
- [availableMetadataFormats](availablemetadataformats-4yiq8.md): Conforms when `Root` inherits `AVAsset`. The formats of metadata that an asset contains.
- [loadMetadata(for:completionHandler:)](../avasset/loadmetadata%28for_completionhandler_%29.md): Loads an array of metadata items that the asset contains for the specified format.
- [lyrics](lyrics.md): Conforms when `Root` inherits `AVAsset`. The lyrics of the asset in a language suitable for the current locale.
