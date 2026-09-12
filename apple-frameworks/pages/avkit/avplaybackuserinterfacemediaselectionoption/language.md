> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacemediaselectionoption/language](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacemediaselectionoption/language)

# language

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The language of this media selection option.

## Declaration

```swift
var language: Locale.Language? { get }
```

<a id="discussion"></a>

## Discussion

This standardized tag provides detailed language information including region, script, and variants. Returns `nil` for language-neutral content such as music-only audio tracks, sound effects, or visual-only subtitles without spoken content.
