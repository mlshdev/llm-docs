> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/remotemediasession/start(attributes:)](https://developer.apple.com/documentation/nowplaying/remotemediasession/start(attributes:))

# start(attributes:)

**Framework:** Now Playing  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Starts a new remote session with the specified attributes.

## Declaration

```swift
@MainActor static func start(attributes: Attributes) async throws -> RemoteMediaSession<Attributes>
```

## Parameters

- `attributes`: The attributes that configure the session.

<a id="return-value"></a>

## Return Value

A remote session instance.

<a id="discussion"></a>

## Discussion

This method registers a session. The attributes are encoded and sent to your app extension, which creates the actual session using your [RemoteMediaSessionExtension](../remotemediasessionextension.md) conformance.

> **Throws**

> [RemoteMediaSessionError.internalFailure](../remotemediasessionerror/internalfailure.md) if the system couldn’t register the session. Also throws an encoding error if `attributes` isn’t encodable.
