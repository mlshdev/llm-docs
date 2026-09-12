> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcomposition/chaptermetadatagroups(withtitlelocale:containingitemswithcommonkeys:)](https://developer.apple.com/documentation/avfoundation/avcomposition/chaptermetadatagroups(withtitlelocale:containingitemswithcommonkeys:))

# chapterMetadataGroups(withTitleLocale:containingItemsWithCommonKeys:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array of chapters that contain the specified title locale and common keys.

## Declaration

```swift
func chapterMetadataGroups(withTitleLocale locale: Locale, containingItemsWithCommonKeys commonKeys: [AVMetadataKey]?) -> [AVTimedMetadataGroup]
```

## Parameters

- `locale`: The locale of the metadata items carrying chapter titles.
- `commonKeys`: An array of common keys of [AVMetadataItem](../avmetadataitem.md) to include in the returned array. The framework currently only supports the [commonKeyArtwork](../avmetadatakey/commonkeyartwork.md) key.

<a id="return-value"></a>

## Return Value

An array of [AVTimedMetadataGroup](../avtimedmetadatagroup.md) objects.

<a id="Discussion"></a>

## Discussion

A metadata group contains an [AVMetadataItem](../avmetadataitem.md) object that represents the chapter title, and a time range equal to the time range of the chapter title item.

The system adds a metadata item with the specified common key to an existing [AVTimedMetadataGroup](../avtimedmetadatagroup.md) object if the time range (timestamp and duration) of the metadata item and the metadata group overlap.

The locale of items that don’t contain chapter titles doesn’t need to match the specified locale parameter. You can filter the returned items based on locale using [metadataItems(from:with:)](../avmetadataitem/metadataitems%28from_with_%29.md).

## See Also

### Accessing chapter metadata

- [availableChapterLocales](availablechapterlocales.md): The locales of the asset’s chapter metadata.
- [chapterMetadataGroups(bestMatchingPreferredLanguages:)](chaptermetadatagroups%28bestmatchingpreferredlanguages_%29.md): Returns an array of chapters with a locale that best matches the list of preferred languages.

# chapterMetadataGroupsWithTitleLocale:containingItemsWithCommonKeys: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array of chapters that contain the specified title locale and common keys.

## Declaration

```objectivec
- (NSArray<AVTimedMetadataGroup *> *) chapterMetadataGroupsWithTitleLocale:(NSLocale *) locale containingItemsWithCommonKeys:(NSArray<NSString *> *) commonKeys;
```

## Parameters

- `locale`: The locale of the metadata items carrying chapter titles.
- `commonKeys`: An array of common keys of [AVMetadataItem](../avmetadataitem.md) to include in the returned array. The framework currently only supports the [AVMetadataCommonKeyArtwork](../avmetadatakey/commonkeyartwork.md) key.

<a id="return-value"></a>

## Return Value

An array of [AVTimedMetadataGroup](../avtimedmetadatagroup.md) objects.

<a id="Discussion"></a>

## Discussion

A metadata group contains an [AVMetadataItem](../avmetadataitem.md) object that represents the chapter title, and a time range equal to the time range of the chapter title item.

The system adds a metadata item with the specified common key to an existing [AVTimedMetadataGroup](../avtimedmetadatagroup.md) object if the time range (timestamp and duration) of the metadata item and the metadata group overlap.

The locale of items that don’t contain chapter titles doesn’t need to match the specified locale parameter. You can filter the returned items based on locale using [metadataItemsFromArray:withLocale:](../avmetadataitem/metadataitems%28from_with_%29.md).

## See Also

### Accessing chapter metadata

- [chapterMetadataGroupsBestMatchingPreferredLanguages:](chaptermetadatagroups%28bestmatchingpreferredlanguages_%29.md): Returns an array of chapters with a locale that best matches the list of preferred languages.
