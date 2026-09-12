> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroutesession-gp78/stop()](https://developer.apple.com/documentation/avsystemrouting/avsystemroutesession-gp78/stop())

# stop()

**Framework:** AVSystemRouting  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Stops the session and terminates media playback on the remote device.

## Declaration

```swift
final func stop()
```

## Mentioned In

- [Routing and streaming media to remote devices](../routing-and-streaming-media-to-remote-devices.md)

<a id="discussion"></a>

## Discussion

Call this function to end the playback session and clean up resources on both the local and remote devices. After calling this function, the session is terminated and further calls to session functions will have no effect.

The system automatically handles disconnection and cleanup of the remote app or player. If you need to start playback again, create a new [AVSystemRouteSession](../avsystemroutesession-gp78.md) instance.

> **Note**

> Always call this function when playback ends to ensure proper resource cleanup and to notify the remote device that the session has concluded.
