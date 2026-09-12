> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/commonmetadata](https://developer.apple.com/documentation/avfoundation/avasset/commonmetadata)

# commonMetadata (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

The metadata items an asset contains for common metadata identifiers that provide a value.

> Load the value of [commonMetadata](../avpartialasyncproperty/commonmetadata-3j3n4.md) asynchronously instead.

## Declaration

```swift
var commonMetadata: [AVMetadataItem] { get }
```

<a id="Discussion"></a>

## Discussion

This property value is an array of metadata items, one for each metadata key from the common key space for which the asset has an available value. You can use the various class methods provided by [AVMetadataItem](../avmetadataitem.md), such as [metadataItems(from:filteredByIdentifier:)](../avmetadataitem/metadataitems%28from_filteredbyidentifier_%29.md) or [metadataItems(from:with:)](../avmetadataitem/metadataitems%28from_with_%29.md) to filter the array to the specific items of interest.

# commonMetadata (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The metadata items an asset contains for common metadata identifiers that provide a value.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVMetadataItem *> * commonMetadata;
```

<a id="Discussion"></a>

## Discussion

This property value is an array of metadata items, one for each metadata key from the common key space for which the asset has an available value. You can use the various class methods provided by [AVMetadataItem](../avmetadataitem.md), such as [metadataItemsFromArray:filteredByIdentifier:](../avmetadataitem/metadataitems%28from_filteredbyidentifier_%29.md) or [metadataItemsFromArray:withLocale:](../avmetadataitem/metadataitems%28from_with_%29.md) to filter the array to the specific items of interest.

## See Also

### Accessing metadata

- [metadata](metadata.md): Deprecated. An array of metadata items for all metadata identifiers for which a value is available.
- [availableMetadataFormats](availablemetadataformats.md): Deprecated. The metadata formats this asset contains.
- [metadataForFormat:](metadata%28forformat_%29.md): Deprecated. Returns an array of metadata items from the container with the specified format.
- [creationDate](creationdate.md): Deprecated. A metadata item that indicates the asset’s creation date.
- [lyrics](lyrics.md): Deprecated. The lyrics of the asset in a language suitable for the current locale.
