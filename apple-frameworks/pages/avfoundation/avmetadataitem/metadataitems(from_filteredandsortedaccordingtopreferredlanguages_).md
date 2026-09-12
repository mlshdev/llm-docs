> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitem/metadataitems(from:filteredandsortedaccordingtopreferredlanguages:)](https://developer.apple.com/documentation/avfoundation/avmetadataitem/metadataitems(from:filteredandsortedaccordingtopreferredlanguages:))

# metadataItems(from:filteredAndSortedAccordingToPreferredLanguages:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns metadata items whose locales match one of the specified language identifiers.

## Declaration

```swift
class func metadataItems(from metadataItems: [AVMetadataItem], filteredAndSortedAccordingToPreferredLanguages preferredLanguages: [String]) -> [AVMetadataItem]
```

## Parameters

- `metadataItems`: The metadata items to filter.
- `preferredLanguages`: An array of [NSString](../../foundation/nsstring.md) objects, each of which contains a canonicalized IETF BCP 47 language identifier. The order of the identifiers in the array reflects the preferred language order, with the most preferred language being first in the array. Typically, you pass the user’s preferred languages by retrieving this array from the [preferredLanguages](../../foundation/nslocale/preferredlanguages.md) class method of [NSLocale](../../foundation/nslocale.md).

<a id="return-value"></a>

## Return Value

An array of metadata items that match the specified languages.

## See Also

### Filtering arrays of metadata items

- [metadataItems(from:filteredByIdentifier:)](metadataitems%28from_filteredbyidentifier_%29.md): Returns metadata items for the specified identifier.
- [metadataItems(from:withKey:keySpace:)](metadataitems%28from_withkey_keyspace_%29.md): Returns metadata items that match a specified key or key space.
- [metadataItems(from:with:)](metadataitems%28from_with_%29.md): Returns metadata items that match a specified locale.
- [metadataItems(from:filteredBy:)](metadataitems%28from_filteredby_%29.md): Returns filtered metadata items.

# metadataItemsFromArray:filteredAndSortedAccordingToPreferredLanguages: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns metadata items whose locales match one of the specified language identifiers.

## Declaration

```objectivec
+ (NSArray<AVMetadataItem *> *) metadataItemsFromArray:(NSArray<AVMetadataItem *> *) metadataItems filteredAndSortedAccordingToPreferredLanguages:(NSArray<NSString *> *) preferredLanguages;
```

## Parameters

- `metadataItems`: The metadata items to filter.
- `preferredLanguages`: An array of [NSString](../../foundation/nsstring.md) objects, each of which contains a canonicalized IETF BCP 47 language identifier. The order of the identifiers in the array reflects the preferred language order, with the most preferred language being first in the array. Typically, you pass the user’s preferred languages by retrieving this array from the [preferredLanguages](../../foundation/nslocale/preferredlanguages.md) class method of [NSLocale](../../foundation/nslocale.md).

<a id="return-value"></a>

## Return Value

An array of metadata items that match the specified languages.

## See Also

### Filtering arrays of metadata items

- [metadataItemsFromArray:filteredByIdentifier:](metadataitems%28from_filteredbyidentifier_%29.md): Returns metadata items for the specified identifier.
- [metadataItemsFromArray:withKey:keySpace:](metadataitems%28from_withkey_keyspace_%29.md): Returns metadata items that match a specified key or key space.
- [metadataItemsFromArray:withLocale:](metadataitems%28from_with_%29.md): Returns metadata items that match a specified locale.
- [metadataItemsFromArray:filteredByMetadataItemFilter:](metadataitems%28from_filteredby_%29.md): Returns filtered metadata items.
