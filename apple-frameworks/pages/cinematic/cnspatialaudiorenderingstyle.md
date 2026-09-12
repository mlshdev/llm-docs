> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnspatialaudiorenderingstyle](https://developer.apple.com/documentation/cinematic/cnspatialaudiorenderingstyle)

# CNSpatialAudioRenderingStyle (Swift)

**Framework:** Cinematic  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

## Declaration

```swift
enum CNSpatialAudioRenderingStyle
```

<a id="overview"></a>

## Overview

Standard rendering styles for Audio Mix type effects

## Topics

### Enumeration Cases

- [CNSpatialAudioRenderingStyle.cinematic](cnspatialaudiorenderingstyle/cinematic.md): Isolates background and foreground sounds and places them in separate stems.
- [CNSpatialAudioRenderingStyle.cinematicBackgroundStem](cnspatialaudiorenderingstyle/cinematicbackgroundstem.md): Isolates background sounds in a stem.
- [CNSpatialAudioRenderingStyle.cinematicForegroundStem](cnspatialaudiorenderingstyle/cinematicforegroundstem.md): Isolates foreground sounds in a stem.
- [CNSpatialAudioRenderingStyle.inFrame](cnspatialaudiorenderingstyle/inframe.md): Isolates background from foreground sounds in the camera field of view and places them in separate stems.
- [CNSpatialAudioRenderingStyle.inFrameBackgroundStem](cnspatialaudiorenderingstyle/inframebackgroundstem.md): Isolates background plus foreground sounds outside the camera field of view in a stem.
- [CNSpatialAudioRenderingStyle.inFrameForegroundStem](cnspatialaudiorenderingstyle/inframeforegroundstem.md): Isolates foreground sounds within the camera field of view in a stem.
- [CNSpatialAudioRenderingStyle.standard](cnspatialaudiorenderingstyle/standard.md): Produces an unprocessed spatial stem of the original recording. This is the default rendering style.
- [CNSpatialAudioRenderingStyle.studio](cnspatialaudiorenderingstyle/studio.md): Isolates background and foreground in separate stems. Adds a proximity effect to foreground sounds.
- [CNSpatialAudioRenderingStyle.studioBackgroundStem](cnspatialaudiorenderingstyle/studiobackgroundstem.md): Isolates background sounds in a stem.
- [CNSpatialAudioRenderingStyle.studioForegroundStem](cnspatialaudiorenderingstyle/studioforegroundstem.md): Isolates foreground sounds in a stem, and adds a proximity effect.

### Initializers

- [init(rawValue:)](cnspatialaudiorenderingstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CNSpatialAudioRenderingStyle (Objective-C)

**Framework:** Cinematic  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

## Declaration

```objectivec
enum CNSpatialAudioRenderingStyle : NSInteger;
```

<a id="overview"></a>

## Overview

Standard rendering styles for Audio Mix type effects

## Topics

### Enumeration Cases

- [CNSpatialAudioRenderingStyleCinematic](cnspatialaudiorenderingstyle/cinematic.md): Isolates background and foreground sounds and places them in separate stems.
- [CNSpatialAudioRenderingStyleCinematicBackgroundStem](cnspatialaudiorenderingstyle/cinematicbackgroundstem.md): Isolates background sounds in a stem.
- [CNSpatialAudioRenderingStyleCinematicForegroundStem](cnspatialaudiorenderingstyle/cinematicforegroundstem.md): Isolates foreground sounds in a stem.
- [CNSpatialAudioRenderingStyleInFrame](cnspatialaudiorenderingstyle/inframe.md): Isolates background from foreground sounds in the camera field of view and places them in separate stems.
- [CNSpatialAudioRenderingStyleInFrameBackgroundStem](cnspatialaudiorenderingstyle/inframebackgroundstem.md): Isolates background plus foreground sounds outside the camera field of view in a stem.
- [CNSpatialAudioRenderingStyleInFrameForegroundStem](cnspatialaudiorenderingstyle/inframeforegroundstem.md): Isolates foreground sounds within the camera field of view in a stem.
- [CNSpatialAudioRenderingStyleStandard](cnspatialaudiorenderingstyle/standard.md): Produces an unprocessed spatial stem of the original recording. This is the default rendering style.
- [CNSpatialAudioRenderingStyleStudio](cnspatialaudiorenderingstyle/studio.md): Isolates background and foreground in separate stems. Adds a proximity effect to foreground sounds.
- [CNSpatialAudioRenderingStyleStudioBackgroundStem](cnspatialaudiorenderingstyle/studiobackgroundstem.md): Isolates background sounds in a stem.
- [CNSpatialAudioRenderingStyleStudioForegroundStem](cnspatialaudiorenderingstyle/studioforegroundstem.md): Isolates foreground sounds in a stem, and adds a proximity effect.
