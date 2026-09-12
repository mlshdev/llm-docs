> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustertimesynchronization](https://developer.apple.com/documentation/matter/mtrbaseclustertimesynchronization)

# MTRBaseClusterTimeSynchronization (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Time Synchronization

## Declaration

```swift
class MTRBaseClusterTimeSynchronization
```

<a id="overview"></a>

## Overview

Accurate time is required for a number of reasons, including scheduling, display and validating security materials.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclustertimesynchronization/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [readAttributeAcceptedCommandList(completion:)](mtrbaseclustertimesynchronization/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclustertimesynchronization/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclustertimesynchronization/readattributeclusterrevision%28completion_%29.md)
- [readAttributeDSTOffset(completion:)](mtrbaseclustertimesynchronization/readattributedstoffset%28completion_%29.md)
- [readAttributeDSTOffsetListMaxSize(completion:)](mtrbaseclustertimesynchronization/readattributedstoffsetlistmaxsize%28completion_%29.md)
- [readAttributeDefaultNTP(completion:)](mtrbaseclustertimesynchronization/readattributedefaultntp%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclustertimesynchronization/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclustertimesynchronization/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeGranularity(completion:)](mtrbaseclustertimesynchronization/readattributegranularity%28completion_%29.md)
- [readAttributeLocalTime(completion:)](mtrbaseclustertimesynchronization/readattributelocaltime%28completion_%29.md)
- [readAttributeNTPServerAvailable(completion:)](mtrbaseclustertimesynchronization/readattributentpserveravailable%28completion_%29.md)
- [readAttributeSupportsDNSResolve(completion:)](mtrbaseclustertimesynchronization/readattributesupportsdnsresolve%28completion_%29.md)
- [readAttributeTimeSource(completion:)](mtrbaseclustertimesynchronization/readattributetimesource%28completion_%29.md)
- [readAttributeTimeZone(completion:)](mtrbaseclustertimesynchronization/readattributetimezone%28completion_%29.md)
- [readAttributeTimeZoneDatabase(completion:)](mtrbaseclustertimesynchronization/readattributetimezonedatabase%28completion_%29.md)
- [readAttributeTimeZoneListMaxSize(completion:)](mtrbaseclustertimesynchronization/readattributetimezonelistmaxsize%28completion_%29.md)
- [readAttributeTrustedTimeSource(completion:)](mtrbaseclustertimesynchronization/readattributetrustedtimesource%28completion_%29.md)
- [readAttributeUTCTime(completion:)](mtrbaseclustertimesynchronization/readattributeutctime%28completion_%29.md)
- [setDSTOffsetWith(\_:completion:)](mtrbaseclustertimesynchronization/setdstoffsetwith%28__completion_%29.md): Command SetDSTOffset
- [setDefaultNTPWith(\_:completion:)](mtrbaseclustertimesynchronization/setdefaultntpwith%28__completion_%29.md): Command SetDefaultNTP
- [setTimeZoneWith(\_:completion:)](mtrbaseclustertimesynchronization/settimezonewith%28__completion_%29.md): Command SetTimeZone
- [setTrustedTimeSourceWith(\_:completion:)](mtrbaseclustertimesynchronization/settrustedtimesourcewith%28__completion_%29.md): Command SetTrustedTimeSource
- [setUTCTimeWith(\_:completion:)](mtrbaseclustertimesynchronization/setutctimewith%28__completion_%29.md): Command SetUTCTime
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertimesynchronization/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertimesynchronization/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertimesynchronization/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeDSTOffset(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertimesynchronization/subscribeattributedstoffset%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeDSTOffsetListMaxSize(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertimesynchronization/subscribeattributedstoffsetlistmaxsize%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeDefaultNTP(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertimesynchronization/subscribeattributedefaultntp%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertimesynchronization/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertimesynchronization/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGranularity(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertimesynchronization/subscribeattributegranularity%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeLocalTime(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertimesynchronization/subscribeattributelocaltime%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeNTPServerAvailable(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertimesynchronization/subscribeattributentpserveravailable%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportsDNSResolve(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertimesynchronization/subscribeattributesupportsdnsresolve%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeTimeSource(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertimesynchronization/subscribeattributetimesource%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeTimeZone(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertimesynchronization/subscribeattributetimezone%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeTimeZoneDatabase(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertimesynchronization/subscribeattributetimezonedatabase%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeTimeZoneListMaxSize(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertimesynchronization/subscribeattributetimezonelistmaxsize%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeTrustedTimeSource(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertimesynchronization/subscribeattributetrustedtimesource%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeUTCTime(with:subscriptionEstablished:reportHandler:)](mtrbaseclustertimesynchronization/subscribeattributeutctime%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertimesynchronization/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertimesynchronization/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertimesynchronization/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeDSTOffset(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertimesynchronization/readattributedstoffset%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeDSTOffsetListMaxSize(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertimesynchronization/readattributedstoffsetlistmaxsize%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeDefaultNTP(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertimesynchronization/readattributedefaultntp%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertimesynchronization/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertimesynchronization/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGranularity(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertimesynchronization/readattributegranularity%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeLocalTime(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertimesynchronization/readattributelocaltime%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeNTPServerAvailable(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertimesynchronization/readattributentpserveravailable%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportsDNSResolve(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertimesynchronization/readattributesupportsdnsresolve%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeTimeSource(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertimesynchronization/readattributetimesource%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeTimeZone(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertimesynchronization/readattributetimezone%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeTimeZoneDatabase(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertimesynchronization/readattributetimezonedatabase%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeTimeZoneListMaxSize(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertimesynchronization/readattributetimezonelistmaxsize%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeTrustedTimeSource(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertimesynchronization/readattributetrustedtimesource%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeUTCTime(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustertimesynchronization/readattributeutctime%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRBaseClusterTimeSynchronization (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Time Synchronization

## Declaration

```objectivec
@interface MTRBaseClusterTimeSynchronization : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

Accurate time is required for a number of reasons, including scheduling, display and validating security materials.

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrbaseclustertimesynchronization/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclustertimesynchronization/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclustertimesynchronization/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclustertimesynchronization/readattributeclusterrevision%28completion_%29.md)
- [readAttributeDSTOffsetWithCompletion:](mtrbaseclustertimesynchronization/readattributedstoffset%28completion_%29.md)
- [readAttributeDSTOffsetListMaxSizeWithCompletion:](mtrbaseclustertimesynchronization/readattributedstoffsetlistmaxsize%28completion_%29.md)
- [readAttributeDefaultNTPWithCompletion:](mtrbaseclustertimesynchronization/readattributedefaultntp%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclustertimesynchronization/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclustertimesynchronization/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeGranularityWithCompletion:](mtrbaseclustertimesynchronization/readattributegranularity%28completion_%29.md)
- [readAttributeLocalTimeWithCompletion:](mtrbaseclustertimesynchronization/readattributelocaltime%28completion_%29.md)
- [readAttributeNTPServerAvailableWithCompletion:](mtrbaseclustertimesynchronization/readattributentpserveravailable%28completion_%29.md)
- [readAttributeSupportsDNSResolveWithCompletion:](mtrbaseclustertimesynchronization/readattributesupportsdnsresolve%28completion_%29.md)
- [readAttributeTimeSourceWithCompletion:](mtrbaseclustertimesynchronization/readattributetimesource%28completion_%29.md)
- [readAttributeTimeZoneWithCompletion:](mtrbaseclustertimesynchronization/readattributetimezone%28completion_%29.md)
- [readAttributeTimeZoneDatabaseWithCompletion:](mtrbaseclustertimesynchronization/readattributetimezonedatabase%28completion_%29.md)
- [readAttributeTimeZoneListMaxSizeWithCompletion:](mtrbaseclustertimesynchronization/readattributetimezonelistmaxsize%28completion_%29.md)
- [readAttributeTrustedTimeSourceWithCompletion:](mtrbaseclustertimesynchronization/readattributetrustedtimesource%28completion_%29.md)
- [readAttributeUTCTimeWithCompletion:](mtrbaseclustertimesynchronization/readattributeutctime%28completion_%29.md)
- [setDSTOffsetWithParams:completion:](mtrbaseclustertimesynchronization/setdstoffsetwith%28__completion_%29.md): Command SetDSTOffset
- [setDefaultNTPWithParams:completion:](mtrbaseclustertimesynchronization/setdefaultntpwith%28__completion_%29.md): Command SetDefaultNTP
- [setTimeZoneWithParams:completion:](mtrbaseclustertimesynchronization/settimezonewith%28__completion_%29.md): Command SetTimeZone
- [setTrustedTimeSourceWithParams:completion:](mtrbaseclustertimesynchronization/settrustedtimesourcewith%28__completion_%29.md): Command SetTrustedTimeSource
- [setUTCTimeWithParams:completion:](mtrbaseclustertimesynchronization/setutctimewith%28__completion_%29.md): Command SetUTCTime
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertimesynchronization/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertimesynchronization/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertimesynchronization/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeDSTOffsetWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertimesynchronization/subscribeattributedstoffset%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeDSTOffsetListMaxSizeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertimesynchronization/subscribeattributedstoffsetlistmaxsize%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeDefaultNTPWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertimesynchronization/subscribeattributedefaultntp%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertimesynchronization/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertimesynchronization/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGranularityWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertimesynchronization/subscribeattributegranularity%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeLocalTimeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertimesynchronization/subscribeattributelocaltime%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeNTPServerAvailableWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertimesynchronization/subscribeattributentpserveravailable%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupportsDNSResolveWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertimesynchronization/subscribeattributesupportsdnsresolve%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeTimeSourceWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertimesynchronization/subscribeattributetimesource%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeTimeZoneWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertimesynchronization/subscribeattributetimezone%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeTimeZoneDatabaseWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertimesynchronization/subscribeattributetimezonedatabase%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeTimeZoneListMaxSizeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertimesynchronization/subscribeattributetimezonelistmaxsize%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeTrustedTimeSourceWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertimesynchronization/subscribeattributetrustedtimesource%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeUTCTimeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustertimesynchronization/subscribeattributeutctime%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertimesynchronization/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertimesynchronization/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertimesynchronization/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeDSTOffsetWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertimesynchronization/readattributedstoffset%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeDSTOffsetListMaxSizeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertimesynchronization/readattributedstoffsetlistmaxsize%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeDefaultNTPWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertimesynchronization/readattributedefaultntp%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertimesynchronization/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertimesynchronization/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGranularityWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertimesynchronization/readattributegranularity%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeLocalTimeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertimesynchronization/readattributelocaltime%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeNTPServerAvailableWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertimesynchronization/readattributentpserveravailable%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupportsDNSResolveWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertimesynchronization/readattributesupportsdnsresolve%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeTimeSourceWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertimesynchronization/readattributetimesource%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeTimeZoneWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertimesynchronization/readattributetimezone%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeTimeZoneDatabaseWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertimesynchronization/readattributetimezonedatabase%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeTimeZoneListMaxSizeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertimesynchronization/readattributetimezonelistmaxsize%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeTrustedTimeSourceWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertimesynchronization/readattributetrustedtimesource%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeUTCTimeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustertimesynchronization/readattributeutctime%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
