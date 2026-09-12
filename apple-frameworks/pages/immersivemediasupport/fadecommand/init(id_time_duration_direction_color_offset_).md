> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/fadecommand/init(id:time:duration:direction:color:offset:)](https://developer.apple.com/documentation/immersivemediasupport/fadecommand/init(id:time:duration:direction:color:offset:))

# init(id:time:duration:direction:color:offset:)

**Framework:** Immersive Media Support  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

Initializes a color fade command.

## Declaration

```swift
init(id: Int, time: CMTime, duration: CMTime, direction: FadeCommand.FadeDirection, color: simd_float3, offset: CMTime? = nil)
```

## Parameters

- `id`: The unique ID of this command.
- `time`: The time this command starts during playback.
- `duration`: The duration of the command. This can be `.zero` if the command has no duration.
- `direction`: The fade direction for this command instance.
- `color`: The fade color.
- `offset`: The offset from the start time of this command. This parameter is usually unused and let in control of a `PresentationDescriptorReader`.
