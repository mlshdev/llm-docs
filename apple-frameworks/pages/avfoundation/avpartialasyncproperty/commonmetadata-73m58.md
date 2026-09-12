> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/commonmetadata-73m58](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/commonmetadata-73m58)

# commonMetadata

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An array of metadata items for all common metadata keys that have a value.

## Declaration

```swift
static var commonMetadata: AVAsyncProperty<Root, [AVMetadataItem]> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

You can filter the array of metadata items according to language using the [metadataItems(from:filteredAndSortedAccordingToPreferredLanguages:)](../avmetadataitem/metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md) method. Filter the results by identifier using the [metadataItems(from:filteredByIdentifier:)](../avmetadataitem/metadataitems%28from_filteredbyidentifier_%29.md) method.

## See Also

### Loading metadata

- [metadata](metadata-6e14c.md): Conforms when `Root` inherits `AVAssetTrack`. An array of metadata items for all metadata identifiers that have a value.
- [availableMetadataFormats](availablemetadataformats-5p9xg.md): Conforms when `Root` inherits `AVAssetTrack`. An array of metadata formats available for the track.
- [loadMetadata(for:completionHandler:)](../avassettrack/loadmetadata%28for_completionhandler_%29.md): Loads metadata items that a track contains for the specified format.
