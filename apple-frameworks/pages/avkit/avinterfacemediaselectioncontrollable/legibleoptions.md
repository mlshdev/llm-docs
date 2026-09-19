> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinterfacemediaselectioncontrollable/legibleoptions

# legibleOptions

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

Array of available subtitle and caption track options for selection. This includes text overlays in different languages, closed captions for accessibility, forced narrative subtitles, and sign language interpretation tracks. May be empty for content without text tracks. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<AVInterfaceMediaSelectionOptionSource *> * legibleOptions;
```
