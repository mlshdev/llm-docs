> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/collaborationdata/priority-swift.property](https://developer.apple.com/documentation/arkit/arsession/collaborationdata/priority-swift.property)

# priority (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A property that gives you a hint about how to send a given data instance over the network.

## Declaration

```swift
var priority: ARSession.CollaborationData.Priority { get }
```

<a id="Discussion"></a>

## Discussion

If you have reliability options in the network protocol you choose to transport [ARSession.CollaborationData](../collaborationdata.md) among peers, the [priority](priority-swift.property.md) property gives you a hint about which reliability option to choose for a given collaboration data instance. For example, if you use MultipeerConnectivity to send collaboration data over the network, choose [MCSessionSendDataMode.reliable](../../../multipeerconnectivity/mcsessionsenddatamode/reliable.md) when calling [send(\_:toPeers:with:)](../../../multipeerconnectivity/mcsession/send%28__topeers_with_%29.md) after ARKit gives you a collaboration data instance with priority [ARSession.CollaborationData.Priority.critical](priority-swift.enum/critical.md).

## See Also

### Observing Priority

- [ARSession.CollaborationData.Priority](priority-swift.enum.md): Options that help you choose the appropriate network protocol or settings for a given data instance.

# priority (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A property that gives you a hint about how to send a given data instance over the network.

## Declaration

```objectivec
@property (nonatomic, readonly) ARCollaborationDataPriority priority;
```

<a id="Discussion"></a>

## Discussion

If you have reliability options in the network protocol you choose to transport [ARCollaborationData](../collaborationdata.md) among peers, the [priority](priority-swift.property.md) property gives you a hint about which reliability option to choose for a given collaboration data instance. For example, if you use MultipeerConnectivity to send collaboration data over the network, choose [MCSessionSendDataReliable](../../../multipeerconnectivity/mcsessionsenddatamode/reliable.md) when calling [sendData:toPeers:withMode:error:](../../../multipeerconnectivity/mcsession/send%28__topeers_with_%29.md) after ARKit gives you a collaboration data instance with priority [ARCollaborationDataPriorityCritical](priority-swift.enum/critical.md).

## See Also

### Observing Priority

- [ARCollaborationDataPriority](priority-swift.enum.md): Options that help you choose the appropriate network protocol or settings for a given data instance.
