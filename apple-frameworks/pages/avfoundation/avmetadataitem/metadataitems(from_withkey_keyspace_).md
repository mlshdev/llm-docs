> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitem/metadataitems(from:withkey:keyspace:)](https://developer.apple.com/documentation/avfoundation/avmetadataitem/metadataitems(from:withkey:keyspace:))

# metadataItems(from:withKey:keySpace:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns metadata items that match a specified key or key space.

## Declaration

```swift
class func metadataItems(from metadataItems: [AVMetadataItem], withKey key: Any?, keySpace: AVMetadataKeySpace?) -> [AVMetadataItem]
```

## Parameters

- `metadataItems`: The metadata items to filter.
- `key`: The key of the metadata items to retrieve, or `nil` if you don’t want to filter by key.
- `keySpace`: The key space of the metadata items to retrieve, or `nil` if you don’t want to filter by key space.

<a id="return-value"></a>

## Return Value

An array of metadata items that match the specified key and key space.

## See Also

### Filtering arrays of metadata items

- [metadataItems(from:filteredByIdentifier:)](metadataitems%28from_filteredbyidentifier_%29.md): Returns metadata items for the specified identifier.
- [metadataItems(from:with:)](metadataitems%28from_with_%29.md): Returns metadata items that match a specified locale.
- [metadataItems(from:filteredAndSortedAccordingToPreferredLanguages:)](metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md): Returns metadata items whose locales match one of the specified language identifiers.
- [metadataItems(from:filteredBy:)](metadataitems%28from_filteredby_%29.md): Returns filtered metadata items.

# metadataItemsFromArray:withKey:keySpace: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns metadata items that match a specified key or key space.

## Declaration

```objectivec
+ (NSArray<AVMetadataItem *> *) metadataItemsFromArray:(NSArray<AVMetadataItem *> *) metadataItems withKey:(id) key keySpace:(AVMetadataKeySpace) keySpace;
```

## Parameters

- `metadataItems`: The metadata items to filter.
- `key`: The key of the metadata items to retrieve, or `nil` if you don’t want to filter by key.
- `keySpace`: The key space of the metadata items to retrieve, or `nil` if you don’t want to filter by key space.

<a id="return-value"></a>

## Return Value

An array of metadata items that match the specified key and key space.

## See Also

### Filtering arrays of metadata items

- [metadataItemsFromArray:filteredByIdentifier:](metadataitems%28from_filteredbyidentifier_%29.md): Returns metadata items for the specified identifier.
- [metadataItemsFromArray:withLocale:](metadataitems%28from_with_%29.md): Returns metadata items that match a specified locale.
- [metadataItemsFromArray:filteredAndSortedAccordingToPreferredLanguages:](metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md): Returns metadata items whose locales match one of the specified language identifiers.
- [metadataItemsFromArray:filteredByMetadataItemFilter:](metadataitems%28from_filteredby_%29.md): Returns filtered metadata items.
