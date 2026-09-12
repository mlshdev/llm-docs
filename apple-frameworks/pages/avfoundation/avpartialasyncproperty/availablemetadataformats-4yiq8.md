> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/availablemetadataformats-4yiq8](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/availablemetadataformats-4yiq8)

# availableMetadataFormats

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The formats of metadata that an asset contains.

## Declaration

```swift
static var availableMetadataFormats: AVAsyncProperty<Root, [AVMetadataFormat]> { get }
```

## Mentioned In

- [Retrieving media metadata](../retrieving-media-metadata.md)

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

## See Also

### Loading metadata

- [metadata](metadata-16qej.md): Conforms when `Root` inherits `AVAsset`. The metadata items that an asset contains for all metadata identifiers.
- [commonMetadata](commonmetadata-3j3n4.md): Conforms when `Root` inherits `AVAsset`. The metadata items that an asset contains for common metadata identifiers.
- [loadMetadata(for:completionHandler:)](../avasset/loadmetadata%28for_completionhandler_%29.md): Loads an array of metadata items that the asset contains for the specified format.
- [creationDate](creationdate.md): Conforms when `Root` inherits `AVAsset`. A metadata item that indicates the creation date of an asset.
- [lyrics](lyrics.md): Conforms when `Root` inherits `AVAsset`. The lyrics of the asset in a language suitable for the current locale.
