> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterenergyevse](https://developer.apple.com/documentation/matter/mtrbaseclusterenergyevse)

# MTRBaseClusterEnergyEVSE (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Energy EVSE

## Declaration

```swift
class MTRBaseClusterEnergyEVSE
```

<a id="overview"></a>

## Overview

Electric Vehicle Supply Equipment (EVSE) is equipment used to charge an Electric Vehicle (EV) or Plug-In Hybrid Electric Vehicle. This cluster provides an interface to the functionality of Electric Vehicle Supply Equipment (EVSE) management.

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrbaseclusterenergyevse/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

### Instance Methods

- [clearTargets(completion:)](mtrbaseclusterenergyevse/cleartargets%28completion_%29.md)
- [clearTargets(with:completion:)](mtrbaseclusterenergyevse/cleartargets%28with_completion_%29.md): Command ClearTargets
- [disable(completion:)](mtrbaseclusterenergyevse/disable%28completion_%29.md)
- [disable(with:completion:)](mtrbaseclusterenergyevse/disable%28with_completion_%29.md): Command Disable
- [enableCharging(with:completion:)](mtrbaseclusterenergyevse/enablecharging%28with_completion_%29.md): Command EnableCharging
- [getTargetsWith(\_:completion:)](mtrbaseclusterenergyevse/gettargetswith%28__completion_%29.md): Command GetTargets
- [getTargetsWithCompletion(\_:)](mtrbaseclusterenergyevse/gettargetswithcompletion%28__%29.md)
- [readAttributeAcceptedCommandList(completion:)](mtrbaseclusterenergyevse/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeApproximateEVEfficiency(completion:)](mtrbaseclusterenergyevse/readattributeapproximateevefficiency%28completion_%29.md)
- [readAttributeAttributeList(completion:)](mtrbaseclusterenergyevse/readattributeattributelist%28completion_%29.md)
- [readAttributeChargingEnabledUntil(completion:)](mtrbaseclusterenergyevse/readattributechargingenableduntil%28completion_%29.md)
- [readAttributeCircuitCapacity(completion:)](mtrbaseclusterenergyevse/readattributecircuitcapacity%28completion_%29.md)
- [readAttributeClusterRevision(completion:)](mtrbaseclusterenergyevse/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFaultState(completion:)](mtrbaseclusterenergyevse/readattributefaultstate%28completion_%29.md)
- [readAttributeFeatureMap(completion:)](mtrbaseclusterenergyevse/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandList(completion:)](mtrbaseclusterenergyevse/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeMaximumChargeCurrent(completion:)](mtrbaseclusterenergyevse/readattributemaximumchargecurrent%28completion_%29.md)
- [readAttributeMinimumChargeCurrent(completion:)](mtrbaseclusterenergyevse/readattributeminimumchargecurrent%28completion_%29.md)
- [readAttributeNextChargeRequiredEnergy(completion:)](mtrbaseclusterenergyevse/readattributenextchargerequiredenergy%28completion_%29.md)
- [readAttributeNextChargeStartTime(completion:)](mtrbaseclusterenergyevse/readattributenextchargestarttime%28completion_%29.md)
- [readAttributeNextChargeTargetSoC(completion:)](mtrbaseclusterenergyevse/readattributenextchargetargetsoc%28completion_%29.md)
- [readAttributeNextChargeTargetTime(completion:)](mtrbaseclusterenergyevse/readattributenextchargetargettime%28completion_%29.md)
- [readAttributeRandomizationDelayWindow(completion:)](mtrbaseclusterenergyevse/readattributerandomizationdelaywindow%28completion_%29.md)
- [readAttributeSessionDuration(completion:)](mtrbaseclusterenergyevse/readattributesessionduration%28completion_%29.md)
- [readAttributeSessionEnergyCharged(completion:)](mtrbaseclusterenergyevse/readattributesessionenergycharged%28completion_%29.md)
- [readAttributeSessionID(completion:)](mtrbaseclusterenergyevse/readattributesessionid%28completion_%29.md)
- [readAttributeState(completion:)](mtrbaseclusterenergyevse/readattributestate%28completion_%29.md)
- [readAttributeSupplyState(completion:)](mtrbaseclusterenergyevse/readattributesupplystate%28completion_%29.md)
- [readAttributeUserMaximumChargeCurrent(completion:)](mtrbaseclusterenergyevse/readattributeusermaximumchargecurrent%28completion_%29.md)
- [setTargetsWith(\_:completion:)](mtrbaseclusterenergyevse/settargetswith%28__completion_%29.md): Command SetTargets
- [startDiagnostics(completion:)](mtrbaseclusterenergyevse/startdiagnostics%28completion_%29.md)
- [startDiagnostics(with:completion:)](mtrbaseclusterenergyevse/startdiagnostics%28with_completion_%29.md): Command StartDiagnostics
- [subscribeAttributeAcceptedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeApproximateEVEfficiency(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributeapproximateevefficiency%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeChargingEnabledUntil(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributechargingenableduntil%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCircuitCapacity(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributecircuitcapacity%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevision(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFaultState(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributefaultstate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMap(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandList(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMaximumChargeCurrent(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributemaximumchargecurrent%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMinimumChargeCurrent(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributeminimumchargecurrent%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeNextChargeRequiredEnergy(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributenextchargerequiredenergy%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeNextChargeStartTime(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributenextchargestarttime%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeNextChargeTargetSoC(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributenextchargetargetsoc%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeNextChargeTargetTime(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributenextchargetargettime%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeRandomizationDelayWindow(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributerandomizationdelaywindow%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSessionDuration(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributesessionduration%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSessionEnergyCharged(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributesessionenergycharged%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSessionID(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributesessionid%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeState(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributestate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupplyState(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributesupplystate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeUserMaximumChargeCurrent(with:subscriptionEstablished:reportHandler:)](mtrbaseclusterenergyevse/subscribeattributeusermaximumchargecurrent%28with_subscriptionestablished_reporthandler_%29.md)
- [writeAttributeApproximateEVEfficiency(withValue:completion:)](mtrbaseclusterenergyevse/writeattributeapproximateevefficiency%28withvalue_completion_%29.md)
- [writeAttributeApproximateEVEfficiency(withValue:params:completion:)](mtrbaseclusterenergyevse/writeattributeapproximateevefficiency%28withvalue_params_completion_%29.md)
- [writeAttributeRandomizationDelayWindow(withValue:completion:)](mtrbaseclusterenergyevse/writeattributerandomizationdelaywindow%28withvalue_completion_%29.md)
- [writeAttributeRandomizationDelayWindow(withValue:params:completion:)](mtrbaseclusterenergyevse/writeattributerandomizationdelaywindow%28withvalue_params_completion_%29.md)
- [writeAttributeUserMaximumChargeCurrent(withValue:completion:)](mtrbaseclusterenergyevse/writeattributeusermaximumchargecurrent%28withvalue_completion_%29.md)
- [writeAttributeUserMaximumChargeCurrent(withValue:params:completion:)](mtrbaseclusterenergyevse/writeattributeusermaximumchargecurrent%28withvalue_params_completion_%29.md)

### Type Methods

- [readAttributeAcceptedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeApproximateEVEfficiency(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributeapproximateevefficiency%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeChargingEnabledUntil(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributechargingenableduntil%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCircuitCapacity(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributecircuitcapacity%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevision(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFaultState(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributefaultstate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMap(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandList(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMaximumChargeCurrent(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributemaximumchargecurrent%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMinimumChargeCurrent(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributeminimumchargecurrent%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeNextChargeRequiredEnergy(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributenextchargerequiredenergy%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeNextChargeStartTime(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributenextchargestarttime%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeNextChargeTargetSoC(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributenextchargetargetsoc%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeNextChargeTargetTime(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributenextchargetargettime%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeRandomizationDelayWindow(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributerandomizationdelaywindow%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSessionDuration(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributesessionduration%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSessionEnergyCharged(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributesessionenergycharged%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSessionID(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributesessionid%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeState(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributestate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupplyState(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributesupplystate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeUserMaximumChargeCurrent(withClusterStateCache:endpoint:queue:completion:)](mtrbaseclusterenergyevse/readattributeusermaximumchargecurrent%28withclusterstatecache_endpoint_queue_completion_%29.md)

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

# MTRBaseClusterEnergyEVSE (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Energy EVSE

## Declaration

```objectivec
@interface MTRBaseClusterEnergyEVSE : MTRGenericBaseCluster
```

<a id="overview"></a>

## Overview

Electric Vehicle Supply Equipment (EVSE) is equipment used to charge an Electric Vehicle (EV) or Plug-In Hybrid Electric Vehicle. This cluster provides an interface to the functionality of Electric Vehicle Supply Equipment (EVSE) management.

## Topics

### Instance Methods

- [clearTargetsWithCompletion:](mtrbaseclusterenergyevse/cleartargets%28completion_%29.md)
- [clearTargetsWithParams:completion:](mtrbaseclusterenergyevse/cleartargets%28with_completion_%29.md): Command ClearTargets
- [disableWithCompletion:](mtrbaseclusterenergyevse/disable%28completion_%29.md)
- [disableWithParams:completion:](mtrbaseclusterenergyevse/disable%28with_completion_%29.md): Command Disable
- [enableChargingWithParams:completion:](mtrbaseclusterenergyevse/enablecharging%28with_completion_%29.md): Command EnableCharging
- [getTargetsWithParams:completion:](mtrbaseclusterenergyevse/gettargetswith%28__completion_%29.md): Command GetTargets
- [getTargetsWithCompletion:](mtrbaseclusterenergyevse/gettargetswithcompletion%28__%29.md)
- [initWithDevice:endpointID:queue:](mtrbaseclusterenergyevse/init%28device_endpointid_queue_%29.md): For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithCompletion:](mtrbaseclusterenergyevse/readattributeacceptedcommandlist%28completion_%29.md)
- [readAttributeApproximateEVEfficiencyWithCompletion:](mtrbaseclusterenergyevse/readattributeapproximateevefficiency%28completion_%29.md)
- [readAttributeAttributeListWithCompletion:](mtrbaseclusterenergyevse/readattributeattributelist%28completion_%29.md)
- [readAttributeChargingEnabledUntilWithCompletion:](mtrbaseclusterenergyevse/readattributechargingenableduntil%28completion_%29.md)
- [readAttributeCircuitCapacityWithCompletion:](mtrbaseclusterenergyevse/readattributecircuitcapacity%28completion_%29.md)
- [readAttributeClusterRevisionWithCompletion:](mtrbaseclusterenergyevse/readattributeclusterrevision%28completion_%29.md)
- [readAttributeFaultStateWithCompletion:](mtrbaseclusterenergyevse/readattributefaultstate%28completion_%29.md)
- [readAttributeFeatureMapWithCompletion:](mtrbaseclusterenergyevse/readattributefeaturemap%28completion_%29.md)
- [readAttributeGeneratedCommandListWithCompletion:](mtrbaseclusterenergyevse/readattributegeneratedcommandlist%28completion_%29.md)
- [readAttributeMaximumChargeCurrentWithCompletion:](mtrbaseclusterenergyevse/readattributemaximumchargecurrent%28completion_%29.md)
- [readAttributeMinimumChargeCurrentWithCompletion:](mtrbaseclusterenergyevse/readattributeminimumchargecurrent%28completion_%29.md)
- [readAttributeNextChargeRequiredEnergyWithCompletion:](mtrbaseclusterenergyevse/readattributenextchargerequiredenergy%28completion_%29.md)
- [readAttributeNextChargeStartTimeWithCompletion:](mtrbaseclusterenergyevse/readattributenextchargestarttime%28completion_%29.md)
- [readAttributeNextChargeTargetSoCWithCompletion:](mtrbaseclusterenergyevse/readattributenextchargetargetsoc%28completion_%29.md)
- [readAttributeNextChargeTargetTimeWithCompletion:](mtrbaseclusterenergyevse/readattributenextchargetargettime%28completion_%29.md)
- [readAttributeRandomizationDelayWindowWithCompletion:](mtrbaseclusterenergyevse/readattributerandomizationdelaywindow%28completion_%29.md)
- [readAttributeSessionDurationWithCompletion:](mtrbaseclusterenergyevse/readattributesessionduration%28completion_%29.md)
- [readAttributeSessionEnergyChargedWithCompletion:](mtrbaseclusterenergyevse/readattributesessionenergycharged%28completion_%29.md)
- [readAttributeSessionIDWithCompletion:](mtrbaseclusterenergyevse/readattributesessionid%28completion_%29.md)
- [readAttributeStateWithCompletion:](mtrbaseclusterenergyevse/readattributestate%28completion_%29.md)
- [readAttributeSupplyStateWithCompletion:](mtrbaseclusterenergyevse/readattributesupplystate%28completion_%29.md)
- [readAttributeUserMaximumChargeCurrentWithCompletion:](mtrbaseclusterenergyevse/readattributeusermaximumchargecurrent%28completion_%29.md)
- [setTargetsWithParams:completion:](mtrbaseclusterenergyevse/settargetswith%28__completion_%29.md): Command SetTargets
- [startDiagnosticsWithCompletion:](mtrbaseclusterenergyevse/startdiagnostics%28completion_%29.md)
- [startDiagnosticsWithParams:completion:](mtrbaseclusterenergyevse/startdiagnostics%28with_completion_%29.md): Command StartDiagnostics
- [subscribeAttributeAcceptedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributeacceptedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeApproximateEVEfficiencyWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributeapproximateevefficiency%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeAttributeListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributeattributelist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeChargingEnabledUntilWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributechargingenableduntil%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeCircuitCapacityWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributecircuitcapacity%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeClusterRevisionWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributeclusterrevision%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFaultStateWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributefaultstate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeFeatureMapWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributefeaturemap%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeGeneratedCommandListWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributegeneratedcommandlist%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMaximumChargeCurrentWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributemaximumchargecurrent%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeMinimumChargeCurrentWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributeminimumchargecurrent%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeNextChargeRequiredEnergyWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributenextchargerequiredenergy%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeNextChargeStartTimeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributenextchargestarttime%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeNextChargeTargetSoCWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributenextchargetargetsoc%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeNextChargeTargetTimeWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributenextchargetargettime%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeRandomizationDelayWindowWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributerandomizationdelaywindow%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSessionDurationWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributesessionduration%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSessionEnergyChargedWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributesessionenergycharged%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSessionIDWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributesessionid%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeStateWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributestate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeSupplyStateWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributesupplystate%28with_subscriptionestablished_reporthandler_%29.md)
- [subscribeAttributeUserMaximumChargeCurrentWithParams:subscriptionEstablished:reportHandler:](mtrbaseclusterenergyevse/subscribeattributeusermaximumchargecurrent%28with_subscriptionestablished_reporthandler_%29.md)
- [writeAttributeApproximateEVEfficiencyWithValue:completion:](mtrbaseclusterenergyevse/writeattributeapproximateevefficiency%28withvalue_completion_%29.md)
- [writeAttributeApproximateEVEfficiencyWithValue:params:completion:](mtrbaseclusterenergyevse/writeattributeapproximateevefficiency%28withvalue_params_completion_%29.md)
- [writeAttributeRandomizationDelayWindowWithValue:completion:](mtrbaseclusterenergyevse/writeattributerandomizationdelaywindow%28withvalue_completion_%29.md)
- [writeAttributeRandomizationDelayWindowWithValue:params:completion:](mtrbaseclusterenergyevse/writeattributerandomizationdelaywindow%28withvalue_params_completion_%29.md)
- [writeAttributeUserMaximumChargeCurrentWithValue:completion:](mtrbaseclusterenergyevse/writeattributeusermaximumchargecurrent%28withvalue_completion_%29.md)
- [writeAttributeUserMaximumChargeCurrentWithValue:params:completion:](mtrbaseclusterenergyevse/writeattributeusermaximumchargecurrent%28withvalue_params_completion_%29.md)

### Type Methods

- [readAttributeAcceptedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributeacceptedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeApproximateEVEfficiencyWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributeapproximateevefficiency%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeAttributeListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributeattributelist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeChargingEnabledUntilWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributechargingenableduntil%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeCircuitCapacityWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributecircuitcapacity%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeClusterRevisionWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributeclusterrevision%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFaultStateWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributefaultstate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeFeatureMapWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributefeaturemap%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeGeneratedCommandListWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributegeneratedcommandlist%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMaximumChargeCurrentWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributemaximumchargecurrent%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeMinimumChargeCurrentWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributeminimumchargecurrent%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeNextChargeRequiredEnergyWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributenextchargerequiredenergy%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeNextChargeStartTimeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributenextchargestarttime%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeNextChargeTargetSoCWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributenextchargetargetsoc%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeNextChargeTargetTimeWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributenextchargetargettime%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeRandomizationDelayWindowWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributerandomizationdelaywindow%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSessionDurationWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributesessionduration%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSessionEnergyChargedWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributesessionenergycharged%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSessionIDWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributesessionid%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeStateWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributestate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeSupplyStateWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributesupplystate%28withclusterstatecache_endpoint_queue_completion_%29.md)
- [readAttributeUserMaximumChargeCurrentWithClusterStateCache:endpoint:queue:completion:](mtrbaseclusterenergyevse/readattributeusermaximumchargecurrent%28withclusterstatecache_endpoint_queue_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericBaseCluster](mtrgenericbasecluster.md)
