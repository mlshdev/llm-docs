> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/presentationdescriptorreader](https://developer.apple.com/documentation/immersivemediasupport/presentationdescriptorreader)

# PresentationDescriptorReader

**Framework:** Immersive Media Support  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

An object that provides the functionality required to understand and process immersive presentation commands.

## Declaration

```swift
class PresentationDescriptorReader
```

<a id="overview"></a>

## Overview

Immersive commands are packed as an array of [PresentationCommand](presentationcommand.md) objects contained in a [PresentationDescriptor](presentationdescriptor.md). This object is used during an Immersive Video playback as a source of rendering values its published variables, or the application can pull presentation commands by time to write an output metadata track.

## Topics

### Initializers

- [init(presentationDescriptor:isSideloaded:)](presentationdescriptorreader/init%28presentationdescriptor_issideloaded_%29.md): Initializes an instance that contains the specified presentation descriptor.

### Instance Properties

- [cameraID](presentationdescriptorreader/cameraid.md): The current camera ID string of the immersive camera to use when rendering playback for the PTS specified in the last call to the update method.
- [colorFade](presentationdescriptorreader/colorfade.md): The current fade color for color fading of the video frames during playback for the PTS specified in the last call to the update method.
- [colorFadeOpacity](presentationdescriptorreader/colorfadeopacity.md): The current color fade opacity of the video frames during playback for the PTS specified in the last call to the update method.
- [environmentFadeOpacity](presentationdescriptorreader/environmentfadeopacity.md): The current opacity of the environment backdrops during playback for the PTS specified in the last call to the update method.
- [isShotFlopped](presentationdescriptorreader/isshotflopped.md): A Boolean value that indicates whether to horizontally flip the video frame for the PTS specified in the last call to the update method.
- [isSideloaded](presentationdescriptorreader/issideloaded.md): A Boolean value that indicates whether the reader input is sideloaded or is it set during playback.
- [presentationCommands](presentationdescriptorreader/presentationcommands.md): The active presentation commands for the PTS specified in the last call to the update method.
- [presentationDescriptor](presentationdescriptorreader/presentationdescriptor.md): The presentation descriptor that contains the presentation commands to process.
- [cameraOverrides](presentationdescriptorreader/cameraoverrides.md): The current camera params which would override static metadata to use when rendering playback for the PTS specified in the last call to the update method.
- [isShotFlipped](presentationdescriptorreader/isshotflipped.md): A Boolean value that indicates whether to vertically flip the video frame for the PTS specified in the last call to the update method.

### Instance Methods

- [metadataItem(frameTimeRange:)](presentationdescriptorreader/metadataitem%28frametimerange_%29.md): Builds a metadata item containing the presentation commands active at the start of the specified frame’s time range.
- [metadataTrack(timeRange:)](presentationdescriptorreader/metadatatrack%28timerange_%29.md): Retrieves all metadata items to write to an output metadata track, optionally clipped to a segment time range. Pass a `timeRange` to produce one item per segment (e.g. per IDR group or per fixed-length interval).
- [outputPresentationCommands(for:)](presentationdescriptorreader/outputpresentationcommands%28for_%29.md): This function returns all presentation commands to be muxed into an MOV during an `AVAssetWriter` session. Don’t use this function for playback rendering.
- [processPresentationCommands(for:)](presentationdescriptorreader/processpresentationcommands%28for_%29.md): Processes the commands and updates the publishers exported by this reader when called by the application (e.g. render/playback loop)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
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
- [PresentationDescriptor](presentationdescriptor.md): A structure that represents dynamic metadata used during playback or when outputting the metadata track for an immersive video file.
