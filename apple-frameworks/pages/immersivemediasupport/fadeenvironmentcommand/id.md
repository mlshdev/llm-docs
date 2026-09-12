> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/fadeenvironmentcommand/id](https://developer.apple.com/documentation/immersivemediasupport/fadeenvironmentcommand/id)

# id

**Framework:** Immersive Media Support  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

A unique command ID for the immersive media file.

## Declaration

```swift
var id: Int { get }
```

## See Also

### Instance Properties

- [direction](direction.md): Fade direction for this command instance.
- [duration](duration.md): The duration of the command - this can be .zero if the command has no duration
- [offset](offset.md): The offset from the start time of this command.
- [opacity](opacity.md): The fade opacity value between `0.0` to `1.0`. This value represents the target opacity of the environment backdrops during playback after fading completes.
- [time](time.md): The time this command starts during playback.
