> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinterfacecontrollable

# AVInterfaceControllable

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Protocol

A comprehensive protocol that provides complete media control and information for playback, timeline navigation, audio/subtitle selection, volume control, and metadata access.

## Declaration

```objectivec
@protocol AVInterfaceControllable <AVInterfaceTimeControllable, AVInterfacePlaybackControllable, AVInterfaceMediaSelectionControllable, AVInterfaceVolumeControllable, AVInterfaceMetadataProviding>
```

<a id="overview"></a>

## Overview

This protocol consolidates all media source capabilities into a single interface, enabling rich media experiences with full control over playback state, timeline interactions, and content metadata. Implementations should provide key-value observable properties where specified to ensure proper integration with media player controls and UI frameworks.

## Relationships

### Inherits From

- [AVInterfaceMediaSelectionControllable](avinterfacemediaselectioncontrollable.md)
- [AVInterfaceMetadataProviding](avinterfacemetadataproviding.md)
- [AVInterfacePlaybackControllable](avinterfaceplaybackcontrollable.md)
- [AVInterfaceTimeControllable](avinterfacetimecontrollable.md)
- [AVInterfaceVolumeControllable](avinterfacevolumecontrollable.md)
