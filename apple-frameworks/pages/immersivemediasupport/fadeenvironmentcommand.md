> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/fadeenvironmentcommand](https://developer.apple.com/documentation/immersivemediasupport/fadeenvironmentcommand)

# FadeEnvironmentCommand

**Framework:** Immersive Media Support  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

A command type for opacity fading environment backdrops during immersive media playback.

## Declaration

```swift
struct FadeEnvironmentCommand
```

<a id="overview"></a>

## Overview

Opacity fade is used to apply requested opacity to the AIV environment backdrops. Fade environment commands can be absolute time based or offset based. If fade commands are absolute time based, then property time dictates the time it needs to start executing and keep fading until the duration property value. On the other hand if they are offset based, then offset property dictates the fade percentage from the start time of the fade command till the duration of the fade. If the fade has to start at time 0.0 second of the playback for duration of 1.0 seconds and if the media FPS is 90, then first frame should be accompanied with presentation metadata with fade command which has 0.011 as offset. Second frame should have fade command with offset 0.022 and so on. For the 90th frame, we should receive offset 1.0.

## Topics

### Initializers

- [init(from:)](fadeenvironmentcommand/init%28from_%29.md): Creates a `FadeEnvironmentCommand` instance from the specified decoder.
- [init(id:time:duration:direction:opacity:offset:)](fadeenvironmentcommand/init%28id_time_duration_direction_opacity_offset_%29.md): Creates a fade environment command instance.

### Instance Properties

- [direction](fadeenvironmentcommand/direction.md): Fade direction for this command instance.
- [duration](fadeenvironmentcommand/duration.md): The duration of the command - this can be .zero if the command has no duration
- [id](fadeenvironmentcommand/id.md): A unique command ID for the immersive media file.
- [offset](fadeenvironmentcommand/offset.md): The offset from the start time of this command.
- [opacity](fadeenvironmentcommand/opacity.md): The fade opacity value between `0.0` to `1.0`. This value represents the target opacity of the environment backdrops during playback after fading completes.
- [time](fadeenvironmentcommand/time.md): The time this command starts during playback.

### Instance Methods

- [encode(to:)](fadeenvironmentcommand/encode%28to_%29.md): Encodes an instance of fade environment command.

### Enumerations

- [FadeEnvironmentCommand.FadeDirection](fadeenvironmentcommand/fadedirection.md): A value that represents the direction of the fade environment command.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Presentation commands

- [PresentationCommand](presentationcommand.md): A set of properties that define the interface for a presentation command.
- [FadeCommand](fadecommand.md): A command type for color fading during immersive media playback.
- [SetCameraCommand](setcameracommand.md): A command type for immersive camera switching during playback.
- [ShotFlopCommand](shotflopcommand.md): A command type to flip the video frames horizontally (mirrored horizontally) during playback for the duration of the command.
- [ShotFlipCommand](shotflipcommand.md): A command type to flip the video frames vertically during playback for the duration of the command.
- [PresentationDescriptor](presentationdescriptor.md): A structure that represents dynamic metadata used during playback or when outputting the metadata track for an immersive video file.
- [PresentationDescriptorReader](presentationdescriptorreader.md): An object that provides the functionality required to understand and process immersive presentation commands.
