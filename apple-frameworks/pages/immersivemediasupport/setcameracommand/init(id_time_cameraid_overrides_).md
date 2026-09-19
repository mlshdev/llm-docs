> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/immersivemediasupport/setcameracommand/init(id:time:cameraid:overrides:)

# init(id:time:cameraID:overrides:)

**Framework:** Immersive Media Support  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a command with a specific ID, cameraID, start time and override parameters.

## Declaration

```swift
init(id: Int, time: CMTime, cameraID: String, overrides: SetCameraCommand.Overrides?)
```

## Parameters

- `id`: The unique ID of this command.
- `time`: The time for this command to start during playback.
- `cameraID`: The `cameraID` associated with this command.
- `overrides`: The override parameters for the camera
