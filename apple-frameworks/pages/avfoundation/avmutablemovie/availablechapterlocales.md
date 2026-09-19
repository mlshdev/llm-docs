> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmutablemovie/availablechapterlocales

# availableChapterLocales

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+ · watchOS 1.0+

The locales of the asset’s chapter metadata.

## Declaration

```swift
var availableChapterLocales: [Locale] { get }
```

## See Also

### Accessing chapter metadata

- [chapterMetadataGroups(bestMatchingPreferredLanguages:)](chaptermetadatagroups%28bestmatchingpreferredlanguages_%29.md): Returns an array of chapters with a locale that best matches the list of preferred languages.
- [chapterMetadataGroups(withTitleLocale:containingItemsWithCommonKeys:)](chaptermetadatagroups%28withtitlelocale_containingitemswithcommonkeys_%29.md): Returns an array of chapters that contain the specified title locale and common keys.
