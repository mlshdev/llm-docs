> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesession/configuration](https://developer.apple.com/documentation/roomplan/roomcapturesession/configuration)

# RoomCaptureSession.Configuration

**Framework:** RoomPlan  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Settings that configure the room-scanning process.

## Declaration

```swift
struct Configuration
```

<a id="overview"></a>

## Overview

The `configuration` argument of a room-capture session’s  [run(configuration:)](run%28configuration_%29.md) function is of this type.

## Topics

### Creating a configuration

- [init()](configuration/init%28%29.md): Creates a configuration.

### Configuring a session

- [isCoachingEnabled](configuration/iscoachingenabled.md): An option that indicates that the session periodically provides user instructions.

## See Also

### Controlling a session

- [run(configuration:)](run%28configuration_%29.md): Starts a room-capture session with the specified configuration.
- [stop()](stop%28%29.md): Stops the room-capture session.
- [stop(pauseARSession:)](stop%28pausearsession_%29.md): Stops the room-capture session and indicates whether the app pauses the underlying AR session.
