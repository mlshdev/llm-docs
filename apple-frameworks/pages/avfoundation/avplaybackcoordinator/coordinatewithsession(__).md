> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplaybackcoordinator/coordinatewithsession(_:)](https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator/coordinatewithsession(_:))

# coordinateWithSession(\_:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS

Begins coordination of a player with a group session.

## Declaration

```swift
func coordinateWithSession<T>(_ session: GroupSession<T>) where T : GroupActivity
```

## Parameters

- `session`: The group session with which to coordinate playback.
