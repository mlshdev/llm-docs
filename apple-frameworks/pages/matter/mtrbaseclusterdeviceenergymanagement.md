> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdeviceenergymanagement](https://developer.apple.com/documentation/matter/mtrbaseclusterdeviceenergymanagement)

# MTRBaseClusterDeviceEnergyManagement (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Device Energy Management

## Declaration

```swift
class MTRBaseClusterDeviceEnergyManagement
```

<a id="overview"></a>

## Overview

This cluster allows a client to manage the power draw of a device. An example of such a client could be an Energy Management System (EMS) which controls an Energy Smart Appliance (ESA).

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterdeviceenergymanagement/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [cancelPowerAdjustRequest(completion:)](mtrbaseclusterdeviceenergymanagement/cancelpoweradjustrequest%28completion_%29.md)
- [cancelPowerAdjustRequest(with:completion:)](mtrbaseclusterdeviceenergymanagement/cancelpoweradjustrequest%28with_completion_%29.md): Command CancelPowerAdjustRequest
- [cancelRequest(completion:)](mtrbaseclusterdeviceenergymanagement/cancelrequest%28completion_%29.md)
- [cancelRequest(with:completion:)](mtrbaseclusterdeviceenergymanagement/cancelrequest%28with_completion_%29.md): Command CancelRequest
- [modifyForecastRequest(with:completion:)](mtrbaseclusterdeviceenergymanagement/modifyforecastrequest%28with_completion_%29.md): Command ModifyForecastRequest
- [pauseRequest(with:completion:)](mtrbaseclusterdeviceenergymanagement/pauserequest%28with_completion_%29.md): Command PauseRequest
- [powerAdjustRequest(with:completion:)](mtrbaseclusterdeviceenergymanagement/poweradjustrequest%28with_completion_%29.md): Command PowerAdjustRequest
- [readAttributeAbsMaxPower(completion:)](mtrbaseclusterdeviceenergymanagement/readattributeabsmaxpower%28completion_%29.md)
- [readAttributeAbsMinPower(completion:)](mtrbaseclusterdeviceenergymanagement/readattributeabsminpower%28completion_%29.md)
- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterdeviceenergymanagement/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterdeviceenergymanagement/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterdeviceenergymanagement/readattributeclusterrevision%28completion_%29.md)
- [readAttributeESACanGenerate(completion:)](mtrbaseclusterdeviceenergymanagement/readattributeesacangenerate%28completion_%29.md)
- [readAttributeESAState(completion:)](mtrbaseclusterdeviceenergymanagement/readattributeesastate%28completion_%29.md)
- [readAttributeESAType(completion:)](mtrbaseclusterdeviceenergymanagement/readattributeesatype%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterdeviceenergymanagement/readattributefeaturemap%28completion_%29.md)
- [readAttributeForecast(completion:)](mtrbaseclusterdeviceenergymanagement/readattributeforecast%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterdeviceenergymanagement/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeOptOutState(completion:)](mtrbaseclusterdeviceenergymanagement/readattributeoptoutstate%28completion_%29.md)
- [readAttributePowerAdjustmentCapability(completion:)](mtrbaseclusterdeviceenergymanagement/readattributepoweradjustmentcapability%28completion_%29.md)
- [requestConstraintBasedForecast(with:completion:)](mtrbaseclusterdeviceenergymanagement/requestconstraintbasedforecast%28with_completion_%29.md): Command RequestConstraintBasedForecast
- [resumeRequest(completion:)](mtrbaseclusterdeviceenergymanagement/resumerequest%28completion_%29.md)
- [resumeRequest(with:completion:)](mtrbaseclusterdeviceenergymanagement/resumerequest%28with_completion_%29.md): Command ResumeRequest
- [startTimeAdjustRequest(with:completion:)](mtrbaseclusterdeviceenergymanagement/starttimeadjustrequest%28with_completion_%29.md): Command StartTimeAdjustRequest
- [subscribeAttributeAbsMaxPower(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagement/subscribeattributeabsmaxpower%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAbsMinPower(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagement/subscribeattributeabsminpower%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagement/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagement/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagement/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeESACanGenerate(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagement/subscribeattributeesacangenerate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeESAState(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagement/subscribeattributeesastate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeESAType(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagement/subscribeattributeesatype%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagement/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeForecast(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagement/subscribeattributeforecast%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagement/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOptOutState(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagement/subscribeattributeoptoutstate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributePowerAdjustmentCapability(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterdeviceenergymanagement/subscribeattributepoweradjustmentcapability%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAbsMaxPower(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagement/readattributeabsmaxpower%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAbsMinPower(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagement/readattributeabsminpower%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagement/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagement/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagement/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeESACanGenerate(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagement/readattributeesacangenerate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeESAState(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagement/readattributeesastate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeESAType(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagement/readattributeesatype%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagement/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeForecast(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagement/readattributeforecast%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagement/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOptOutState(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagement/readattributeoptoutstate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributePowerAdjustmentCapability(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterdeviceenergymanagement/readattributepoweradjustmentcapability%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterDeviceEnergyManagement (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Device Energy Management

## Declaration

```objectivec
@interface MTRBaseClusterDeviceEnergyManagement : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

This cluster allows a client to manage the power draw of a device. An example of such a client could be an Energy Management System (EMS) which controls an Energy Smart Appliance (ESA).

## Topics

### Instance Methods

- [cancelPowerAdjustRequestWithCompletion:](mtrbaseclusterdeviceenergymanagement/cancelpoweradjustrequest%28completion_%29.md)
- [cancelPowerAdjustRequestWithParams:completion:](mtrbaseclusterdeviceenergymanagement/cancelpoweradjustrequest%28with_completion_%29.md): Command CancelPowerAdjustRequest
- [cancelRequestWithCompletion:](mtrbaseclusterdeviceenergymanagement/cancelrequest%28completion_%29.md)
- [cancelRequestWithParams:completion:](mtrbaseclusterdeviceenergymanagement/cancelrequest%28with_completion_%29.md): Command CancelRequest
- [initWithDevice:endpointID:queue:](mtrbaseclusterdeviceenergymanagement/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [modifyForecastRequestWithParams:completion:](mtrbaseclusterdeviceenergymanagement/modifyforecastrequest%28with_completion_%29.md): Command ModifyForecastRequest
- [pauseRequestWithParams:completion:](mtrbaseclusterdeviceenergymanagement/pauserequest%28with_completion_%29.md): Command PauseRequest
- [powerAdjustRequestWithParams:completion:](mtrbaseclusterdeviceenergymanagement/poweradjustrequest%28with_completion_%29.md): Command PowerAdjustRequest
- [readAttributeAbsMaxPowerWithCompletion:](mtrbaseclusterdeviceenergymanagement/readattributeabsmaxpower%28completion_%29.md)
- [readAttributeAbsMinPowerWithCompletion:](mtrbaseclusterdeviceenergymanagement/readattributeabsminpower%28completion_%29.md)
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterdeviceenergymanagement/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterdeviceenergymanagement/readattributeattributelist%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterdeviceenergymanagement/readattributeclusterrevision%28completion_%29.md)
- [readAttributeESACanGenerateWithCompletion:](mtrbaseclusterdeviceenergymanagement/readattributeesacangenerate%28completion_%29.md)
- [readAttributeESAStateWithCompletion:](mtrbaseclusterdeviceenergymanagement/readattributeesastate%28completion_%29.md)
- [readAttributeESATypeWithCompletion:](mtrbaseclusterdeviceenergymanagement/readattributeesatype%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterdeviceenergymanagement/readattributefeaturemap%28completion_%29.md)
- [readAttributeForecastWithCompletion:](mtrbaseclusterdeviceenergymanagement/readattributeforecast%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterdeviceenergymanagement/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeOptOutStateWithCompletion:](mtrbaseclusterdeviceenergymanagement/readattributeoptoutstate%28completion_%29.md)
- [readAttributePowerAdjustmentCapabilityWithCompletion:](mtrbaseclusterdeviceenergymanagement/readattributepoweradjustmentcapability%28completion_%29.md)
- [requestConstraintBasedForecastWithParams:completion:](mtrbaseclusterdeviceenergymanagement/requestconstraintbasedforecast%28with_completion_%29.md): Command RequestConstraintBasedForecast
- [resumeRequestWithCompletion:](mtrbaseclusterdeviceenergymanagement/resumerequest%28completion_%29.md)
- [resumeRequestWithParams:completion:](mtrbaseclusterdeviceenergymanagement/resumerequest%28with_completion_%29.md): Command ResumeRequest
- [startTimeAdjustRequestWithParams:completion:](mtrbaseclusterdeviceenergymanagement/starttimeadjustrequest%28with_completion_%29.md): Command StartTimeAdjustRequest
- [subscribeAttributeAbsMaxPowerWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagement/subscribeattributeabsmaxpower%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAbsMinPowerWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagement/subscribeattributeabsminpower%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagement/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagement/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagement/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeESACanGenerateWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagement/subscribeattributeesacangenerate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeESAStateWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagement/subscribeattributeesastate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeESATypeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagement/subscribeattributeesatype%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagement/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeForecastWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagement/subscribeattributeforecast%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagement/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeOptOutStateWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagement/subscribeattributeoptoutstate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributePowerAdjustmentCapabilityWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterdeviceenergymanagement/subscribeattributepoweradjustmentcapability%28with_subscriptionestablished_reporthandler_%29.md)

### Type Methods

- [readAttributeAbsMaxPowerWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagement/readattributeabsmaxpower%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAbsMinPowerWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagement/readattributeabsminpower%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagement/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagement/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagement/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeESACanGenerateWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagement/readattributeesacangenerate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeESAStateWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagement/readattributeesastate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeESATypeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagement/readattributeesatype%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagement/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeForecastWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagement/readattributeforecast%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagement/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeOptOutStateWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagement/readattributeoptoutstate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributePowerAdjustmentCapabilityWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterdeviceenergymanagement/readattributepoweradjustmentcapability%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
