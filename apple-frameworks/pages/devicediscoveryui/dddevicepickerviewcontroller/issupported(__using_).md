> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryui/dddevicepickerviewcontroller/issupported(_:using:)](https://developer.apple.com/documentation/devicediscoveryui/dddevicepickerviewcontroller/issupported(_:using:))

# isSupported(\_:using:)

**Framework:** DeviceDiscoveryUI  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 16.0+

Returns a Boolean value that indicates whether the current device supports device discovery.

## Declaration

```swift
@MainActor @preconcurrency static func isSupported(_ browseDescriptor: NWBrowser.Descriptor, using: NWParameters? = nil) -> Bool
```

## Parameters

- `browseDescriptor`: A descriptor for your application service. To create an application service descriptor, call `NWBrowser.Descriptor.applicationService(name:options:)` and provide a name for the service.
- `using`: Parameters for your network connection. Use [applicationService](../../network/nwparameters/applicationservice.md) to create a default set of parameters that establish an encrypted connection with the other devices. You can also add `a` [NWProtocolFramer](../../network/nwprotocolframer.md) to provide an application-level messaging protocol.
