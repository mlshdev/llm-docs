> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/casoundstagesize](https://developer.apple.com/documentation/audiotoolbox/casoundstagesize)

# CASoundStageSize

**Interface language:** Objective-C

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · tvOS · visionOS

Configure the distribution of audio channels in 3D space.

## Declaration

```objectivec
enum CASoundStageSize : NSInteger;
```

<a id="overview"></a>

## Overview

The Objective-C version of the `SpatialAudioExperiences.SoundStageSize` Swift type.

## Topics

### Enumeration Cases

- [CASoundStageSizeAutomatic](casoundstagesize/casoundstagesizeautomatic.md): A system-defined sound stage size.
- [CASoundStageSizeLarge](casoundstagesize/casoundstagesizelarge.md): Spreads an audio stream’s channels around the user according to the coordinates described in its channel layout.
- [CASoundStageSizeMedium](casoundstagesize/casoundstagesizemedium.md): Pulls an audio stream’s channels closer to the channel layout’s front.
- [CASoundStageSizeSmall](casoundstagesize/casoundstagesizesmall.md): Places all of an audio stream’s channels near the layout’s front.
