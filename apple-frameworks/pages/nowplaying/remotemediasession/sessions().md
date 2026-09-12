> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/remotemediasession/sessions()](https://developer.apple.com/documentation/nowplaying/remotemediasession/sessions())

# sessions()

**Framework:** Now Playing  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Returns all registered remote sessions.

## Declaration

```swift
@MainActor static func sessions() async throws -> [RemoteMediaSession<Attributes>]
```

<a id="return-value"></a>

## Return Value

An array of all remote sessions currently registered with the system.

<a id="discussion"></a>

## Discussion

> **Throws**

> [RemoteMediaSessionError.internalFailure](../remotemediasessionerror/internalfailure.md) if the system couldn’t enumerate registered sessions.
