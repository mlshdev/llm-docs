> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/presentationcommand](https://developer.apple.com/documentation/immersivemediasupport/presentationcommand)

# PresentationCommand

**Framework:** Immersive Media Support  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

A set of properties that define the interface for a presentation command.

## Declaration

```swift
enum PresentationCommand
```

<a id="overview"></a>

## Overview

These are commands that dictate part of the presentation of the video frames during immersive media playback. These commands have all the necessary properties like command identifier, command type, command time in seconds (when it needs to be processed), command duration in seconds, command offset from the start of the command time (if they are offset based), a flag to indicate if commands are offset based or not, command argument list, which might carry additional properties based on the type of the presentation command.

## Topics

### Instance Properties

- [duration](presentationcommand/duration.md)
- [id](presentationcommand/id.md)
- [offset](presentationcommand/offset.md)
- [time](presentationcommand/time.md)

### Enumeration Cases

- [PresentationCommand.fade(\_:)](presentationcommand/fade%28__%29.md): A value that represents a command that adds fade-in and fade-out effects during scene transitions.
- [PresentationCommand.fadeEnvironment(\_:)](presentationcommand/fadeenvironment%28__%29.md): A value that represents a command that adds fade-in and fade-out effects to backdrop transitions.
- [PresentationCommand.setCamera(\_:)](presentationcommand/setcamera%28__%29.md): A value that represents a command that specifies the camera ID for a specific frame during playback.
- [PresentationCommand.shotFlip(\_:)](presentationcommand/shotflip%28__%29.md): A value that represents a command that mirrors a whole frame vertically for the duration of the command.
- [PresentationCommand.shotFlop(\_:)](presentationcommand/shotflop%28__%29.md): A value that represents a command that mirrors a whole frame horizontally for the duration of the command.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Presentation commands

- [FadeCommand](fadecommand.md): A command type for color fading during immersive media playback.
- [FadeEnvironmentCommand](fadeenvironmentcommand.md): A command type for opacity fading environment backdrops during immersive media playback.
- [SetCameraCommand](setcameracommand.md): A command type for immersive camera switching during playback.
- [ShotFlopCommand](shotflopcommand.md): A command type to flip the video frames horizontally (mirrored horizontally) during playback for the duration of the command.
- [ShotFlipCommand](shotflipcommand.md): A command type to flip the video frames vertically during playback for the duration of the command.
- [PresentationDescriptor](presentationdescriptor.md): A structure that represents dynamic metadata used during playback or when outputting the metadata track for an immersive video file.
- [PresentationDescriptorReader](presentationdescriptorreader.md): An object that provides the functionality required to understand and process immersive presentation commands.
