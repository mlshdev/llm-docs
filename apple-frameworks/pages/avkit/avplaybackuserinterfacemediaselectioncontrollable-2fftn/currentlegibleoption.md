> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplaybackuserinterfacemediaselectioncontrollable-2fftn/currentlegibleoption

# currentLegibleOption

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The currently selected subtitle or caption track. Should be one of the options in `legibleOptions`. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) AVPlaybackUserInterfaceMediaSelectionOption * currentLegibleOption;
```
