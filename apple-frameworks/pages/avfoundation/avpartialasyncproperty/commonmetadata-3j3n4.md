> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/commonmetadata-3j3n4](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/commonmetadata-3j3n4)

# commonMetadata

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The metadata items that an asset contains for common metadata identifiers.

## Declaration

```swift
static var commonMetadata: AVAsyncProperty<Root, [AVMetadataItem]> { get }
```

## Mentioned In

- [Retrieving media metadata](../retrieving-media-metadata.md)

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

The value contains an array of metadata items that contain an [identifier](../avmetadataitem/identifier.md) value from the set of Common Metadata Identifiers.

You can filter items in this array according to language by calling [metadataItems(from:filteredAndSortedAccordingToPreferredLanguages:)](../avmetadataitem/metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md), or by identifier by calling [metadataItems(from:filteredByIdentifier:)](../avmetadataitem/metadataitems%28from_filteredbyidentifier_%29.md).

## See Also

### Loading metadata

- [metadata](metadata-16qej.md): Conforms when `Root` inherits `AVAsset`. The metadata items that an asset contains for all metadata identifiers.
- [availableMetadataFormats](availablemetadataformats-4yiq8.md): Conforms when `Root` inherits `AVAsset`. The formats of metadata that an asset contains.
- [loadMetadata(for:completionHandler:)](../avasset/loadmetadata%28for_completionhandler_%29.md): Loads an array of metadata items that the asset contains for the specified format.
- [creationDate](creationdate.md): Conforms when `Root` inherits `AVAsset`. A metadata item that indicates the creation date of an asset.
- [lyrics](lyrics.md): Conforms when `Root` inherits `AVAsset`. The lyrics of the asset in a language suitable for the current locale.
