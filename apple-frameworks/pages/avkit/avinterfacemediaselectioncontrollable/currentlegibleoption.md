> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinterfacemediaselectioncontrollable/currentlegibleoption

# currentLegibleOption

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

Currently selected subtitle or caption track. Setting this property controls text overlay presentation. This includes subtitles in different languages, closed captions, and forced narrative text. Set to nil to disable text display. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) AVInterfaceMediaSelectionOptionSource * currentLegibleOption;
```
