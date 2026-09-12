> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitem/metadataitems(from:filteredby:)](https://developer.apple.com/documentation/avfoundation/avmetadataitem/metadataitems(from:filteredby:))

# metadataItems(from:filteredBy:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns filtered metadata items.

## Declaration

```swift
class func metadataItems(from metadataItems: [AVMetadataItem], filteredBy metadataItemFilter: AVMetadataItemFilter) -> [AVMetadataItem]
```

## Parameters

- `metadataItems`: The metadata items to filter.
- `metadataItemFilter`: The metadata item filter to apply.

<a id="return-value"></a>

## Return Value

The filtered array of metadata items.

## See Also

### Filtering arrays of metadata items

- [metadataItems(from:filteredByIdentifier:)](metadataitems%28from_filteredbyidentifier_%29.md): Returns metadata items for the specified identifier.
- [metadataItems(from:withKey:keySpace:)](metadataitems%28from_withkey_keyspace_%29.md): Returns metadata items that match a specified key or key space.
- [metadataItems(from:with:)](metadataitems%28from_with_%29.md): Returns metadata items that match a specified locale.
- [metadataItems(from:filteredAndSortedAccordingToPreferredLanguages:)](metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md): Returns metadata items whose locales match one of the specified language identifiers.

# metadataItemsFromArray:filteredByMetadataItemFilter: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns filtered metadata items.

## Declaration

```objectivec
+ (NSArray<AVMetadataItem *> *) metadataItemsFromArray:(NSArray<AVMetadataItem *> *) metadataItems filteredByMetadataItemFilter:(AVMetadataItemFilter *) metadataItemFilter;
```

## Parameters

- `metadataItems`: The metadata items to filter.
- `metadataItemFilter`: The metadata item filter to apply.

<a id="return-value"></a>

## Return Value

The filtered array of metadata items.

## See Also

### Filtering arrays of metadata items

- [metadataItemsFromArray:filteredByIdentifier:](metadataitems%28from_filteredbyidentifier_%29.md): Returns metadata items for the specified identifier.
- [metadataItemsFromArray:withKey:keySpace:](metadataitems%28from_withkey_keyspace_%29.md): Returns metadata items that match a specified key or key space.
- [metadataItemsFromArray:withLocale:](metadataitems%28from_with_%29.md): Returns metadata items that match a specified locale.
- [metadataItemsFromArray:filteredAndSortedAccordingToPreferredLanguages:](metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md): Returns metadata items whose locales match one of the specified language identifiers.
