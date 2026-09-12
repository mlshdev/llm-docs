> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwlistener/serviceregistrationchange](https://developer.apple.com/documentation/network/nwlistener/serviceregistrationchange)

# NWListener.ServiceRegistrationChange

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Changes to how a network listener’s service is advertised.

## Declaration

```swift
enum ServiceRegistrationChange
```

## Topics

### Changes

- [NWListener.ServiceRegistrationChange.add(\_:)](serviceregistrationchange/add%28__%29.md): The service is now advertising a new endpoint.
- [NWListener.ServiceRegistrationChange.remove(\_:)](serviceregistrationchange/remove%28__%29.md): The service is no longer advertising a specific endpoint.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Advertising Bonjour Services

- [NSBonjourServices](../../bundleresources/information-property-list/nsbonjourservices.md): Bonjour service types browsed by the app.
- [NSLocalNetworkUsageDescription](../../bundleresources/information-property-list/nslocalnetworkusagedescription.md): A message that tells people why the app is requesting access to the local network.
- [service](service-swift.property.md): A Bonjour service that advertises the listener on the local network.
- [NWListener.Service](service-swift.struct.md): A description used to advertise the Bonjour service that a listener provides.
- [serviceRegistrationUpdateHandler](serviceregistrationupdatehandler.md): A handler that receives updates for the service endpoint being advertised.
