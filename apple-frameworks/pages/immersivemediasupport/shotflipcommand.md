> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/shotflipcommand](https://developer.apple.com/documentation/immersivemediasupport/shotflipcommand)

# ShotFlipCommand

**Framework:** Immersive Media Support  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A command type to flip the video frames vertically during playback for the duration of the command.

## Declaration

```swift
struct ShotFlipCommand
```

<a id="overview"></a>

## Overview

> **Note**

> The renderer only honors this command on visionOS 27, macOS 27, or later. Earlier runtimes ignore it during playback.

## Topics

### Initializers

- [init(from:)](shotflipcommand/init%28from_%29.md)
- [init(id:time:duration:offset:)](shotflipcommand/init%28id_time_duration_offset_%29.md): Creates a command instance for a certain time, duration and offset.

### Instance Properties

- [duration](shotflipcommand/duration.md): The duration of the command.
- [id](shotflipcommand/id.md): A unique command ID for the immersive media file.
- [offset](shotflipcommand/offset.md): The offset from the start time of this command.
- [time](shotflipcommand/time.md): The time this command starts during playback.

### Instance Methods

- [encode(to:)](shotflipcommand/encode%28to_%29.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Presentation commands

- [PresentationCommand](presentationcommand.md): A set of properties that define the interface for a presentation command.
- [FadeCommand](fadecommand.md): A command type for color fading during immersive media playback.
- [FadeEnvironmentCommand](fadeenvironmentcommand.md): A command type for opacity fading environment backdrops during immersive media playback.
- [SetCameraCommand](setcameracommand.md): A command type for immersive camera switching during playback.
- [ShotFlopCommand](shotflopcommand.md): A command type to flip the video frames horizontally (mirrored horizontally) during playback for the duration of the command.
- [PresentationDescriptor](presentationdescriptor.md): A structure that represents dynamic metadata used during playback or when outputting the metadata track for an immersive video file.
- [PresentationDescriptorReader](presentationdescriptorreader.md): An object that provides the functionality required to understand and process immersive presentation commands.
