> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediadevice/capability/absolutevolume(_:onchange:)](https://developer.apple.com/documentation/nowplaying/mediadevice/capability/absolutevolume(_:onchange:))

# absoluteVolume(\_:onChange:)

**Framework:** Now Playing  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iOS App Extension 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Returns a capability that lets the device be set to a specific volume level.

## Declaration

```swift
static func absoluteVolume(_ currentLevel: Float, onChange: @escaping @Sendable (Float) async throws -> Void) -> MediaDevice.Capability
```

## Parameters

- `currentLevel`: The current volume level of the device, in the range `0.0` to `1.0`. The system uses this to display the device’s current volume in the interface.
- `onChange`: An async closure the system calls when the user requests a new volume level. The closure receives the requested new level in the range `0.0` to `1.0`.

## Mentioned In

- [Publishing remote media sessions](../../publishing-remote-media-sessions.md)

<a id="discussion"></a>

## Discussion

Use this when the device supports setting an absolute volume level in the range `0.0` to `1.0`, where `0` represents silence and `1.0` represents the maximum volume level.
