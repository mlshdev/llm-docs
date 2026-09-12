> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterchannel](https://developer.apple.com/documentation/matter/mtrclusterchannel)

# MTRClusterChannel (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterChannel
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusterchannel/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusterchannel/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [change(with:expectedValues:expectedValueInterval:completion:)](mtrclusterchannel/change%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [change(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterchannel/change%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [changeByNumber(with:expectedValues:expectedValueInterval:completion:)](mtrclusterchannel/changebynumber%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [changeByNumber(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterchannel/changebynumber%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandList(with:)](mtrclusterchannel/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterchannel/readattributeattributelist%28with_%29.md)
- [readAttributeChannelList(with:)](mtrclusterchannel/readattributechannellist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterchannel/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentChannel(with:)](mtrclusterchannel/readattributecurrentchannel%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterchannel/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterchannel/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeLineup(with:)](mtrclusterchannel/readattributelineup%28with_%29.md)
- [skip(with:expectedValues:expectedValueInterval:completion:)](mtrclusterchannel/skip%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [skip(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterchannel/skip%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [cancelRecordProgram(with:expectedValues:expectedValueInterval:completion:)](mtrclusterchannel/cancelrecordprogram%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [getProgramGuide(with:expectedValues:expectedValueInterval:completion:)](mtrclusterchannel/getprogramguide%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [getProgramGuide(withExpectedValues:expectedValueInterval:completion:)](mtrclusterchannel/getprogramguide%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [recordProgram(with:expectedValues:expectedValueInterval:completion:)](mtrclusterchannel/recordprogram%28with_expectedvalues_expectedvalueinterval_completion_%29.md)

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

# MTRClusterChannel (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterChannel : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusterchannel/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusterchannel/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [changeChannelWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterchannel/change%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [changeChannelWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterchannel/change%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [changeChannelByNumberWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterchannel/changebynumber%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [changeChannelByNumberWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterchannel/changebynumber%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandListWithParams:](mtrclusterchannel/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterchannel/readattributeattributelist%28with_%29.md)
- [readAttributeChannelListWithParams:](mtrclusterchannel/readattributechannellist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterchannel/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentChannelWithParams:](mtrclusterchannel/readattributecurrentchannel%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterchannel/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterchannel/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeLineupWithParams:](mtrclusterchannel/readattributelineup%28with_%29.md)
- [skipChannelWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterchannel/skip%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [skipChannelWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterchannel/skip%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [cancelRecordProgramWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterchannel/cancelrecordprogram%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [getProgramGuideWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterchannel/getprogramguide%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [getProgramGuideWithExpectedValues:expectedValueInterval:completion:](mtrclusterchannel/getprogramguide%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [recordProgramWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterchannel/recordprogram%28with_expectedvalues_expectedvalueinterval_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
