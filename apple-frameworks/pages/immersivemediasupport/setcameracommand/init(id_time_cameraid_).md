> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/setcameracommand/init(id:time:cameraid:)](https://developer.apple.com/documentation/immersivemediasupport/setcameracommand/init(id:time:cameraid:))

# init(id:time:cameraID:)

**Framework:** Immersive Media Support  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

Creates a command with a specific ID, cameraID and start time.

## Declaration

```swift
init(id: Int, time: CMTime, cameraID: String)
```

## Parameters

- `id`: The unique ID of this command.
- `time`: The time for this command to start during playback.
- `cameraID`: The `cameraID` associated with this command.
