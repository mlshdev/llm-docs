> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacecontrollable-92fri](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacecontrollable-92fri)

# AVPlaybackUserInterfaceControllable

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A comprehensive protocol that provides complete media control and information for playback, timeline navigation, audio/subtitle selection, volume control, and metadata access.

## Declaration

```swift
@MainActor protocol AVPlaybackUserInterfaceControllable : AVPlaybackUserInterfaceMediaSelectionControllable, AVPlaybackUserInterfaceMetadataProviding, AVPlaybackUserInterfacePlaybackControllable, AVPlaybackUserInterfaceTimeControllable, AVPlaybackUserInterfaceVolumeControllable
```

<a id="overview"></a>

## Overview

This protocol consolidates all media source capabilities into a single interface, enabling rich media experiences with full control over playback state, timeline interactions, and content metadata.

## Relationships

### Inherits From

- [AVPlaybackUserInterfaceMediaSelectionControllable](avplaybackuserinterfacemediaselectioncontrollable-8ee5z.md)
- [AVPlaybackUserInterfaceMetadataProviding](avplaybackuserinterfacemetadataproviding-814y4.md)
- [AVPlaybackUserInterfacePlaybackControllable](avplaybackuserinterfaceplaybackcontrollable-9he54.md)
- [AVPlaybackUserInterfaceTimeControllable](avplaybackuserinterfacetimecontrollable-50vcy.md)
- [AVPlaybackUserInterfaceVolumeControllable](avplaybackuserinterfacevolumecontrollable-4vgi1.md)
- [Observable](https://developer.apple.com/documentation/observation/observable)
