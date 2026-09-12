> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterwaterheatermanagement](https://developer.apple.com/documentation/matter/mtrclusterwaterheatermanagement)

# MTRClusterWaterHeaterManagement (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Water Heater Management This cluster is used to allow clients to control the operation of a hot water heating appliance so that it can be used with energy management.

## Declaration

```swift
class MTRClusterWaterHeaterManagement
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterwaterheatermanagement/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [boost(with:expectedValues:expectedValueInterval:completion:)](mtrclusterwaterheatermanagement/boost%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [cancelBoost(with:expectedValues:expectedValueInterval:completion:)](mtrclusterwaterheatermanagement/cancelboost%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [cancelBoost(withExpectedValues:expectedValueInterval:completion:)](mtrclusterwaterheatermanagement/cancelboost%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclusterwaterheatermanagement/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterwaterheatermanagement/readattributeattributelist%28with_%29.md)
- [readAttributeBoostState(with:)](mtrclusterwaterheatermanagement/readattributebooststate%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterwaterheatermanagement/readattributeclusterrevision%28with_%29.md)
- [readAttributeEstimatedHeatRequired(with:)](mtrclusterwaterheatermanagement/readattributeestimatedheatrequired%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterwaterheatermanagement/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterwaterheatermanagement/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeHeatDemand(with:)](mtrclusterwaterheatermanagement/readattributeheatdemand%28with_%29.md)
- [readAttributeHeaterTypes(with:)](mtrclusterwaterheatermanagement/readattributeheatertypes%28with_%29.md)
- [readAttributeTankPercentage(with:)](mtrclusterwaterheatermanagement/readattributetankpercentage%28with_%29.md)
- [readAttributeTankVolume(with:)](mtrclusterwaterheatermanagement/readattributetankvolume%28with_%29.md)

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

# MTRClusterWaterHeaterManagement (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Water Heater Management This cluster is used to allow clients to control the operation of a hot water heating appliance so that it can be used with energy management.

## Declaration

```objectivec
@interface MTRClusterWaterHeaterManagement : MTRGenericCluster
```

## Topics

### Instance Methods

- [boostWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterwaterheatermanagement/boost%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [cancelBoostWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterwaterheatermanagement/cancelboost%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [cancelBoostWithExpectedValues:expectedValueInterval:completion:](mtrclusterwaterheatermanagement/cancelboost%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [initWithDevice:endpointID:queue:](mtrclusterwaterheatermanagement/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithParams:](mtrclusterwaterheatermanagement/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterwaterheatermanagement/readattributeattributelist%28with_%29.md)
- [readAttributeBoostStateWithParams:](mtrclusterwaterheatermanagement/readattributebooststate%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterwaterheatermanagement/readattributeclusterrevision%28with_%29.md)
- [readAttributeEstimatedHeatRequiredWithParams:](mtrclusterwaterheatermanagement/readattributeestimatedheatrequired%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterwaterheatermanagement/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterwaterheatermanagement/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeHeatDemandWithParams:](mtrclusterwaterheatermanagement/readattributeheatdemand%28with_%29.md)
- [readAttributeHeaterTypesWithParams:](mtrclusterwaterheatermanagement/readattributeheatertypes%28with_%29.md)
- [readAttributeTankPercentageWithParams:](mtrclusterwaterheatermanagement/readattributetankpercentage%28with_%29.md)
- [readAttributeTankVolumeWithParams:](mtrclusterwaterheatermanagement/readattributetankvolume%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
