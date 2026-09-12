> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/metadata](https://developer.apple.com/documentation/avfoundation/avassettrack/metadata)

# metadata (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.10+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

An array of metadata items for all metadata identifiers that have a value.

> Load the value of [metadata](../avpartialasyncproperty/metadata-6e14c.md) asynchronously instead.

## Declaration

```swift
var metadata: [AVMetadataItem] { get }
```

<a id="Discussion"></a>

## Discussion

You can filter the array of metadata items according to language using the [metadataItems(from:filteredAndSortedAccordingToPreferredLanguages:)](../avmetadataitem/metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md) method. Filter the results by identifier using the [metadataItems(from:filteredByIdentifier:)](../avmetadataitem/metadataitems%28from_filteredbyidentifier_%29.md) method.

# metadata (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of metadata items for all metadata identifiers that have a value.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVMetadataItem *> * metadata;
```

<a id="Discussion"></a>

## Discussion

You can filter the array of metadata items according to language using the [metadataItemsFromArray:filteredAndSortedAccordingToPreferredLanguages:](../avmetadataitem/metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md) method. Filter the results by identifier using the [metadataItemsFromArray:filteredByIdentifier:](../avmetadataitem/metadataitems%28from_filteredbyidentifier_%29.md) method.

## See Also

### Accessing metadata

- [commonMetadata](commonmetadata.md): Deprecated. An array of metadata items for all common metadata keys that have a value.
- [availableMetadataFormats](availablemetadataformats.md): Deprecated. An array of metadata formats available for the track.
- [metadataForFormat:](metadata%28forformat_%29.md): Deprecated. Returns metadata items that a track contains for the specified format.
