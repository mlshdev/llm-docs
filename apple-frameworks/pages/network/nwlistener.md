> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwlistener](https://developer.apple.com/documentation/network/nwlistener)

# NWListener

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An object you use to listen for incoming network connections.

## Declaration

```swift
final class NWListener
```

## Mentioned In

- [Creating an Identity for Local Network TLS](creating-an-identity-for-local-network-tls.md)

## Topics

### Creating Listeners

- [init(using:on:)](nwlistener/init%28using_on_%29.md): Initializes a network listener, with an optional local port.
- [start(queue:)](nwlistener/start%28queue_%29.md): Registers for listening, and sets the queue on which all listener events are delivered.
- [stateUpdateHandler](nwlistener/stateupdatehandler.md): A handler that receives listener state updates.
- [NWListener.State](nwlistener/state-swift.enum.md): States indicating whether a listener is able to accept incoming connections.
- [port](nwlistener/port.md): The port on which the listener can accept connections.
- [cancel()](nwlistener/cancel%28%29.md): Stops listening for inbound connections.

### Receiving Connections

- [newConnectionHandler](nwlistener/newconnectionhandler.md): A handler that receives inbound connections.
- [newConnectionLimit](nwlistener/newconnectionlimit.md): The remaining number of inbound connections to deliver before rejecting connections.
- [InfiniteConnectionLimit](nwlistener/infiniteconnectionlimit.md): A static value to indicate that inbound connections should not be limited.

### Advertising Bonjour Services

- [NSBonjourServices](../bundleresources/information-property-list/nsbonjourservices.md): Bonjour service types browsed by the app.
- [NSLocalNetworkUsageDescription](../bundleresources/information-property-list/nslocalnetworkusagedescription.md): A message that tells people why the app is requesting access to the local network.
- [service](nwlistener/service-swift.property.md): A Bonjour service that advertises the listener on the local network.
- [NWListener.Service](nwlistener/service-swift.struct.md): A description used to advertise the Bonjour service that a listener provides.
- [serviceRegistrationUpdateHandler](nwlistener/serviceregistrationupdatehandler.md): A handler that receives updates for the service endpoint being advertised.
- [NWListener.ServiceRegistrationChange](nwlistener/serviceregistrationchange.md): Changes to how a network listener’s service is advertised.

### Inspecting Listeners

- [parameters](nwlistener/parameters.md): The parameters used to initialize the listener.
- [queue](nwlistener/queue.md): The queue on which listener events are delivered.

### Initializers

- [init(applicationService:using:)](nwlistener/init%28applicationservice_using_%29.md)
- [init(launchd:using:)](nwlistener/init%28launchd_using_%29.md): Deprecated.
- [init(launchdSocketKey:parameters:)](nwlistener/init%28launchdsocketkey_parameters_%29.md)
- [init(service:using:)](nwlistener/init%28service_using_%29.md)

### Instance Properties

- [newConnectionGroupHandler](nwlistener/newconnectiongrouphandler.md)
- [state](nwlistener/state-swift.property.md)

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Connections and Listeners

- [NWConnection](nwconnection.md): A bidirectional data connection between a local endpoint and a remote endpoint.
- [NWBrowser](nwbrowser.md): An object you use to browse for available network services.
- [NWConnectionGroup](nwconnectiongroup.md): An object you use to communicate with a group of endpoints, such as an IP multicast group on a local network.
- [NWEthernetChannel](nwethernetchannel.md): An object you use to send and receive custom Ethernet frames.
