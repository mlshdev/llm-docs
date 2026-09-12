> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitem/metadataitems(from:with:)](https://developer.apple.com/documentation/avfoundation/avmetadataitem/metadataitems(from:with:))

# metadataItems(from:with:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns metadata items that match a specified locale.

## Declaration

```swift
class func metadataItems(from metadataItems: [AVMetadataItem], with locale: Locale) -> [AVMetadataItem]
```

## Parameters

- `metadataItems`: The metadata items to filter.
- `locale`: The locale of the metadata items to retrieve.

<a id="return-value"></a>

## Return Value

An array of metadata items that match the specified key and key space.

## See Also

### Filtering arrays of metadata items

- [metadataItems(from:filteredByIdentifier:)](metadataitems%28from_filteredbyidentifier_%29.md): Returns metadata items for the specified identifier.
- [metadataItems(from:withKey:keySpace:)](metadataitems%28from_withkey_keyspace_%29.md): Returns metadata items that match a specified key or key space.
- [metadataItems(from:filteredAndSortedAccordingToPreferredLanguages:)](metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md): Returns metadata items whose locales match one of the specified language identifiers.
- [metadataItems(from:filteredBy:)](metadataitems%28from_filteredby_%29.md): Returns filtered metadata items.

# metadataItemsFromArray:withLocale: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns metadata items that match a specified locale.

## Declaration

```objectivec
+ (NSArray<AVMetadataItem *> *) metadataItemsFromArray:(NSArray<AVMetadataItem *> *) metadataItems withLocale:(NSLocale *) locale;
```

## Parameters

- `metadataItems`: The metadata items to filter.
- `locale`: The locale of the metadata items to retrieve.

<a id="return-value"></a>

## Return Value

An array of metadata items that match the specified key and key space.

## See Also

### Filtering arrays of metadata items

- [metadataItemsFromArray:filteredByIdentifier:](metadataitems%28from_filteredbyidentifier_%29.md): Returns metadata items for the specified identifier.
- [metadataItemsFromArray:withKey:keySpace:](metadataitems%28from_withkey_keyspace_%29.md): Returns metadata items that match a specified key or key space.
- [metadataItemsFromArray:filteredAndSortedAccordingToPreferredLanguages:](metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md): Returns metadata items whose locales match one of the specified language identifiers.
- [metadataItemsFromArray:filteredByMetadataItemFilter:](metadataitems%28from_filteredby_%29.md): Returns filtered metadata items.
