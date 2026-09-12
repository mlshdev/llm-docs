> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/setcameracommand](https://developer.apple.com/documentation/immersivemediasupport/setcameracommand)

# SetCameraCommand

**Framework:** Immersive Media Support  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

A command type for immersive camera switching during playback.

## Declaration

```swift
struct SetCameraCommand
```

<a id="overview"></a>

## Overview

The property `cameraID` has been added to this type to hold camera identifier string, so that we can switch from one immersive camera to another using these camera identifiers.

## Topics

### Initializers

- [init(from:)](setcameracommand/init%28from_%29.md)
- [init(id:time:cameraID:)](setcameracommand/init%28id_time_cameraid_%29.md): Creates a command with a specific ID, cameraID and start time.
- [init(id:time:cameraID:overrides:)](setcameracommand/init%28id_time_cameraid_overrides_%29.md): Creates a command with a specific ID, cameraID, start time and override parameters.

### Instance Properties

- [cameraID](setcameracommand/cameraid.md): The camera ID to use for the duration of this command.
- [duration](setcameracommand/duration.md): The duration of the command.
- [id](setcameracommand/id.md): A unique command ID for the entire immersive media file.
- [offset](setcameracommand/offset.md): Reserved for later use.
- [time](setcameracommand/time.md): The time this command starts during playback.
- [overrides](setcameracommand/overrides-swift.property.md): The override parameters for the camera.

### Instance Methods

- [encode(to:)](setcameracommand/encode%28to_%29.md)

### Structures

- [SetCameraCommand.Overrides](setcameracommand/overrides-swift.struct.md): Override camera/venue params

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Presentation commands

- [PresentationCommand](presentationcommand.md): A set of properties that define the interface for a presentation command.
- [FadeCommand](fadecommand.md): A command type for color fading during immersive media playback.
- [FadeEnvironmentCommand](fadeenvironmentcommand.md): A command type for opacity fading environment backdrops during immersive media playback.
- [ShotFlopCommand](shotflopcommand.md): A command type to flip the video frames horizontally (mirrored horizontally) during playback for the duration of the command.
- [ShotFlipCommand](shotflipcommand.md): A command type to flip the video frames vertically during playback for the duration of the command.
- [PresentationDescriptor](presentationdescriptor.md): A structure that represents dynamic metadata used during playback or when outputting the metadata track for an immersive video file.
- [PresentationDescriptorReader](presentationdescriptorreader.md): An object that provides the functionality required to understand and process immersive presentation commands.
