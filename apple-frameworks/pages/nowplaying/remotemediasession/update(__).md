> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/remotemediasession/update(_:)](https://developer.apple.com/documentation/nowplaying/remotemediasession/update(_:))

# update(\_:)

**Framework:** Now Playing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Updates the session with new attributes.

## Declaration

```swift
@MainActor func update(_ attributes: Attributes) async throws
```

## Parameters

- `attributes`: The updated attributes for this session.

<a id="discussion"></a>

## Discussion

When session attributes change, call this method to send the updated attributes to your app extension through the [update(\_:)](../remotemediasessionrepresentable/update%28__%29.md) method.

> **Throws**

> [RemoteMediaSessionError.invalidAttributes](../remotemediasessionerror/invalidattributes.md) if `attributes.id` doesn’t match this session’s id. [RemoteMediaSessionError.internalFailure](../remotemediasessionerror/internalfailure.md) if the system couldn’t deliver the update.
