> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/availablechapterlocales](https://developer.apple.com/documentation/avfoundation/avasset/availablechapterlocales)

# availableChapterLocales (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ (deprecated in 16.0) · iPadOS 4.3+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

The locales of the asset’s chapter metadata.

> Load the value of [availableChapterLocales](../avpartialasyncproperty/availablechapterlocales.md) asynchronously instead.

## Declaration

```swift
var availableChapterLocales: [Locale] { get }
```

## Mentioned In

- [Presenting chapter markers](../presenting-chapter-markers.md)

# availableChapterLocales (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The locales of the asset’s chapter metadata.

## Declaration

```objectivec
@property (readonly) NSArray<NSLocale *> * availableChapterLocales;
```

## Mentioned In

- [Presenting chapter markers](../presenting-chapter-markers.md)

## See Also

### Accessing chapter metadata

- [chapterMetadataGroupsWithTitleLocale:containingItemsWithCommonKeys:](chaptermetadatagroups%28withtitlelocale_containingitemswithcommonkeys_%29.md): Deprecated. Returns an array of chapters that contain the specified title locale and common keys.
- [chapterMetadataGroupsBestMatchingPreferredLanguages:](chaptermetadatagroups%28bestmatchingpreferredlanguages_%29.md): Deprecated. Returns an array of chapters with a locale that best matches the list of preferred languages.
