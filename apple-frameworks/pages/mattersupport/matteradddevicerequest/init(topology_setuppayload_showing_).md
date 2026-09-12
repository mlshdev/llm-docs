> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddevicerequest/init(topology:setuppayload:showing:)](https://developer.apple.com/documentation/mattersupport/matteradddevicerequest/init(topology:setuppayload:showing:))

# init(topology:setupPayload:showing:)

**Framework:** MatterSupport  
**Kind:** Initializer  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

Create the request.

## Declaration

```swift
init(topology: MatterAddDeviceRequest.Topology, setupPayload: MTRSetupPayload? = nil, showing deviceCriteria: MatterAddDeviceRequest.DeviceCriteria = .allDevices)
```

## Parameters

- `topology`: The topology of the home.
- `setupPayload`: The setup payload.

## See Also

### Creating the request

- [init(from:)](init%28from_%29.md): Create the request from a decoder.
- [init(topology:setupPayload:showing:shouldScanNetworks:)](init%28topology_setuppayload_showing_shouldscannetworks_%29.md): Create the request with an optional network scan.
