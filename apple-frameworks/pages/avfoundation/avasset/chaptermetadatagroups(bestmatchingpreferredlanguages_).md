> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/chaptermetadatagroups(bestmatchingpreferredlanguages:)](https://developer.apple.com/documentation/avfoundation/avasset/chaptermetadatagroups(bestmatchingpreferredlanguages:))

# chapterMetadataGroups(bestMatchingPreferredLanguages:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

Returns an array of chapters with a locale that best matches the list of preferred languages.

> Use [loadChapterMetadataGroups(bestMatchingPreferredLanguages:completionHandler:)](loadchaptermetadatagroups%28bestmatchingpreferredlanguages_completionhandler_%29.md) instead.

## Declaration

```swift
func chapterMetadataGroups(bestMatchingPreferredLanguages preferredLanguages: [String]) -> [AVTimedMetadataGroup]
```

## Parameters

- `preferredLanguages`: An array of BCP 47 language identifier strings. The order of the identifiers in the array reflects the preferred language order, with the most preferred language being first in the array. Typically, you pass the user’s preferred languages by retrieving this array from the [preferredLanguages](../../foundation/nslocale/preferredlanguages.md) class method of [NSLocale](../../foundation/nslocale.md).

<a id="return-value"></a>

## Return Value

An array of [AVTimedMetadataGroup](../avtimedmetadatagroup.md) objects.

## Mentioned In

- [Presenting chapter markers](../presenting-chapter-markers.md)

<a id="Discussion"></a>

## Discussion

Each object in the returned array contains an [AVMetadataItem](../avmetadataitem.md) object representing the chapter title. The time range property of the [AVTimedMetadataGroup](../avtimedmetadatagroup.md) object is equal to the time range of the chapter title item.

The metadata group contains all chapter metadata, including items with the common key [commonKeyArtwork](../avmetadatakey/commonkeyartwork.md), if such items are present. The system adds an [AVMetadataItem](../avmetadataitem.md) with the specified common key to an existing [AVTimedMetadataGroup](../avtimedmetadatagroup.md) object if the time range (timestamp and duration) of the metadata item and the metadata group overlap. The locale of such items don’t need to match the locale of the chapter titles.

You can use the [metadataItems(from:filteredAndSortedAccordingToPreferredLanguages:)](../avmetadataitem/metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md) method to further filter the metadata items in each group. You can also filter the returned items based on locale using the [metadataItems(from:with:)](../avmetadataitem/metadataitems%28from_with_%29.md) method.

This method is callable without blocking the current thread after you’ve asynchronously loaded the [availableChapterLocales](availablechapterlocales.md) property.

# chapterMetadataGroupsBestMatchingPreferredLanguages: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 18.0) · iPadOS 6.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · watchOS 1.0+ (deprecated in 11.0)

Returns an array of chapters with a locale that best matches the list of preferred languages.

> Use [loadChapterMetadataGroupsBestMatchingPreferredLanguages:completionHandler:](loadchaptermetadatagroups%28bestmatchingpreferredlanguages_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (NSArray<AVTimedMetadataGroup *> *) chapterMetadataGroupsBestMatchingPreferredLanguages:(NSArray<NSString *> *) preferredLanguages;
```

## Parameters

- `preferredLanguages`: An array of BCP 47 language identifier strings. The order of the identifiers in the array reflects the preferred language order, with the most preferred language being first in the array. Typically, you pass the user’s preferred languages by retrieving this array from the [preferredLanguages](../../foundation/nslocale/preferredlanguages.md) class method of [NSLocale](../../foundation/nslocale.md).

<a id="return-value"></a>

## Return Value

An array of [AVTimedMetadataGroup](../avtimedmetadatagroup.md) objects.

## Mentioned In

- [Presenting chapter markers](../presenting-chapter-markers.md)

<a id="Discussion"></a>

## Discussion

Each object in the returned array contains an [AVMetadataItem](../avmetadataitem.md) object representing the chapter title. The time range property of the [AVTimedMetadataGroup](../avtimedmetadatagroup.md) object is equal to the time range of the chapter title item.

The metadata group contains all chapter metadata, including items with the common key [AVMetadataCommonKeyArtwork](../avmetadatakey/commonkeyartwork.md), if such items are present. The system adds an [AVMetadataItem](../avmetadataitem.md) with the specified common key to an existing [AVTimedMetadataGroup](../avtimedmetadatagroup.md) object if the time range (timestamp and duration) of the metadata item and the metadata group overlap. The locale of such items don’t need to match the locale of the chapter titles.

You can use the [metadataItemsFromArray:filteredAndSortedAccordingToPreferredLanguages:](../avmetadataitem/metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md) method to further filter the metadata items in each group. You can also filter the returned items based on locale using the [metadataItemsFromArray:withLocale:](../avmetadataitem/metadataitems%28from_with_%29.md) method.

This method is callable without blocking the current thread after you’ve asynchronously loaded the [availableChapterLocales](availablechapterlocales.md) property.

## See Also

### Accessing chapter metadata

- [availableChapterLocales](availablechapterlocales.md): Deprecated. The locales of the asset’s chapter metadata.
- [chapterMetadataGroupsWithTitleLocale:containingItemsWithCommonKeys:](chaptermetadatagroups%28withtitlelocale_containingitemswithcommonkeys_%29.md): Deprecated. Returns an array of chapters that contain the specified title locale and common keys.
