> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/presentationdescriptor](https://developer.apple.com/documentation/immersivemediasupport/presentationdescriptor)

# PresentationDescriptor

**Framework:** Immersive Media Support  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

A structure that represents dynamic metadata used during playback or when outputting the metadata track for an immersive video file.

## Declaration

```swift
struct PresentationDescriptor
```

## Topics

### Initializers

- [init(commands:)](presentationdescriptor/init%28commands_%29.md): Creates an instance that contains the commands specified in the given array.
- [init(duration:commands:)](presentationdescriptor/init%28duration_commands_%29.md): Creates an instance that contains the commands specified in the array:

### Instance Properties

- [commands](presentationdescriptor/commands.md): An array of presentation commands.
- [duration](presentationdescriptor/duration.md): The total duration of the presentation commands.

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
- [ShotFlipCommand](shotflipcommand.md): A command type to flip the video frames vertically during playback for the duration of the command.
- [PresentationDescriptorReader](presentationdescriptorreader.md): An object that provides the functionality required to understand and process immersive presentation commands.
