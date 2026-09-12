> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/presentationdescriptorreader/environmentfadeopacity](https://developer.apple.com/documentation/immersivemediasupport/presentationdescriptorreader/environmentfadeopacity)

# environmentFadeOpacity

**Framework:** Immersive Media Support  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

The current opacity of the environment backdrops during playback for the PTS specified in the last call to the update method.

## Declaration

```swift
var environmentFadeOpacity: Float { get }
```

## See Also

### Instance Properties

- [cameraID](cameraid.md): The current camera ID string of the immersive camera to use when rendering playback for the PTS specified in the last call to the update method.
- [colorFade](colorfade.md): The current fade color for color fading of the video frames during playback for the PTS specified in the last call to the update method.
- [colorFadeOpacity](colorfadeopacity.md): The current color fade opacity of the video frames during playback for the PTS specified in the last call to the update method.
- [isShotFlopped](isshotflopped.md): A Boolean value that indicates whether to horizontally flip the video frame for the PTS specified in the last call to the update method.
- [isSideloaded](issideloaded.md): A Boolean value that indicates whether the reader input is sideloaded or is it set during playback.
- [presentationCommands](presentationcommands.md): The active presentation commands for the PTS specified in the last call to the update method.
- [presentationDescriptor](presentationdescriptor.md): The presentation descriptor that contains the presentation commands to process.
