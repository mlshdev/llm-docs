> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/loadchaptermetadatagroups(withtitlelocale:containingitemswithcommonkeys:)](https://developer.apple.com/documentation/avfoundation/avasset/loadchaptermetadatagroups(withtitlelocale:containingitemswithcommonkeys:))

# loadChapterMetadataGroups(withTitleLocale:containingItemsWithCommonKeys:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads chapter metadata that contains the specified title locale and common keys.

## Declaration

```swift
func loadChapterMetadataGroups(withTitleLocale locale: Locale, containingItemsWithCommonKeys commonKeys: [AVMetadataKey] = []) async throws -> [AVTimedMetadataGroup]
```

## Parameters

- `locale`: The locale of the chapter metadata to load.
- `commonKeys`: An array of common [AVMetadataKey](../avmetadatakey.md) values to include in the returned array. The framework currently only supports the [commonKeyArtwork](../avmetadatakey/commonkeyartwork.md) key.

<a id="return-value"></a>

## Return Value

An array of chapter metadata items for a locale.

<a id="Discussion"></a>

## Discussion

This method returns an array of [AVTimedMetadataGroup](../avtimedmetadatagroup.md) objects asynchronously. Each object in the array contains an [AVMetadataItem](../avmetadataitem.md) that represents the chapter’s title, and the metadata group’s [timeRange](../avtimedmetadatagroup/timerange.md) value equals the time range of the chapter title item.

The metadata group contains all chapter metadata, including items with the common key [commonKeyArtwork](../avmetadatakey/commonkeyartwork.md), if such items are present. The system adds an [AVMetadataItem](../avmetadataitem.md) with the specified common key to an existing [AVTimedMetadataGroup](../avtimedmetadatagroup.md) object if the time range (timestamp and duration) of the metadata item and the metadata group overlap. The locales of such items don’t need to match the locale of the chapter titles.

You can use the [metadataItems(from:filteredAndSortedAccordingToPreferredLanguages:)](../avmetadataitem/metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md) method to further filter the metadata items in each group. You can also filter the returned items based on locale using the [metadataItems(from:with:)](../avmetadataitem/metadataitems%28from_with_%29.md) method.

## See Also

### Loading chapter metadata

- [availableChapterLocales](../avpartialasyncproperty/availablechapterlocales.md): Conforms when `Root` inherits `AVAsset`. The locales of an asset’s chapter metadata.
- [loadChapterMetadataGroups(bestMatchingPreferredLanguages:completionHandler:)](loadchaptermetadatagroups%28bestmatchingpreferredlanguages_completionhandler_%29.md): Loads chapter metadata with a locale that best matches the list of preferred languages.
