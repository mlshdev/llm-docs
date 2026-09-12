> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryui/dddevicepickerviewcontroller/issupportedforbrowsedescriptor:parameters:](https://developer.apple.com/documentation/devicediscoveryui/dddevicepickerviewcontroller/issupportedforbrowsedescriptor:parameters:)

# isSupportedForBrowseDescriptor:parameters:

**Interface language:** Objective-C

**Framework:** DeviceDiscoveryUI  
**Kind:** Type Method  
**Availability:** tvOS 16.0+

Returns a Boolean value that indicates whether the current device supports device discovery.

## Declaration

```objectivec
+ (BOOL) isSupportedForBrowseDescriptor:(nw_browse_descriptor_t) browseDescriptor parameters:(nw_parameters_t) parameters;
```

## Parameters

- `browseDescriptor`: A descriptor for your application service. To create an application service descriptor, call `NWBrowser.Descriptor.applicationService(name:options:)` and provide a name for the service.
- `parameters`: Parameters for your network connection. Use [applicationService](../../network/nwparameters/applicationservice.md) to create a default set of parameters that create an encrypted connection with the other devices. You can also add `a` [NWProtocolFramer](../../network/nwprotocolframer.md) to provide an application-level messaging protocol.
