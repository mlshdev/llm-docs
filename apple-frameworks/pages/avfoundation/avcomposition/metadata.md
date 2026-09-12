> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcomposition/metadata](https://developer.apple.com/documentation/avfoundation/avcomposition/metadata)

# metadata

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of metadata items for all metadata identifiers for which a value is available.

## Declaration

```swift
var metadata: [AVMetadataItem] { get }
```

<a id="Discussion"></a>

## Discussion

You can filter the metadata items by language using the [metadataItems(from:filteredAndSortedAccordingToPreferredLanguages:)](../avmetadataitem/metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md) method, or by identifier with the [metadataItems(from:filteredByIdentifier:)](../avmetadataitem/metadataitems%28from_filteredbyidentifier_%29.md) method.

## See Also

### Accessing metadata

- [commonMetadata](commonmetadata.md): The metadata items an asset contains for common metadata identifiers that provide a value.
- [availableMetadataFormats](availablemetadataformats.md): The metadata formats this asset contains.
- [metadata(forFormat:)](metadata%28forformat_%29.md): Returns an array of metadata items from the container with the specified format.
- [creationDate](creationdate.md): A metadata item that indicates the asset’s creation date.
- [lyrics](lyrics.md): The lyrics of the asset in a language suitable for the current locale.
