> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinterfacemediaselectioncontrollable/currentaudiooption](https://developer.apple.com/documentation/avkit/avinterfacemediaselectioncontrollable/currentaudiooption)

# currentAudioOption

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

Currently selected audio track for playback. Setting this property changes the active audio stream. This includes language variants, audio descriptions, director’s commentary, and other audio content. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) AVInterfaceMediaSelectionOptionSource * currentAudioOption;
```

## See Also

### Inspecting media selection options

- [audioOptions](audiooptions.md): Array of available audio track options for selection. This includes all audio streams provided by the media source such as different languages, audio descriptions, director’s commentary, and alternative audio mixes. Options are ordered by preference with the primary language or default audio track typically appearing first. May be empty for content without selectable audio options. Must be key-value observable.
- [legibleOptions](legibleoptions.md): Array of available subtitle and caption track options for selection. This includes text overlays in different languages, closed captions for accessibility, forced narrative subtitles, and sign language interpretation tracks. May be empty for content without text tracks. Must be key-value observable.
- [currentLegibleOption](currentlegibleoption.md): Currently selected subtitle or caption track. Setting this property controls text overlay presentation. This includes subtitles in different languages, closed captions, and forced narrative text. Set to nil to disable text display. Must be key-value observable.
