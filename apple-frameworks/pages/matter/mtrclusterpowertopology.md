> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterpowertopology](https://developer.apple.com/documentation/matter/mtrclusterpowertopology)

# MTRClusterPowerTopology (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Power Topology The Power Topology Cluster provides a mechanism for expressing how power is flowing between endpoints.

## Declaration

```swift
class MTRClusterPowerTopology
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterpowertopology/init%28device_endpointid_queue_%29.md): The queue is currently unused, but may be used in the future for calling completions for command invocations if commands are added to this cluster.

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterpowertopology/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeActiveEndpoints(with:)](mtrclusterpowertopology/readattributeactiveendpoints%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterpowertopology/readattributeattributelist%28with_%29.md)
- [readAttributeAvailableEndpoints(with:)](mtrclusterpowertopology/readattributeavailableendpoints%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterpowertopology/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterpowertopology/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterpowertopology/readattributegeneratedcommandlist%28with_%29.md)

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

# MTRClusterPowerTopology (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Power Topology The Power Topology Cluster provides a mechanism for expressing how power is flowing between endpoints.

## Declaration

```objectivec
@interface MTRClusterPowerTopology : MTRGenericCluster
```

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrclusterpowertopology/init%28device_endpointid_queue_%29.md): The queue is currently unused, but may be used in the future for calling completions for command invocations if commands are added to this cluster.
- [readAttributeAcceptedCommandListWithParams:](mtrclusterpowertopology/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeActiveEndpointsWithParams:](mtrclusterpowertopology/readattributeactiveendpoints%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterpowertopology/readattributeattributelist%28with_%29.md)
- [readAttributeAvailableEndpointsWithParams:](mtrclusterpowertopology/readattributeavailableendpoints%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterpowertopology/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterpowertopology/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterpowertopology/readattributegeneratedcommandlist%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
