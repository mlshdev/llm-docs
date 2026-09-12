> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterservicearea](https://developer.apple.com/documentation/matter/mtrclusterservicearea)

# MTRClusterServiceArea (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Service Area The Service Area cluster provides an interface for controlling the areas where a device should operate, and for querying the current area being serviced.

## Declaration

```swift
class MTRClusterServiceArea
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterservicearea/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterservicearea/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterservicearea/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterservicearea/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentArea(with:)](mtrclusterservicearea/readattributecurrentarea%28with_%29.md)
- [readAttributeEstimatedEndTime(with:)](mtrclusterservicearea/readattributeestimatedendtime%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterservicearea/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterservicearea/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeProgress(with:)](mtrclusterservicearea/readattributeprogress%28with_%29.md)
- [readAttributeSelectedAreas(with:)](mtrclusterservicearea/readattributeselectedareas%28with_%29.md)
- [readAttributeSupportedAreas(with:)](mtrclusterservicearea/readattributesupportedareas%28with_%29.md)
- [readAttributeSupportedMaps(with:)](mtrclusterservicearea/readattributesupportedmaps%28with_%29.md)
- [selectAreas(with:expectedValues:expectedValueInterval:completion:)](mtrclusterservicearea/selectareas%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [skip(with:expectedValues:expectedValueInterval:completion:)](mtrclusterservicearea/skip%28with_expectedvalues_expectedvalueinterval_completion_%29.md)

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

# MTRClusterServiceArea (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Service Area The Service Area cluster provides an interface for controlling the areas where a device should operate, and for querying the current area being serviced.

## Declaration

```objectivec
@interface MTRClusterServiceArea : MTRGenericCluster
```

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrclusterservicearea/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithParams:](mtrclusterservicearea/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterservicearea/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterservicearea/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentAreaWithParams:](mtrclusterservicearea/readattributecurrentarea%28with_%29.md)
- [readAttributeEstimatedEndTimeWithParams:](mtrclusterservicearea/readattributeestimatedendtime%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterservicearea/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterservicearea/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeProgressWithParams:](mtrclusterservicearea/readattributeprogress%28with_%29.md)
- [readAttributeSelectedAreasWithParams:](mtrclusterservicearea/readattributeselectedareas%28with_%29.md)
- [readAttributeSupportedAreasWithParams:](mtrclusterservicearea/readattributesupportedareas%28with_%29.md)
- [readAttributeSupportedMapsWithParams:](mtrclusterservicearea/readattributesupportedmaps%28with_%29.md)
- [selectAreasWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterservicearea/selectareas%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [skipAreaWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterservicearea/skip%28with_expectedvalues_expectedvalueinterval_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
