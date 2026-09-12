> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/metadata](https://developer.apple.com/documentation/avfoundation/avasset/metadata)

# metadata (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.10+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

An array of metadata items for all metadata identifiers for which a value is available.

> Load the value of [metadata](../avpartialasyncproperty/metadata-16qej.md) asynchronously instead.

## Declaration

```swift
var metadata: [AVMetadataItem] { get }
```

<a id="Discussion"></a>

## Discussion

You can filter the metadata items by language using the [metadataItems(from:filteredAndSortedAccordingToPreferredLanguages:)](../avmetadataitem/metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md) method, or by identifier with the [metadataItems(from:filteredByIdentifier:)](../avmetadataitem/metadataitems%28from_filteredbyidentifier_%29.md) method.

# metadata (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of metadata items for all metadata identifiers for which a value is available.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVMetadataItem *> * metadata;
```

<a id="Discussion"></a>

## Discussion

You can filter the metadata items by language using the [metadataItemsFromArray:filteredAndSortedAccordingToPreferredLanguages:](../avmetadataitem/metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md) method, or by identifier with the [metadataItemsFromArray:filteredByIdentifier:](../avmetadataitem/metadataitems%28from_filteredbyidentifier_%29.md) method.

## See Also

### Accessing metadata

- [commonMetadata](commonmetadata.md): Deprecated. The metadata items an asset contains for common metadata identifiers that provide a value.
- [availableMetadataFormats](availablemetadataformats.md): Deprecated. The metadata formats this asset contains.
- [metadataForFormat:](metadata%28forformat_%29.md): Deprecated. Returns an array of metadata items from the container with the specified format.
- [creationDate](creationdate.md): Deprecated. A metadata item that indicates the asset’s creation date.
- [lyrics](lyrics.md): Deprecated. The lyrics of the asset in a language suitable for the current locale.
