> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddevicerequest/init(topology:setuppayload:showing:shouldscannetworks:)](https://developer.apple.com/documentation/mattersupport/matteradddevicerequest/init(topology:setuppayload:showing:shouldscannetworks:))

# init(topology:setupPayload:showing:shouldScanNetworks:)

**Framework:** MatterSupport  
**Kind:** Initializer  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 14.0+ · visionOS

Create the request with an optional network scan.

## Declaration

```swift
init(topology: MatterAddDeviceRequest.Topology, setupPayload: MTRSetupPayload? = nil, showing deviceCriteria: MatterAddDeviceRequest.DeviceCriteria = .allDevices, shouldScanNetworks: Bool = true)
```

## Parameters

- `topology`: The topology of the home.
- `setupPayload`: The setup payload.
- `shouldScanNetworks`: A flag that determines whether to request a network scan.

## See Also

### Creating the request

- [init(from:)](init%28from_%29.md): Create the request from a decoder.
- [init(topology:setupPayload:showing:)](init%28topology_setuppayload_showing_%29.md): Create the request.
