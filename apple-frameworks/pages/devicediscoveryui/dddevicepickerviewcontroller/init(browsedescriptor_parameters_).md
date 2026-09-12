> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryui/dddevicepickerviewcontroller/init(browsedescriptor:parameters:)](https://developer.apple.com/documentation/devicediscoveryui/dddevicepickerviewcontroller/init(browsedescriptor:parameters:))

# init(browseDescriptor:parameters:)

**Framework:** DeviceDiscoveryUI  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 16.0+

Creates a view controller that displays the available devices on your local network.

## Declaration

```swift
@MainActor @preconcurrency convenience init?(browseDescriptor: NWBrowser.Descriptor, parameters: NWParameters? = nil)
```

## Parameters

- `browseDescriptor`: A descriptor for your application service. To create an application service descriptor, call `NWBrowser.Descriptor.applicationService(name:options:)` and provide a name for the service.
- `parameters`: Parameters for your network connection. Use [applicationService](../../network/nwparameters/applicationservice.md) to create a default set of parameters that create an encrypted connection with the other devices. You can also add `a` [NWProtocolFramer](../../network/nwprotocolframer.md) to provide an application-level messaging protocol.

## See Also

### Creating device picker view controllers

- [init(browseDescriptor:parameters:access:)](init%28browsedescriptor_parameters_access_%29.md): Creates a view controller with the parameters and access level you specify that displays the available devices on network.
