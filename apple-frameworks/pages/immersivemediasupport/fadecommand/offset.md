> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/fadecommand/offset](https://developer.apple.com/documentation/immersivemediasupport/fadecommand/offset)

# offset

**Framework:** Immersive Media Support  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

The offset from the start time of this command.

## Declaration

```swift
var offset: CMTime?
```

## See Also

### Instance Properties

- [color](color.md): The fade color value ranging from `0.0` to `1.0` for each color channel representing RGB color space. If the color is set to black, and the direction is `in`, then it fades from black to the video frame.
- [direction](direction.md): Fade direction for this command instance.
- [duration](duration.md): The duration of the command.
- [id](id.md): A unique command ID for the entire immersive media file.
- [time](time.md): The time this command starts during playback.
