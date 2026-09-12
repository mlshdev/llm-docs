> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterenergyevse](https://developer.apple.com/documentation/matter/mtrclusterenergyevse)

# MTRClusterEnergyEVSE (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Energy EVSE Electric Vehicle Supply Equipment (EVSE) is equipment used to charge an Electric Vehicle (EV) or Plug-In Hybrid Electric Vehicle. This cluster provides an interface to the functionality of Electric Vehicle Supply Equipment (EVSE) management.

## Declaration

```swift
class MTRClusterEnergyEVSE
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterenergyevse/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [clearTargets(with:expectedValues:expectedValueInterval:completion:)](mtrclusterenergyevse/cleartargets%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [clearTargets(withExpectedValues:expectedValueInterval:completion:)](mtrclusterenergyevse/cleartargets%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [disable(with:expectedValues:expectedValueInterval:completion:)](mtrclusterenergyevse/disable%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [disable(withExpectedValues:expectedValueInterval:completion:)](mtrclusterenergyevse/disable%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [enableCharging(with:expectedValues:expectedValueInterval:completion:)](mtrclusterenergyevse/enablecharging%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [getTargetsWith(\_:expectedValues:expectedValueInterval:completion:)](mtrclusterenergyevse/gettargetswith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [getTargetsWithExpectedValues(\_:expectedValueInterval:completion:)](mtrclusterenergyevse/gettargetswithexpectedvalues%28__expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclusterenergyevse/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeApproximateEVEfficiency(with:)](mtrclusterenergyevse/readattributeapproximateevefficiency%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterenergyevse/readattributeattributelist%28with_%29.md)
- [readAttributeChargingEnabledUntil(with:)](mtrclusterenergyevse/readattributechargingenableduntil%28with_%29.md)
- [readAttributeCircuitCapacity(with:)](mtrclusterenergyevse/readattributecircuitcapacity%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterenergyevse/readattributeclusterrevision%28with_%29.md)
- [readAttributeFaultState(with:)](mtrclusterenergyevse/readattributefaultstate%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterenergyevse/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterenergyevse/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeMaximumChargeCurrent(with:)](mtrclusterenergyevse/readattributemaximumchargecurrent%28with_%29.md)
- [readAttributeMinimumChargeCurrent(with:)](mtrclusterenergyevse/readattributeminimumchargecurrent%28with_%29.md)
- [readAttributeNextChargeRequiredEnergy(with:)](mtrclusterenergyevse/readattributenextchargerequiredenergy%28with_%29.md)
- [readAttributeNextChargeStartTime(with:)](mtrclusterenergyevse/readattributenextchargestarttime%28with_%29.md)
- [readAttributeNextChargeTargetSoC(with:)](mtrclusterenergyevse/readattributenextchargetargetsoc%28with_%29.md)
- [readAttributeNextChargeTargetTime(with:)](mtrclusterenergyevse/readattributenextchargetargettime%28with_%29.md)
- [readAttributeRandomizationDelayWindow(with:)](mtrclusterenergyevse/readattributerandomizationdelaywindow%28with_%29.md)
- [readAttributeSessionDuration(with:)](mtrclusterenergyevse/readattributesessionduration%28with_%29.md)
- [readAttributeSessionEnergyCharged(with:)](mtrclusterenergyevse/readattributesessionenergycharged%28with_%29.md)
- [readAttributeSessionID(with:)](mtrclusterenergyevse/readattributesessionid%28with_%29.md)
- [readAttributeState(with:)](mtrclusterenergyevse/readattributestate%28with_%29.md)
- [readAttributeSupplyState(with:)](mtrclusterenergyevse/readattributesupplystate%28with_%29.md)
- [readAttributeUserMaximumChargeCurrent(with:)](mtrclusterenergyevse/readattributeusermaximumchargecurrent%28with_%29.md)
- [setTargetsWith(\_:expectedValues:expectedValueInterval:completion:)](mtrclusterenergyevse/settargetswith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [startDiagnostics(with:expectedValues:expectedValueInterval:completion:)](mtrclusterenergyevse/startdiagnostics%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [startDiagnostics(withExpectedValues:expectedValueInterval:completion:)](mtrclusterenergyevse/startdiagnostics%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [writeAttributeApproximateEVEfficiency(withValue:expectedValueInterval:)](mtrclusterenergyevse/writeattributeapproximateevefficiency%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeApproximateEVEfficiency(withValue:expectedValueInterval:params:)](mtrclusterenergyevse/writeattributeapproximateevefficiency%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeRandomizationDelayWindow(withValue:expectedValueInterval:)](mtrclusterenergyevse/writeattributerandomizationdelaywindow%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeRandomizationDelayWindow(withValue:expectedValueInterval:params:)](mtrclusterenergyevse/writeattributerandomizationdelaywindow%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeUserMaximumChargeCurrent(withValue:expectedValueInterval:)](mtrclusterenergyevse/writeattributeusermaximumchargecurrent%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeUserMaximumChargeCurrent(withValue:expectedValueInterval:params:)](mtrclusterenergyevse/writeattributeusermaximumchargecurrent%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterEnergyEVSE (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Energy EVSE Electric Vehicle Supply Equipment (EVSE) is equipment used to charge an Electric Vehicle (EV) or Plug-In Hybrid Electric Vehicle. This cluster provides an interface to the functionality of Electric Vehicle Supply Equipment (EVSE) management.

## Declaration

```objectivec
@interface MTRClusterEnergyEVSE : MTRGenericCluster
```

## Topics

### Instance Methods

- [clearTargetsWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterenergyevse/cleartargets%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [clearTargetsWithExpectedValues:expectedValueInterval:completion:](mtrclusterenergyevse/cleartargets%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [disableWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterenergyevse/disable%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [disableWithExpectedValues:expectedValueInterval:completion:](mtrclusterenergyevse/disable%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [enableChargingWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterenergyevse/enablecharging%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [getTargetsWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterenergyevse/gettargetswith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [getTargetsWithExpectedValues:expectedValueInterval:completion:](mtrclusterenergyevse/gettargetswithexpectedvalues%28__expectedvalueinterval_completion_%29.md)
- [initWithDevice:endpointID:queue:](mtrclusterenergyevse/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithParams:](mtrclusterenergyevse/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeApproximateEVEfficiencyWithParams:](mtrclusterenergyevse/readattributeapproximateevefficiency%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterenergyevse/readattributeattributelist%28with_%29.md)
- [readAttributeChargingEnabledUntilWithParams:](mtrclusterenergyevse/readattributechargingenableduntil%28with_%29.md)
- [readAttributeCircuitCapacityWithParams:](mtrclusterenergyevse/readattributecircuitcapacity%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterenergyevse/readattributeclusterrevision%28with_%29.md)
- [readAttributeFaultStateWithParams:](mtrclusterenergyevse/readattributefaultstate%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterenergyevse/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterenergyevse/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeMaximumChargeCurrentWithParams:](mtrclusterenergyevse/readattributemaximumchargecurrent%28with_%29.md)
- [readAttributeMinimumChargeCurrentWithParams:](mtrclusterenergyevse/readattributeminimumchargecurrent%28with_%29.md)
- [readAttributeNextChargeRequiredEnergyWithParams:](mtrclusterenergyevse/readattributenextchargerequiredenergy%28with_%29.md)
- [readAttributeNextChargeStartTimeWithParams:](mtrclusterenergyevse/readattributenextchargestarttime%28with_%29.md)
- [readAttributeNextChargeTargetSoCWithParams:](mtrclusterenergyevse/readattributenextchargetargetsoc%28with_%29.md)
- [readAttributeNextChargeTargetTimeWithParams:](mtrclusterenergyevse/readattributenextchargetargettime%28with_%29.md)
- [readAttributeRandomizationDelayWindowWithParams:](mtrclusterenergyevse/readattributerandomizationdelaywindow%28with_%29.md)
- [readAttributeSessionDurationWithParams:](mtrclusterenergyevse/readattributesessionduration%28with_%29.md)
- [readAttributeSessionEnergyChargedWithParams:](mtrclusterenergyevse/readattributesessionenergycharged%28with_%29.md)
- [readAttributeSessionIDWithParams:](mtrclusterenergyevse/readattributesessionid%28with_%29.md)
- [readAttributeStateWithParams:](mtrclusterenergyevse/readattributestate%28with_%29.md)
- [readAttributeSupplyStateWithParams:](mtrclusterenergyevse/readattributesupplystate%28with_%29.md)
- [readAttributeUserMaximumChargeCurrentWithParams:](mtrclusterenergyevse/readattributeusermaximumchargecurrent%28with_%29.md)
- [setTargetsWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterenergyevse/settargetswith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [startDiagnosticsWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterenergyevse/startdiagnostics%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [startDiagnosticsWithExpectedValues:expectedValueInterval:completion:](mtrclusterenergyevse/startdiagnostics%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [writeAttributeApproximateEVEfficiencyWithValue:expectedValueInterval:](mtrclusterenergyevse/writeattributeapproximateevefficiency%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeApproximateEVEfficiencyWithValue:expectedValueInterval:params:](mtrclusterenergyevse/writeattributeapproximateevefficiency%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeRandomizationDelayWindowWithValue:expectedValueInterval:](mtrclusterenergyevse/writeattributerandomizationdelaywindow%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeRandomizationDelayWindowWithValue:expectedValueInterval:params:](mtrclusterenergyevse/writeattributerandomizationdelaywindow%28withvalue_expectedvalueinterval_params_%29.md)
- [writeAttributeUserMaximumChargeCurrentWithValue:expectedValueInterval:](mtrclusterenergyevse/writeattributeusermaximumchargecurrent%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeUserMaximumChargeCurrentWithValue:expectedValueInterval:params:](mtrclusterenergyevse/writeattributeusermaximumchargecurrent%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
