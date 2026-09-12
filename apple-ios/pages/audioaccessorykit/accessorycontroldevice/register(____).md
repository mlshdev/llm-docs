> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/audioaccessorykit/accessorycontroldevice/register(_:_:)](https://developer.apple.com/documentation/audioaccessorykit/accessorycontroldevice/register(_:_:))

# register(\_:\_:)

**Framework:** AudioAccessoryKit  
**Kind:** Type Method  
**Availability:** iOS 26.4+

Registers the audio accessory with the system and activates its configured capabilities.

## Declaration

```swift
nonisolated(nonsending) static func register(_ accessory: ASAccessory, _ configuration: AccessoryControlDevice.Configuration) async throws
```

## Parameters

- `accessory`: The accessory to register.
- `configuration`: The configuration for the device.

<a id="discussion"></a>

## Discussion

> **Important**

> Call this method only from your container app.

To activate audio features like automatic switching, call this method after pairing your accessory using AccessorySetupKit.

This method throws an error if registration fails.
