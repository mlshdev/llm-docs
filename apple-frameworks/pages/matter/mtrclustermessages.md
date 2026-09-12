> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclustermessages](https://developer.apple.com/documentation/matter/mtrclustermessages)

# MTRClusterMessages (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Messages This cluster provides an interface for passing messages to be presented by a device.

## Declaration

```swift
class MTRClusterMessages
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclustermessages/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [cancelRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclustermessages/cancelrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [presentRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclustermessages/presentrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclustermessages/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeActiveMessageIDs(with:)](mtrclustermessages/readattributeactivemessageids%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclustermessages/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclustermessages/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclustermessages/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclustermessages/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeMessages(with:)](mtrclustermessages/readattributemessages%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRClusterMessages (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Messages This cluster provides an interface for passing messages to be presented by a device.

## Declaration

```objectivec
@interface MTRClusterMessages : MTRGenericCluster
```

## Topics

### Instance Methods

- [cancelMessagesRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclustermessages/cancelrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [initWithDevice:endpointID:queue:](mtrclustermessages/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [presentMessagesRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclustermessages/presentrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandListWithParams:](mtrclustermessages/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeActiveMessageIDsWithParams:](mtrclustermessages/readattributeactivemessageids%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclustermessages/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclustermessages/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclustermessages/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclustermessages/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeMessagesWithParams:](mtrclustermessages/readattributemessages%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
