> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryui/dddevicepickerviewcontroller/initwithbrowsedescriptor:parameters:](https://developer.apple.com/documentation/devicediscoveryui/dddevicepickerviewcontroller/initwithbrowsedescriptor:parameters:)

# initWithBrowseDescriptor:parameters:

**Interface language:** Objective-C

**Framework:** DeviceDiscoveryUI  
**Kind:** Instance Method  
**Availability:** tvOS 16.0+

Creates a view controller that displays the other, available devices on your local network.

## Declaration

```objectivec
- (instancetype) initWithBrowseDescriptor:(nw_browse_descriptor_t) browseDescriptor parameters:(nw_parameters_t) parameters;
```

## Parameters

- `browseDescriptor`: A descriptor for your application service. To create an application service descriptor, call `NWBrowser.Descriptor.applicationService(name:options:)` and provide a name for the service.
- `parameters`: Parameters for your network connection. Use [applicationService](../../network/nwparameters/applicationservice.md) to create a default set of parameters that create an encrypted connection with the other devices. You can also add `a` [NWProtocolFramer](../../network/nwprotocolframer.md) to provide an application-level messaging protocol.
