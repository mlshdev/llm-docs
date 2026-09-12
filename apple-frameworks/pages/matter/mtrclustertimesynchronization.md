> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclustertimesynchronization](https://developer.apple.com/documentation/matter/mtrclustertimesynchronization)

# MTRClusterTimeSynchronization (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Time Synchronization Accurate time is required for a number of reasons, including scheduling, display and validating security materials.

## Declaration

```swift
class MTRClusterTimeSynchronization
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclustertimesynchronization/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclustertimesynchronization/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclustertimesynchronization/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclustertimesynchronization/readattributeclusterrevision%28with_%29.md)
- [readAttributeDSTOffset(with:)](mtrclustertimesynchronization/readattributedstoffset%28with_%29.md)
- [readAttributeDSTOffsetListMaxSize(with:)](mtrclustertimesynchronization/readattributedstoffsetlistmaxsize%28with_%29.md)
- [readAttributeDefaultNTP(with:)](mtrclustertimesynchronization/readattributedefaultntp%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclustertimesynchronization/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclustertimesynchronization/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeGranularity(with:)](mtrclustertimesynchronization/readattributegranularity%28with_%29.md)
- [readAttributeLocalTime(with:)](mtrclustertimesynchronization/readattributelocaltime%28with_%29.md)
- [readAttributeNTPServerAvailable(with:)](mtrclustertimesynchronization/readattributentpserveravailable%28with_%29.md)
- [readAttributeSupportsDNSResolve(with:)](mtrclustertimesynchronization/readattributesupportsdnsresolve%28with_%29.md)
- [readAttributeTimeSource(with:)](mtrclustertimesynchronization/readattributetimesource%28with_%29.md)
- [readAttributeTimeZone(with:)](mtrclustertimesynchronization/readattributetimezone%28with_%29.md)
- [readAttributeTimeZoneDatabase(with:)](mtrclustertimesynchronization/readattributetimezonedatabase%28with_%29.md)
- [readAttributeTimeZoneListMaxSize(with:)](mtrclustertimesynchronization/readattributetimezonelistmaxsize%28with_%29.md)
- [readAttributeTrustedTimeSource(with:)](mtrclustertimesynchronization/readattributetrustedtimesource%28with_%29.md)
- [readAttributeUTCTime(with:)](mtrclustertimesynchronization/readattributeutctime%28with_%29.md)
- [setDSTOffsetWith(\_:expectedValues:expectedValueInterval:completion:)](mtrclustertimesynchronization/setdstoffsetwith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [setDefaultNTPWith(\_:expectedValues:expectedValueInterval:completion:)](mtrclustertimesynchronization/setdefaultntpwith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [setTimeZoneWith(\_:expectedValues:expectedValueInterval:completion:)](mtrclustertimesynchronization/settimezonewith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [setTrustedTimeSourceWith(\_:expectedValues:expectedValueInterval:completion:)](mtrclustertimesynchronization/settrustedtimesourcewith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [setUTCTimeWith(\_:expectedValues:expectedValueInterval:completion:)](mtrclustertimesynchronization/setutctimewith%28__expectedvalues_expectedvalueinterval_completion_%29.md)

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

# MTRClusterTimeSynchronization (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Time Synchronization Accurate time is required for a number of reasons, including scheduling, display and validating security materials.

## Declaration

```objectivec
@interface MTRClusterTimeSynchronization : MTRGenericCluster
```

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrclustertimesynchronization/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithParams:](mtrclustertimesynchronization/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclustertimesynchronization/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclustertimesynchronization/readattributeclusterrevision%28with_%29.md)
- [readAttributeDSTOffsetWithParams:](mtrclustertimesynchronization/readattributedstoffset%28with_%29.md)
- [readAttributeDSTOffsetListMaxSizeWithParams:](mtrclustertimesynchronization/readattributedstoffsetlistmaxsize%28with_%29.md)
- [readAttributeDefaultNTPWithParams:](mtrclustertimesynchronization/readattributedefaultntp%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclustertimesynchronization/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclustertimesynchronization/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeGranularityWithParams:](mtrclustertimesynchronization/readattributegranularity%28with_%29.md)
- [readAttributeLocalTimeWithParams:](mtrclustertimesynchronization/readattributelocaltime%28with_%29.md)
- [readAttributeNTPServerAvailableWithParams:](mtrclustertimesynchronization/readattributentpserveravailable%28with_%29.md)
- [readAttributeSupportsDNSResolveWithParams:](mtrclustertimesynchronization/readattributesupportsdnsresolve%28with_%29.md)
- [readAttributeTimeSourceWithParams:](mtrclustertimesynchronization/readattributetimesource%28with_%29.md)
- [readAttributeTimeZoneWithParams:](mtrclustertimesynchronization/readattributetimezone%28with_%29.md)
- [readAttributeTimeZoneDatabaseWithParams:](mtrclustertimesynchronization/readattributetimezonedatabase%28with_%29.md)
- [readAttributeTimeZoneListMaxSizeWithParams:](mtrclustertimesynchronization/readattributetimezonelistmaxsize%28with_%29.md)
- [readAttributeTrustedTimeSourceWithParams:](mtrclustertimesynchronization/readattributetrustedtimesource%28with_%29.md)
- [readAttributeUTCTimeWithParams:](mtrclustertimesynchronization/readattributeutctime%28with_%29.md)
- [setDSTOffsetWithParams:expectedValues:expectedValueInterval:completion:](mtrclustertimesynchronization/setdstoffsetwith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [setDefaultNTPWithParams:expectedValues:expectedValueInterval:completion:](mtrclustertimesynchronization/setdefaultntpwith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [setTimeZoneWithParams:expectedValues:expectedValueInterval:completion:](mtrclustertimesynchronization/settimezonewith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [setTrustedTimeSourceWithParams:expectedValues:expectedValueInterval:completion:](mtrclustertimesynchronization/settrustedtimesourcewith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [setUTCTimeWithParams:expectedValues:expectedValueInterval:completion:](mtrclustertimesynchronization/setutctimewith%28__expectedvalues_expectedvalueinterval_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
