> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinterfacemediaselectioncontrollable/audiooptions

# audioOptions

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

Array of available audio track options for selection. This includes all audio streams provided by the media source such as different languages, audio descriptions, director’s commentary, and alternative audio mixes. Options are ordered by preference with the primary language or default audio track typically appearing first. May be empty for content without selectable audio options. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<AVInterfaceMediaSelectionOptionSource *> * audioOptions;
```
