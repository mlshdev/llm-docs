> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryui/dddevicepickerviewcontroller/init(browsedescriptor:parameters:access:)](https://developer.apple.com/documentation/devicediscoveryui/dddevicepickerviewcontroller/init(browsedescriptor:parameters:access:))

# init(browseDescriptor:parameters:access:)

**Framework:** DeviceDiscoveryUI  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a view controller with the parameters and access level you specify that displays the available devices on network.

## Declaration

```swift
@MainActor @preconcurrency convenience init?(browseDescriptor: NWBrowser.Descriptor, parameters: NWParameters? = nil, access: DDDevicePairingAccess = .default)
```

## Parameters

- `browseDescriptor`: A descriptor for your application service. To create an application service descriptor, call `NWBrowser.Descriptor.applicationService(name:options:)` and provide a name for the service.
- `parameters`: Parameters for your network connection. Use [applicationService](../../network/nwparameters/applicationservice.md) to create a default set of parameters that create an encrypted connection with the other devices. You can also add `a` [NWProtocolFramer](../../network/nwprotocolframer.md) to provide an application-level messaging protocol.
- `access`: The [DDDevicePairingAccess](../dddevicepairingaccess.md) access level, the default is `DDDevicePairingAccess.default`.

## See Also

### Creating device picker view controllers

- [init(browseDescriptor:parameters:)](init%28browsedescriptor_parameters_%29.md): Creates a view controller that displays the available devices on your local network.
