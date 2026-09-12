> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection](https://developer.apple.com/documentation/network/nwconnection)

# NWConnection

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A bidirectional data connection between a local endpoint and a remote endpoint.

## Declaration

```swift
final class NWConnection
```

## Mentioned In

- [Inspecting app activity data](inspecting-app-activity-data.md)

## Topics

### Creating Connections

- [init(host:port:using:)](nwconnection/init%28host_port_using_%29.md): Initializes a new connection to a host and port.
- [init(to:using:)](nwconnection/init%28to_using_%29.md): Initializes a new connection to a remote endpoint.
- [start(queue:)](nwconnection/start%28queue_%29.md): Starts establishing a connection, and sets the queue on which to deliver all connection events.
- [restart()](nwconnection/restart%28%29.md): Restarts a connection that is in the waiting state.

### Handling State Updates

- [state](nwconnection/state-swift.property.md): The current state of the connection.
- [NWConnection.State](nwconnection/state-swift.enum.md): States indicating whether a connection can be used to send and receive data.
- [stateUpdateHandler](nwconnection/stateupdatehandler.md): A handler that receives connection state updates.

### Sending and Receiving Data

- [send(content:contentContext:isComplete:completion:)](nwconnection/send%28content_contentcontext_iscomplete_completion_%29-5ecuz.md): Sends data on a connection.
- [send(content:contentContext:isComplete:completion:)](nwconnection/send%28content_contentcontext_iscomplete_completion_%29-3mfmt.md): Sends data on a connection using a custom Data type.
- [NWConnection.SendCompletion](nwconnection/sendcompletion.md): A completion handler that indicates when the connection has finished processing sent content.
- [receive(minimumIncompleteLength:maximumLength:completion:)](nwconnection/receive%28minimumincompletelength_maximumlength_completion_%29.md): Schedules a single receive completion handler, with a range indicating how many bytes the handler can receive at one time.
- [receiveMessage(completion:)](nwconnection/receivemessage%28completion_%29.md): Schedules a single receive completion handler for a complete message, as opposed to a range of bytes.
- [batch(\_:)](nwconnection/batch%28__%29.md): Defines a block in which calls to send and receive are processed as a batch to improve performance.
- [NWConnection.ContentContext](nwconnection/contentcontext.md): An object that represents a message to send or receive, containing protocol metadata and send properties.
- [maximumDatagramSize](nwconnection/maximumdatagramsize.md): The maximum size of a datagram message that can be sent on a connection.

### Canceling Connections

- [cancel()](nwconnection/cancel%28%29.md): Cancels the connection and gracefully disconnects any established network protocols.
- [forceCancel()](nwconnection/forcecancel%28%29.md): Cancels the connection and immediately disconnects any established network protocols.
- [cancelCurrentEndpoint()](nwconnection/cancelcurrentendpoint%28%29.md): Causes the current endpoint to be rejected, allowing the connection to try another resolved address.

### Handling Path Updates

- [currentPath](nwconnection/currentpath.md): The network path the connection is using.
- [pathUpdateHandler](nwconnection/pathupdatehandler.md): A handler that receives network path updates.
- [viabilityUpdateHandler](nwconnection/viabilityupdatehandler.md): A handler that receives updates when data can be sent and received.
- [betterPathUpdateHandler](nwconnection/betterpathupdatehandler.md): A handler that receives updates when an alternative network path is preferred over the current path.

### Collecting Connection Metrics

- [Collecting Network Connection Metrics](collecting-network-connection-metrics.md): Use reports to understand how DNS and protocol handshakes impact connection establishment.
- [requestEstablishmentReport(queue:completion:)](nwconnection/requestestablishmentreport%28queue_completion_%29.md): Requests a copy of the connection’s establishment report once the connection is in the ready state.
- [NWConnection.EstablishmentReport](nwconnection/establishmentreport.md): A report that provides metrics about the establishment of a connection.
- [startDataTransferReport()](nwconnection/startdatatransferreport%28%29.md): Begins a new data transfer report, which can later be collected.
- [NWConnection.PendingDataTransferReport](nwconnection/pendingdatatransferreport.md): An outstanding data transfer report that has yet to be collected.
- [NWConnection.DataTransferReport](nwconnection/datatransferreport.md): A report that provides metrics about data being sent and received on a connection.

### Inspecting Connections

- [metadata(definition:)](nwconnection/metadata%28definition_%29.md): Retrieves the connection-wide metadata for a specific protocol.
- [NWProtocolMetadata](nwprotocolmetadata.md): The abstract superclass for specifying metadata about a network protocol.
- [endpoint](nwconnection/endpoint.md): The remote endpoint with which the connection was initialized.
- [parameters](nwconnection/parameters.md): The parameters with which the connection was initialized.
- [queue](nwconnection/queue.md): The queue on which connection events are delivered.

### Initializers

- [init(from:to:using:)](nwconnection/init%28from_to_using_%29.md)
- [init(message:)](nwconnection/init%28message_%29.md)

### Instance Methods

- [receiveDiscontiguous(minimumIncompleteLength:maximumLength:completion:)](nwconnection/receivediscontiguous%28minimumincompletelength_maximumlength_completion_%29.md)
- [receiveMessageDiscontiguous(completion:)](nwconnection/receivemessagediscontiguous%28completion_%29.md)

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Connections and Listeners

- [NWListener](nwlistener.md): An object you use to listen for incoming network connections.
- [NWBrowser](nwbrowser.md): An object you use to browse for available network services.
- [NWConnectionGroup](nwconnectiongroup.md): An object you use to communicate with a group of endpoints, such as an IP multicast group on a local network.
- [NWEthernetChannel](nwethernetchannel.md): An object you use to send and receive custom Ethernet frames.
