> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediadevice/init(id:name:type:capabilities:)](https://developer.apple.com/documentation/nowplaying/mediadevice/init(id:name:type:capabilities:))

# init(id:name:type:capabilities:)

**Framework:** Now Playing  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iOS App Extension 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a media device with the specified identifier, name, type, and capabilities.

## Declaration

```swift
init(id: String, name: String, type: MediaDevice.DeviceType, capabilities: [MediaDevice.Capability])
```

## Parameters

- `id`: A stable, unique identifier for the device.
- `name`: The human-readable name the system displays for the device.
- `type`: The kind of device that plays media.
- `capabilities`: The capabilities the device supports. Each value in the array describes one operation the device supports, built from a [MediaDevice.Capability](capability.md), such as [absoluteVolume(\_:onChange:)](capability/absolutevolume%28__onchange_%29.md) or [relativeVolume(onIncrement:onDecrement:)](capability/relativevolume%28onincrement_ondecrement_%29.md). Pass an empty array if the device exposes no controllable capabilities.

<a id="discussion"></a>

## Discussion

> **Note**

> `id` should be a stable identifier for the device that works across sessions.
