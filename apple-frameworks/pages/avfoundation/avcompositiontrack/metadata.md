> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcompositiontrack/metadata](https://developer.apple.com/documentation/avfoundation/avcompositiontrack/metadata)

# metadata

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of metadata items for all metadata identifiers that have a value.

## Declaration

```swift
var metadata: [AVMetadataItem] { get }
```

<a id="Discussion"></a>

## Discussion

You can filter the array of metadata items according to language using the [metadataItems(from:filteredAndSortedAccordingToPreferredLanguages:)](../avmetadataitem/metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md) method. Filter the results by identifier using the [metadataItems(from:filteredByIdentifier:)](../avmetadataitem/metadataitems%28from_filteredbyidentifier_%29.md) method.

## See Also

### Accessing metadata

- [commonMetadata](commonmetadata.md): An array of metadata items for all common metadata keys that have a value.
- [availableMetadataFormats](availablemetadataformats.md): An array of metadata formats available for the track.
- [metadata(forFormat:)](metadata%28forformat_%29.md): Returns metadata items that a track contains for the specified format.
