> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroute-9kkj3/removesession:](https://developer.apple.com/documentation/avsystemrouting/avsystemroute-9kkj3/removesession:)

# removeSession:

**Interface language:** Objective-C

**Framework:** AVSystemRouting  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Removes a session from the active route.

## Declaration

```objectivec
- (void) removeSession:(AVSystemRouteSession *) session;
```

## Parameters

- `session`: The session to remove from this route. If the session is not currently associated with this route, this method has no effect.

<a id="discussion"></a>

## Discussion

Call this method to unregister a session from the route when playback ends or when you no longer need the session. Removing a session stops any ongoing communication associated with that session and releases system resources.

If the session is currently active, this method stops the session before removing it.

> **Important**

> Always remove sessions when they are no longer needed to ensure proper cleanup of system resources and network connections. To start new playback after removing a session, create a new [AVSystemRouteSession](../avsystemroutesession-5i6j6.md) instance.
