> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/immersivemediasupport/shotflopcommand/init(id:time:duration:offset:)

# init(id:time:duration:offset:)

**Framework:** Immersive Media Support  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

Creates a command instance for a certain time, duration and offset.

## Declaration

```swift
init(id: Int, time: CMTime, duration: CMTime, offset: CMTime? = nil)
```

## Parameters

- `id`: The unique ID of this command.
- `time`: The time for this command to start during playback.
- `duration`: The duration of this command during playback.
- `offset`: The offset from the start time of this command.
