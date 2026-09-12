> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwlistener/service-swift.struct](https://developer.apple.com/documentation/network/nwlistener/service-swift.struct)

# NWListener.Service

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A description used to advertise the Bonjour service that a listener provides.

## Declaration

```swift
struct Service
```

## Topics

### Defining Services

- [init(name:type:domain:txtRecord:)](service-swift.struct/init%28name_type_domain_txtrecord_%29-1lb30.md): Initializes a Bonjour service to advertise.
- [init(name:type:domain:txtRecord:)](service-swift.struct/init%28name_type_domain_txtrecord_%29-8qh5.md): Initializes a Bonjour service to advertise with a TXT record.
- [noAutoRename](service-swift.struct/noautorename.md): A Boolean that indicates whether the service prohibits automatic renaming in the event of a name conflict.

### Inspecting Services

- [name](service-swift.struct/name.md): The Bonjour name of the service.
- [type](service-swift.struct/type.md): The Bonjour type of the service.
- [domain](service-swift.struct/domain.md): The Bonjour domain of the service.
- [txtRecordObject](service-swift.struct/txtrecordobject.md): The TXT record to advertise with the service.
- [txtRecord](service-swift.struct/txtrecord.md): The TXT record as a raw buffer to advertise with the service.

### Initializers

- [init(applicationService:)](service-swift.struct/init%28applicationservice_%29.md): Creates a listener for apps that listen for connections from a network device picker.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Advertising Bonjour Services

- [NSBonjourServices](../../bundleresources/information-property-list/nsbonjourservices.md): Bonjour service types browsed by the app.
- [NSLocalNetworkUsageDescription](../../bundleresources/information-property-list/nslocalnetworkusagedescription.md): A message that tells people why the app is requesting access to the local network.
- [service](service-swift.property.md): A Bonjour service that advertises the listener on the local network.
- [serviceRegistrationUpdateHandler](serviceregistrationupdatehandler.md): A handler that receives updates for the service endpoint being advertised.
- [NWListener.ServiceRegistrationChange](serviceregistrationchange.md): Changes to how a network listener’s service is advertised.
