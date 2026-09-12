> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesession/stop(pausearsession:)](https://developer.apple.com/documentation/roomplan/roomcapturesession/stop(pausearsession:))

# stop(pauseARSession:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Stops the room-capture session and indicates whether the app pauses the underlying AR session.

## Declaration

```swift
func stop(pauseARSession: Bool = true)
```

## Parameters

- `pauseARSession`: A Boolean value that indicates whether the framework automatically pauses the underlying AR session by calling [pause()](https://developer.apple.com/documentation/arkit/arsession/pause%28%29). The default value is `true`. If you pass `false`, the AR session continues to run.

## Mentioned In

- [Scanning the rooms of a single structure](../scanning-the-rooms-of-a-single-structure.md)

## See Also

### Controlling a session

- [run(configuration:)](run%28configuration_%29.md): Starts a room-capture session with the specified configuration.
- [RoomCaptureSession.Configuration](configuration.md): Settings that configure the room-scanning process.
- [stop()](stop%28%29.md): Stops the room-capture session.
