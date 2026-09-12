> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacecontrollable-7ti30](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacecontrollable-7ti30)

# AVPlaybackUserInterfaceControllable

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A comprehensive protocol that provides complete media control and information for playback, timeline navigation, audio/subtitle selection, volume control, and metadata access.

## Declaration

```objectivec
@protocol AVPlaybackUserInterfaceControllable <AVPlaybackUserInterfaceTimeControllable, AVPlaybackUserInterfacePlaybackControllable, AVPlaybackUserInterfaceMediaSelectionControllable, AVPlaybackUserInterfaceVolumeControllable, AVPlaybackUserInterfaceMetadataProviding>
```

<a id="overview"></a>

## Overview

This protocol consolidates all media source capabilities into a single interface, enabling rich media experiences with full control over playback state, timeline interactions, and content metadata. Implementations should provide key-value observable properties where specified to ensure proper integration with media player controls and UI frameworks.

## Relationships

### Inherits From

- [AVPlaybackUserInterfaceMediaSelectionControllable](avplaybackuserinterfacemediaselectioncontrollable-2fftn.md)
- [AVPlaybackUserInterfaceMetadataProviding](avplaybackuserinterfacemetadataproviding-1w04z.md)
- [AVPlaybackUserInterfacePlaybackControllable](avplaybackuserinterfaceplaybackcontrollable-81n66.md)
- [AVPlaybackUserInterfaceTimeControllable](avplaybackuserinterfacetimecontrollable-62fq2.md)
- [AVPlaybackUserInterfaceVolumeControllable](avplaybackuserinterfacevolumecontrollable-5ystg.md)
