> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacemediaselectionoption/extendedlanguagetag](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacemediaselectionoption/extendedlanguagetag)

# extendedLanguageTag

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

IETF BCP 47 language identifier (e.g., “en-US”, “es-419”, “zh-Hans-CN”) indicating the primary language and locale of this option. This standardized tag provides detailed language information including region, script, and variants. May be empty for language-neutral content such as music-only audio tracks, sound effects, or visual-only subtitles without spoken content.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * extendedLanguageTag;
```
