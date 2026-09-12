> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/availablechapterlocales](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/availablechapterlocales)

# availableChapterLocales

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The locales of an asset’s chapter metadata.

## Declaration

```swift
static var availableChapterLocales: AVAsyncProperty<Root, [Locale]> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

## See Also

### Loading chapter metadata

- [loadChapterMetadataGroups(withTitleLocale:containingItemsWithCommonKeys:)](../avasset/loadchaptermetadatagroups%28withtitlelocale_containingitemswithcommonkeys_%29.md): Loads chapter metadata that contains the specified title locale and common keys.
- [loadChapterMetadataGroups(bestMatchingPreferredLanguages:completionHandler:)](../avasset/loadchaptermetadatagroups%28bestmatchingpreferredlanguages_completionhandler_%29.md): Loads chapter metadata with a locale that best matches the list of preferred languages.
