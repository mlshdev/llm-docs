> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/remotemediasessionextension/session(_:)](https://developer.apple.com/documentation/nowplaying/remotemediasessionextension/session(_:))

# session(\_:)

**Framework:** Now Playing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iOS App Extension 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a session configured with the specified attributes.

## Declaration

```swift
@MainActor func session(_ attributes: Self.Attributes) async throws -> Self.Session
```

## Parameters

- `attributes`: The attributes that configure the session.

<a id="return-value"></a>

## Return Value

A configured remote session.

## Mentioned In

- [Publishing remote media sessions](../publishing-remote-media-sessions.md)

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if a session can’t be created.
