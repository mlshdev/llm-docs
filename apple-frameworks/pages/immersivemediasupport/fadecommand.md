> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/fadecommand](https://developer.apple.com/documentation/immersivemediasupport/fadecommand)

# FadeCommand

**Framework:** Immersive Media Support  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

A command type for color fading during immersive media playback.

## Declaration

```swift
struct FadeCommand
```

<a id="overview"></a>

## Overview

Color fades are used to either fading in into the video frame from the requested color or fading out of the video frame to the requested color. The fade commands are usually used for fading in at the start of the playback and fading out at the end of the playback. These commands are also used during immersive camera view switches during the playback.

Fade commands can be absolute time based or offset based. If fade commands are absolute time based, then property time dictates the time it needs to start executing and keep fading until the duration property value. On the other hand if they are offset based, then offset property dictates the fade percentage from the start time of the fade command till the duration of the fade. If the fade has to start at time 0.0 second of the playback for duration of 1.0 seconds and if the media FPS is 90, then first frame should be accompanied with presentation metadata with fade command which has 0.011 as offset. Second frame should have fade command with offset 0.022 and so on. For the 90th frame, we should receive offset 1.0.

## Topics

### Initializers

- [init(from:)](fadecommand/init%28from_%29.md)
- [init(id:time:duration:direction:color:offset:)](fadecommand/init%28id_time_duration_direction_color_offset_%29.md): Initializes a color fade command.

### Instance Properties

- [color](fadecommand/color.md): The fade color value ranging from `0.0` to `1.0` for each color channel representing RGB color space. If the color is set to black, and the direction is `in`, then it fades from black to the video frame.
- [direction](fadecommand/direction.md): Fade direction for this command instance.
- [duration](fadecommand/duration.md): The duration of the command.
- [id](fadecommand/id.md): A unique command ID for the entire immersive media file.
- [offset](fadecommand/offset.md): The offset from the start time of this command.
- [time](fadecommand/time.md): The time this command starts during playback.

### Instance Methods

- [encode(to:)](fadecommand/encode%28to_%29.md)

### Enumerations

- [FadeCommand.FadeDirection](fadecommand/fadedirection.md): A value that represents the direction of the fade command.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Presentation commands

- [PresentationCommand](presentationcommand.md): A set of properties that define the interface for a presentation command.
- [FadeEnvironmentCommand](fadeenvironmentcommand.md): A command type for opacity fading environment backdrops during immersive media playback.
- [SetCameraCommand](setcameracommand.md): A command type for immersive camera switching during playback.
- [ShotFlopCommand](shotflopcommand.md): A command type to flip the video frames horizontally (mirrored horizontally) during playback for the duration of the command.
- [ShotFlipCommand](shotflipcommand.md): A command type to flip the video frames vertically during playback for the duration of the command.
- [PresentationDescriptor](presentationdescriptor.md): A structure that represents dynamic metadata used during playback or when outputting the metadata track for an immersive video file.
- [PresentationDescriptorReader](presentationdescriptorreader.md): An object that provides the functionality required to understand and process immersive presentation commands.
