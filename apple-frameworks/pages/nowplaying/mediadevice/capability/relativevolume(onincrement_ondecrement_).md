> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediadevice/capability/relativevolume(onincrement:ondecrement:)](https://developer.apple.com/documentation/nowplaying/mediadevice/capability/relativevolume(onincrement:ondecrement:))

# relativeVolume(onIncrement:onDecrement:)

**Framework:** Now Playing  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iOS App Extension 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Returns a capability that lets the device increase or decrease its volume incrementally.

## Declaration

```swift
static func relativeVolume(onIncrement: @escaping @Sendable () async throws -> Void, onDecrement: @escaping @Sendable () async throws -> Void) -> MediaDevice.Capability
```

## Parameters

- `onIncrement`: An async closure the system calls to step the volume up by one increment.
- `onDecrement`: An async closure the system calls to step the volume down by one increment.

## Mentioned In

- [Publishing remote media sessions](../../publishing-remote-media-sessions.md)

<a id="discussion"></a>

## Discussion

Use this when the device supports stepwise volume changes but doesn’t expose an absolute level.
