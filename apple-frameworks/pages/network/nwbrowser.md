> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwbrowser](https://developer.apple.com/documentation/network/nwbrowser)

# NWBrowser

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object you use to browse for available network services.

## Declaration

```swift
final class NWBrowser
```

## Topics

### Essentials

- [NSBonjourServices](../bundleresources/information-property-list/nsbonjourservices.md): Bonjour service types browsed by the app.
- [NSLocalNetworkUsageDescription](../bundleresources/information-property-list/nslocalnetworkusagedescription.md): A message that tells people why the app is requesting access to the local network.

### Browsing for Services

- [init(for:using:)](nwbrowser/init%28for_using_%29.md): Initializes a browser with a type of service to discover.
- [NWBrowser.Descriptor](nwbrowser/descriptor-swift.enum.md): A service description used to discover Bonjour services.
- [start(queue:)](nwbrowser/start%28queue_%29.md): Starts browsing for services, and sets the queue on which all browser events will be delivered.
- [browseResultsChangedHandler](nwbrowser/browseresultschangedhandler.md): A handler that delivers updates about discovered services.
- [NWBrowser.Result](nwbrowser/result.md): A set of discovered services and changes from the last result.
- [browseResults](nwbrowser/browseresults.md): The list of discovered services.

### Managing Browsers

- [stateUpdateHandler](nwbrowser/stateupdatehandler.md): A handler that receives browser state updates.
- [NWBrowser.State](nwbrowser/state-swift.enum.md): States indicating whether a browser is able to discover services.
- [state](nwbrowser/state-swift.property.md): The current state of the browser.
- [cancel()](nwbrowser/cancel%28%29.md): Stops browsing for services.

### Inspecting Browsers

- [descriptor](nwbrowser/descriptor-swift.property.md): The service descriptor with which the browser was initialized.
- [parameters](nwbrowser/parameters.md): The parameters with which the browser was initialized.
- [queue](nwbrowser/queue.md): The queue on which browser events are delivered.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Connections and Listeners

- [NWConnection](nwconnection.md): A bidirectional data connection between a local endpoint and a remote endpoint.
- [NWListener](nwlistener.md): An object you use to listen for incoming network connections.
- [NWConnectionGroup](nwconnectiongroup.md): An object you use to communicate with a group of endpoints, such as an IP multicast group on a local network.
- [NWEthernetChannel](nwethernetchannel.md): An object you use to send and receive custom Ethernet frames.
