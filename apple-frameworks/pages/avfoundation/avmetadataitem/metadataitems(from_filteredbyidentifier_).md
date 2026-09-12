> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitem/metadataitems(from:filteredbyidentifier:)](https://developer.apple.com/documentation/avfoundation/avmetadataitem/metadataitems(from:filteredbyidentifier:))

# metadataItems(from:filteredByIdentifier:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns metadata items for the specified identifier.

## Declaration

```swift
class func metadataItems(from metadataItems: [AVMetadataItem], filteredByIdentifier identifier: AVMetadataIdentifier) -> [AVMetadataItem]
```

## Parameters

- `metadataItems`: The metadata items to filter.
- `identifier`: The identifier of the metadata items to retrieve.

<a id="return-value"></a>

## Return Value

An array of metadata items that match the specified identifier.

## Mentioned In

- [Retrieving media metadata](../retrieving-media-metadata.md)

## See Also

### Filtering arrays of metadata items

- [metadataItems(from:withKey:keySpace:)](metadataitems%28from_withkey_keyspace_%29.md): Returns metadata items that match a specified key or key space.
- [metadataItems(from:with:)](metadataitems%28from_with_%29.md): Returns metadata items that match a specified locale.
- [metadataItems(from:filteredAndSortedAccordingToPreferredLanguages:)](metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md): Returns metadata items whose locales match one of the specified language identifiers.
- [metadataItems(from:filteredBy:)](metadataitems%28from_filteredby_%29.md): Returns filtered metadata items.

# metadataItemsFromArray:filteredByIdentifier: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns metadata items for the specified identifier.

## Declaration

```objectivec
+ (NSArray<AVMetadataItem *> *) metadataItemsFromArray:(NSArray<AVMetadataItem *> *) metadataItems filteredByIdentifier:(AVMetadataIdentifier) identifier;
```

## Parameters

- `metadataItems`: The metadata items to filter.
- `identifier`: The identifier of the metadata items to retrieve.

<a id="return-value"></a>

## Return Value

An array of metadata items that match the specified identifier.

## Mentioned In

- [Retrieving media metadata](../retrieving-media-metadata.md)

## See Also

### Filtering arrays of metadata items

- [metadataItemsFromArray:withKey:keySpace:](metadataitems%28from_withkey_keyspace_%29.md): Returns metadata items that match a specified key or key space.
- [metadataItemsFromArray:withLocale:](metadataitems%28from_with_%29.md): Returns metadata items that match a specified locale.
- [metadataItemsFromArray:filteredAndSortedAccordingToPreferredLanguages:](metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md): Returns metadata items whose locales match one of the specified language identifiers.
- [metadataItemsFromArray:filteredByMetadataItemFilter:](metadataitems%28from_filteredby_%29.md): Returns filtered metadata items.
