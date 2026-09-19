> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinterfacemediaselectioncontrollable/currentaudiooption

# currentAudioOption

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

Currently selected audio track for playback. Setting this property changes the active audio stream. This includes language variants, audio descriptions, director’s commentary, and other audio content. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) AVInterfaceMediaSelectionOptionSource * currentAudioOption;
```
