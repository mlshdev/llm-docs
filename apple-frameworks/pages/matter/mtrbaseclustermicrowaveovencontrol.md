> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustermicrowaveovencontrol](https://developer.apple.com/documentation/matter/mtrbaseclustermicrowaveovencontrol)

# MTRBaseClusterMicrowaveOvenControl (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Microwave Oven Control

## Declaration

```swift
class MTRBaseClusterMicrowaveOvenControl
```

<a id="overview"></a>

## Overview

Attributes and commands for configuring the microwave oven control, and reporting cooking stats.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclustermicrowaveovencontrol/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [addMoreTime(with:completion:)](mtrbaseclustermicrowaveovencontrol/addmoretime%28with_completion_%29.md): Command AddMoreTime
- [readAttributeAcceptedCommandList(completion:)](mtrbaseclustermicrowaveovencontrol/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclustermicrowaveovencontrol/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclustermicrowaveovencontrol/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCookTime(completion:)](mtrbaseclustermicrowaveovencontrol/readattributecooktime%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclustermicrowaveovencontrol/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclustermicrowaveovencontrol/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeMaxCookTime(completion:)](mtrbaseclustermicrowaveovencontrol/readattributemaxcooktime%28completion_%29.md)
- [readAttributeMaxPower(completion:)](mtrbaseclustermicrowaveovencontrol/readattributemaxpower%28completion_%29.md)
- [readAttributeMinPower(completion:)](mtrbaseclustermicrowaveovencontrol/readattributeminpower%28completion_%29.md)
- [readAttributePowerSetting(completion:)](mtrbaseclustermicrowaveovencontrol/readattributepowersetting%28completion_%29.md)
- [readAttributePowerStep(completion:)](mtrbaseclustermicrowaveovencontrol/readattributepowerstep%28completion_%29.md)
- [readAttributeWattRating(completion:)](mtrbaseclustermicrowaveovencontrol/readattributewattrating%28completion_%29.md)
- [setCookingParametersWith(\_:completion:)](mtrbaseclustermicrowaveovencontrol/setcookingparameterswith%28__completion_%29.md): Command SetCookingParameters
- [setCookingParametersWithCompletion(\_:)](mtrbaseclustermicrowaveovencontrol/setcookingparameterswithcompletion%28__%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclustermicrowaveovencontrol/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclustermicrowaveovencontrol/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclustermicrowaveovencontrol/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCookTime(with:subscriptionEstablished:reportHandler:)](mtrbaseclustermicrowaveovencontrol/subscribeattributecooktime%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclustermicrowaveovencontrol/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclustermicrowaveovencontrol/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMaxCookTime(with:subscriptionEstablished:reportHandler:)](mtrbaseclustermicrowaveovencontrol/subscribeattributemaxcooktime%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMaxPower(with:subscriptionEstablished:reportHandler:)](mtrbaseclustermicrowaveovencontrol/subscribeattributemaxpower%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMinPower(with:subscriptionEstablished:reportHandler:)](mtrbaseclustermicrowaveovencontrol/subscribeattributeminpower%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributePowerSetting(with:subscriptionEstablished:reportHandler:)](mtrbaseclustermicrowaveovencontrol/subscribeattributepowersetting%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributePowerStep(with:subscriptionEstablished:reportHandler:)](mtrbaseclustermicrowaveovencontrol/subscribeattributepowerstep%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeWattRating(with:subscriptionEstablished:reportHandler:)](mtrbaseclustermicrowaveovencontrol/subscribeattributewattrating%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustermicrowaveovencontrol/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustermicrowaveovencontrol/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustermicrowaveovencontrol/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCookTime(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustermicrowaveovencontrol/readattributecooktime%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustermicrowaveovencontrol/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustermicrowaveovencontrol/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMaxCookTime(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustermicrowaveovencontrol/readattributemaxcooktime%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMaxPower(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustermicrowaveovencontrol/readattributemaxpower%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMinPower(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustermicrowaveovencontrol/readattributeminpower%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributePowerSetting(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustermicrowaveovencontrol/readattributepowersetting%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributePowerStep(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustermicrowaveovencontrol/readattributepowerstep%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeWattRating(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclustermicrowaveovencontrol/readattributewattrating%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterMicrowaveOvenControl (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Microwave Oven Control

## Declaration

```objectivec
@interface MTRBaseClusterMicrowaveOvenControl : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

Attributes and commands for configuring the microwave oven control, and reporting cooking stats.

## Topics

### Instance Methods

- [addMoreTimeWithParams:completion:](mtrbaseclustermicrowaveovencontrol/addmoretime%28with_completion_%29.md): Command AddMoreTime
- [initWithDevice:endpointID:queue:](mtrbaseclustermicrowaveovencontrol/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclustermicrowaveovencontrol/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclustermicrowaveovencontrol/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclustermicrowaveovencontrol/readattributeclusterrevision%28completion_%29.md)
- [readAttributeCookTimeWithCompletion:](mtrbaseclustermicrowaveovencontrol/readattributecooktime%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclustermicrowaveovencontrol/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclustermicrowaveovencontrol/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeMaxCookTimeWithCompletion:](mtrbaseclustermicrowaveovencontrol/readattributemaxcooktime%28completion_%29.md)
- [readAttributeMaxPowerWithCompletion:](mtrbaseclustermicrowaveovencontrol/readattributemaxpower%28completion_%29.md)
- [readAttributeMinPowerWithCompletion:](mtrbaseclustermicrowaveovencontrol/readattributeminpower%28completion_%29.md)
- [readAttributePowerSettingWithCompletion:](mtrbaseclustermicrowaveovencontrol/readattributepowersetting%28completion_%29.md)
- [readAttributePowerStepWithCompletion:](mtrbaseclustermicrowaveovencontrol/readattributepowerstep%28completion_%29.md)
- [readAttributeWattRatingWithCompletion:](mtrbaseclustermicrowaveovencontrol/readattributewattrating%28completion_%29.md)
- [setCookingParametersWithParams:completion:](mtrbaseclustermicrowaveovencontrol/setcookingparameterswith%28__completion_%29.md): Command SetCookingParameters
- [setCookingParametersWithCompletion:](mtrbaseclustermicrowaveovencontrol/setcookingparameterswithcompletion%28__%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustermicrowaveovencontrol/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustermicrowaveovencontrol/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustermicrowaveovencontrol/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCookTimeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustermicrowaveovencontrol/subscribeattributecooktime%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustermicrowaveovencontrol/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustermicrowaveovencontrol/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMaxCookTimeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustermicrowaveovencontrol/subscribeattributemaxcooktime%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMaxPowerWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustermicrowaveovencontrol/subscribeattributemaxpower%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMinPowerWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustermicrowaveovencontrol/subscribeattributeminpower%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributePowerSettingWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustermicrowaveovencontrol/subscribeattributepowersetting%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributePowerStepWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustermicrowaveovencontrol/subscribeattributepowerstep%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeWattRatingWithParams:subscriptionEstablished:reportHandler:](mtrbaseclustermicrowaveovencontrol/subscribeattributewattrating%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustermicrowaveovencontrol/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustermicrowaveovencontrol/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustermicrowaveovencontrol/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCookTimeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustermicrowaveovencontrol/readattributecooktime%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustermicrowaveovencontrol/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustermicrowaveovencontrol/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMaxCookTimeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustermicrowaveovencontrol/readattributemaxcooktime%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMaxPowerWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustermicrowaveovencontrol/readattributemaxpower%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMinPowerWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustermicrowaveovencontrol/readattributeminpower%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributePowerSettingWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustermicrowaveovencontrol/readattributepowersetting%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributePowerStepWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustermicrowaveovencontrol/readattributepowerstep%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeWattRatingWithClusterStateCache:endpoint:queue:completion:](mtrbaseclustermicrowaveovencontrol/readattributewattrating%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
