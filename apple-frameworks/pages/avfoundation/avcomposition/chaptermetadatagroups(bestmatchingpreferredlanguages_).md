> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcomposition/chaptermetadatagroups(bestmatchingpreferredlanguages:)](https://developer.apple.com/documentation/avfoundation/avcomposition/chaptermetadatagroups(bestmatchingpreferredlanguages:))

# chapterMetadataGroups(bestMatchingPreferredLanguages:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array of chapters with a locale that best matches the list of preferred languages.

## Declaration

```swift
func chapterMetadataGroups(bestMatchingPreferredLanguages preferredLanguages: [String]) -> [AVTimedMetadataGroup]
```

## Parameters

- `preferredLanguages`: An array of BCP 47 language identifier strings. The order of the identifiers in the array reflects the preferred language order, with the most preferred language being first in the array. Typically, you pass the user’s preferred languages by retrieving this array from the [preferredLanguages](../../foundation/nslocale/preferredlanguages.md) class method of [NSLocale](../../foundation/nslocale.md).

<a id="return-value"></a>

## Return Value

An array of [AVTimedMetadataGroup](../avtimedmetadatagroup.md) objects.

<a id="Discussion"></a>

## Discussion

Each object in the returned array contains an [AVMetadataItem](../avmetadataitem.md) object representing the chapter title. The time range property of the [AVTimedMetadataGroup](../avtimedmetadatagroup.md) object is equal to the time range of the chapter title item.

The metadata group contains all chapter metadata, including items with the common key [commonKeyArtwork](../avmetadatakey/commonkeyartwork.md), if such items are present. The system adds an [AVMetadataItem](../avmetadataitem.md) with the specified common key to an existing [AVTimedMetadataGroup](../avtimedmetadatagroup.md) object if the time range (timestamp and duration) of the metadata item and the metadata group overlap. The locale of such items don’t need to match the locale of the chapter titles.

You can use the [metadataItems(from:filteredAndSortedAccordingToPreferredLanguages:)](../avmetadataitem/metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md) method to further filter the metadata items in each group. You can also filter the returned items based on locale using the [metadataItems(from:with:)](../avmetadataitem/metadataitems%28from_with_%29.md) method.

This method is callable without blocking the current thread after you’ve asynchronously loaded the [availableChapterLocales](../avasset/availablechapterlocales.md) property.

## See Also

### Accessing chapter metadata

- [availableChapterLocales](availablechapterlocales.md): The locales of the asset’s chapter metadata.
- [chapterMetadataGroups(withTitleLocale:containingItemsWithCommonKeys:)](chaptermetadatagroups%28withtitlelocale_containingitemswithcommonkeys_%29.md): Returns an array of chapters that contain the specified title locale and common keys.

# chapterMetadataGroupsBestMatchingPreferredLanguages: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array of chapters with a locale that best matches the list of preferred languages.

## Declaration

```objectivec
- (NSArray<AVTimedMetadataGroup *> *) chapterMetadataGroupsBestMatchingPreferredLanguages:(NSArray<NSString *> *) preferredLanguages;
```

## Parameters

- `preferredLanguages`: An array of BCP 47 language identifier strings. The order of the identifiers in the array reflects the preferred language order, with the most preferred language being first in the array. Typically, you pass the user’s preferred languages by retrieving this array from the [preferredLanguages](../../foundation/nslocale/preferredlanguages.md) class method of [NSLocale](../../foundation/nslocale.md).

<a id="return-value"></a>

## Return Value

An array of [AVTimedMetadataGroup](../avtimedmetadatagroup.md) objects.

<a id="Discussion"></a>

## Discussion

Each object in the returned array contains an [AVMetadataItem](../avmetadataitem.md) object representing the chapter title. The time range property of the [AVTimedMetadataGroup](../avtimedmetadatagroup.md) object is equal to the time range of the chapter title item.

The metadata group contains all chapter metadata, including items with the common key [AVMetadataCommonKeyArtwork](../avmetadatakey/commonkeyartwork.md), if such items are present. The system adds an [AVMetadataItem](../avmetadataitem.md) with the specified common key to an existing [AVTimedMetadataGroup](../avtimedmetadatagroup.md) object if the time range (timestamp and duration) of the metadata item and the metadata group overlap. The locale of such items don’t need to match the locale of the chapter titles.

You can use the [metadataItemsFromArray:filteredAndSortedAccordingToPreferredLanguages:](../avmetadataitem/metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md) method to further filter the metadata items in each group. You can also filter the returned items based on locale using the [metadataItemsFromArray:withLocale:](../avmetadataitem/metadataitems%28from_with_%29.md) method.

This method is callable without blocking the current thread after you’ve asynchronously loaded the [availableChapterLocales](../avasset/availablechapterlocales.md) property.

## See Also

### Accessing chapter metadata

- [chapterMetadataGroupsWithTitleLocale:containingItemsWithCommonKeys:](chaptermetadatagroups%28withtitlelocale_containingitemswithcommonkeys_%29.md): Returns an array of chapters that contain the specified title locale and common keys.
