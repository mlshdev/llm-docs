> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryui/devicepickersupportedaction/callasfunction(_:parameters:)](https://developer.apple.com/documentation/devicediscoveryui/devicepickersupportedaction/callasfunction(_:parameters:))

# callAsFunction(\_:parameters:)

**Framework:** DeviceDiscoveryUI  
**Kind:** Instance Method  
**Availability:** tvOS 16.0+

Returns a Boolean value that indicates whether the current device supports device discovery.

## Declaration

```swift
func callAsFunction(_ browseDescriptor: NWBrowser.Descriptor, parameters: (() -> NWParameters)? = nil) -> Bool
```

## Parameters

- `browseDescriptor`: A descriptor for your application service. To create an application service descriptor, call [NWBrowser.Descriptor.applicationService(name:)](../../network/nwbrowser/descriptor-swift.enum/applicationservice%28name_%29.md) and provide a name for the service.
- `parameters`: Parameters for your network connection. Use [applicationService](../../network/nwparameters/applicationservice.md) to create a default set of parameters that create an encrypted connection with the other devices. You can also add `a` [NWProtocolFramer](../../network/nwprotocolframer.md) to provide an application-level messaging protocol.
