> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddevicerequest/setuppayload](https://developer.apple.com/documentation/mattersupport/matteradddevicerequest/setuppayload)

# setupPayload

**Framework:** MatterSupport  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

The payload to use for Matter device setup.

## Declaration

```swift
var setupPayload: MTRSetupPayload?
```

<a id="Overview"></a>

## Overview

This is an optional field for a setup to be able to complete. If this is provided, no QR-Code selection occurs. Use of this field requires an entitlement in the application ([com.apple.developer.matter.allow-setup-payload](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_matter_allow-setup-payload)).

## See Also

### Setting up the request

- [MatterAddDeviceRequest.Home](home.md): The representation of a home that appears in the picker during device setup.
- [MatterAddDeviceRequest.Room](room.md): The representation of a room that appears in the picker during device setup.
- [MatterAddDeviceRequest.Topology](topology-swift.struct.md): Information describing the properties of the ecosystem.
- [topology](topology-swift.property.md): A configuration object representing the topology of the initiating ecosystem.
