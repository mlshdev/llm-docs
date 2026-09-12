> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwlistener/serviceregistrationupdatehandler](https://developer.apple.com/documentation/network/nwlistener/serviceregistrationupdatehandler)

# serviceRegistrationUpdateHandler

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A handler that receives updates for the service endpoint being advertised.

## Declaration

```swift
@preconcurrency final var serviceRegistrationUpdateHandler: (@Sendable (NWListener.ServiceRegistrationChange) -> Void)? { get set }
```

## See Also

### Advertising Bonjour Services

- [NSBonjourServices](../../bundleresources/information-property-list/nsbonjourservices.md): Bonjour service types browsed by the app.
- [NSLocalNetworkUsageDescription](../../bundleresources/information-property-list/nslocalnetworkusagedescription.md): A message that tells people why the app is requesting access to the local network.
- [service](service-swift.property.md): A Bonjour service that advertises the listener on the local network.
- [NWListener.Service](service-swift.struct.md): A description used to advertise the Bonjour service that a listener provides.
- [NWListener.ServiceRegistrationChange](serviceregistrationchange.md): Changes to how a network listener’s service is advertised.
