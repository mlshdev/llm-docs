> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceroutingmanager/routingmanager(for:)](https://developer.apple.com/documentation/mediadevice/mediadeviceroutingmanager/routingmanager(for:))

# routingManager(for:)

**Framework:** Media Device  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Returns the shared routing manager instance for a media device extension.

## Declaration

```swift
@MainActor static func routingManager(for extension: any MediaDeviceExtension) -> MediaDeviceRoutingManager
```

## Parameters

- `extension`: The extension to obtain the routing manager for.

<a id="return-value"></a>

## Return Value

The shared [MediaDeviceRoutingManager](../mediadeviceroutingmanager.md) instance.

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)

<a id="discussion"></a>

## Discussion

Use this method to obtain the shared [MediaDeviceRoutingManager](../mediadeviceroutingmanager.md) instance for your extension. The routing manager is how your extension reports device discovery, state changes, and playback events to the system.

> **Note**

> The routing manager is a shared instance. Calling this method multiple times for a given extension returns the same [MediaDeviceRoutingManager](../mediadeviceroutingmanager.md) instance.
