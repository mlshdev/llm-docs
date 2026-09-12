> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesession/run(configuration:)](https://developer.apple.com/documentation/roomplan/roomcapturesession/run(configuration:))

# run(configuration:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Starts a room-capture session with the specified configuration.

## Declaration

```swift
func run(configuration: RoomCaptureSession.Configuration)
```

## Parameters

- `configuration`: An object that customizes the scanning experience.

## Mentioned In

- [Scanning the rooms of a single structure](../scanning-the-rooms-of-a-single-structure.md)

## See Also

### Controlling a session

- [RoomCaptureSession.Configuration](configuration.md): Settings that configure the room-scanning process.
- [stop()](stop%28%29.md): Stops the room-capture session.
- [stop(pauseARSession:)](stop%28pausearsession_%29.md): Stops the room-capture session and indicates whether the app pauses the underlying AR session.
