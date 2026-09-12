> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnectiongroup](https://developer.apple.com/documentation/network/nwconnectiongroup)

# NWConnectionGroup

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An object you use to communicate with a group of endpoints, such as an IP multicast group on a local network.

## Declaration

```swift
final class NWConnectionGroup
```

## Topics

### Establishing Group Connectivity

- [init(with:using:)](nwconnectiongroup/init%28with_using_%29.md): Initializes a new connection group with a group identifier.
- [NWMulticastGroup](nwmulticastgroup.md): A descriptor for a group you use to join an IP multicast group on a local network.
- [NWGroupDescriptor](nwgroupdescriptor.md): A protocol that defines a group of endpoints with which you can communicate, such as a multicast group.
- [start(queue:)](nwconnectiongroup/start%28queue_%29.md): Joins the group, registers to receive messages, and sets the queue on you handle group events.

### Sending and Receiving Group Messages

- [setReceiveHandler(maximumMessageSize:rejectOversizedMessages:handler:)](nwconnectiongroup/setreceivehandler%28maximummessagesize_rejectoversizedmessages_handler_%29.md): Sets a handler that receives inbound messages from members of the group.
- [send(content:to:message:completion:)](nwconnectiongroup/send%28content_to_message_completion_%29.md): Sends data to the entire group, or to a specific member of the group.
- [NWConnectionGroup.Message](nwconnectiongroup/message.md): An object that represents a message that you send or receive within a group, and that contains protocol metadata and send properties.

### Managing Groups

- [stateUpdateHandler](nwconnectiongroup/stateupdatehandler.md): A handler that receives connection group state updates.
- [NWConnectionGroup.State](nwconnectiongroup/state-swift.enum.md): States that indicate whether you can use a connection group to send and receive messages.
- [state](nwconnectiongroup/state-swift.property.md): The current state of the connection group.
- [cancel()](nwconnectiongroup/cancel%28%29.md): Cancels the connection group object and leaves the network group.

### Inspecting Groups

- [descriptor](nwconnectiongroup/descriptor.md): The descriptor of the group you use to initialize the connection group.
- [parameters](nwconnectiongroup/parameters.md): The parameters with which you initialize the connection group.
- [queue](nwconnectiongroup/queue.md): The queue on which you handle group events.

### Instance Properties

- [newConnectionHandler](nwconnectiongroup/newconnectionhandler.md)

### Instance Methods

- [extract(connectionTo:using:)](nwconnectiongroup/extract%28connectionto_using_%29.md)
- [metadata(definition:)](nwconnectiongroup/metadata%28definition_%29.md)
- [reinsert(connection:)](nwconnectiongroup/reinsert%28connection_%29.md)

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Connections and Listeners

- [NWConnection](nwconnection.md): A bidirectional data connection between a local endpoint and a remote endpoint.
- [NWListener](nwlistener.md): An object you use to listen for incoming network connections.
- [NWBrowser](nwbrowser.md): An object you use to browse for available network services.
- [NWEthernetChannel](nwethernetchannel.md): An object you use to send and receive custom Ethernet frames.
