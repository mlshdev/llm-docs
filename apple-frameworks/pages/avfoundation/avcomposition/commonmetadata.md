> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcomposition/commonmetadata](https://developer.apple.com/documentation/avfoundation/avcomposition/commonmetadata)

# commonMetadata

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The metadata items an asset contains for common metadata identifiers that provide a value.

## Declaration

```swift
var commonMetadata: [AVMetadataItem] { get }
```

<a id="Discussion"></a>

## Discussion

This property value is an array of metadata items, one for each metadata key from the common key space for which the asset has an available value. You can use the various class methods provided by [AVMetadataItem](../avmetadataitem.md), such as [metadataItems(from:filteredByIdentifier:)](../avmetadataitem/metadataitems%28from_filteredbyidentifier_%29.md) or [metadataItems(from:with:)](../avmetadataitem/metadataitems%28from_with_%29.md) to filter the array to the specific items of interest.

## See Also

### Accessing metadata

- [metadata](metadata.md): An array of metadata items for all metadata identifiers for which a value is available.
- [availableMetadataFormats](availablemetadataformats.md): The metadata formats this asset contains.
- [metadata(forFormat:)](metadata%28forformat_%29.md): Returns an array of metadata items from the container with the specified format.
- [creationDate](creationdate.md): A metadata item that indicates the asset’s creation date.
- [lyrics](lyrics.md): The lyrics of the asset in a language suitable for the current locale.
