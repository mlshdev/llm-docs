> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterdeviceenergymanagement](https://developer.apple.com/documentation/matter/mtrclusterdeviceenergymanagement)

# MTRClusterDeviceEnergyManagement (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Device Energy Management This cluster allows a client to manage the power draw of a device. An example of such a client could be an Energy Management System (EMS) which controls an Energy Smart Appliance (ESA).

## Declaration

```swift
class MTRClusterDeviceEnergyManagement
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterdeviceenergymanagement/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [cancelPowerAdjustRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclusterdeviceenergymanagement/cancelpoweradjustrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [cancelPowerAdjustRequest(withExpectedValues:expectedValueInterval:completion:)](mtrclusterdeviceenergymanagement/cancelpoweradjustrequest%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [cancelRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclusterdeviceenergymanagement/cancelrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [cancelRequest(withExpectedValues:expectedValueInterval:completion:)](mtrclusterdeviceenergymanagement/cancelrequest%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [modifyForecastRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclusterdeviceenergymanagement/modifyforecastrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [pauseRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclusterdeviceenergymanagement/pauserequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [powerAdjustRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclusterdeviceenergymanagement/poweradjustrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAbsMaxPower(with:)](mtrclusterdeviceenergymanagement/readattributeabsmaxpower%28with_%29.md)
- [readAttributeAbsMinPower(with:)](mtrclusterdeviceenergymanagement/readattributeabsminpower%28with_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclusterdeviceenergymanagement/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterdeviceenergymanagement/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterdeviceenergymanagement/readattributeclusterrevision%28with_%29.md)
- [readAttributeESACanGenerate(with:)](mtrclusterdeviceenergymanagement/readattributeesacangenerate%28with_%29.md)
- [readAttributeESAState(with:)](mtrclusterdeviceenergymanagement/readattributeesastate%28with_%29.md)
- [readAttributeESAType(with:)](mtrclusterdeviceenergymanagement/readattributeesatype%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterdeviceenergymanagement/readattributefeaturemap%28with_%29.md)
- [readAttributeForecast(with:)](mtrclusterdeviceenergymanagement/readattributeforecast%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterdeviceenergymanagement/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeOptOutState(with:)](mtrclusterdeviceenergymanagement/readattributeoptoutstate%28with_%29.md)
- [readAttributePowerAdjustmentCapability(with:)](mtrclusterdeviceenergymanagement/readattributepoweradjustmentcapability%28with_%29.md)
- [requestConstraintBasedForecast(with:expectedValues:expectedValueInterval:completion:)](mtrclusterdeviceenergymanagement/requestconstraintbasedforecast%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [resumeRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclusterdeviceenergymanagement/resumerequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [resumeRequest(withExpectedValues:expectedValueInterval:completion:)](mtrclusterdeviceenergymanagement/resumerequest%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [startTimeAdjustRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclusterdeviceenergymanagement/starttimeadjustrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)

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

# MTRClusterDeviceEnergyManagement (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Device Energy Management This cluster allows a client to manage the power draw of a device. An example of such a client could be an Energy Management System (EMS) which controls an Energy Smart Appliance (ESA).

## Declaration

```objectivec
@interface MTRClusterDeviceEnergyManagement : MTRGenericCluster
```

## Topics

### Instance Methods

- [cancelPowerAdjustRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterdeviceenergymanagement/cancelpoweradjustrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [cancelPowerAdjustRequestWithExpectedValues:expectedValueInterval:completion:](mtrclusterdeviceenergymanagement/cancelpoweradjustrequest%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [cancelRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterdeviceenergymanagement/cancelrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [cancelRequestWithExpectedValues:expectedValueInterval:completion:](mtrclusterdeviceenergymanagement/cancelrequest%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [initWithDevice:endpointID:queue:](mtrclusterdeviceenergymanagement/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [modifyForecastRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterdeviceenergymanagement/modifyforecastrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [pauseRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterdeviceenergymanagement/pauserequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [powerAdjustRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterdeviceenergymanagement/poweradjustrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAbsMaxPowerWithParams:](mtrclusterdeviceenergymanagement/readattributeabsmaxpower%28with_%29.md)
- [readAttributeAbsMinPowerWithParams:](mtrclusterdeviceenergymanagement/readattributeabsminpower%28with_%29.md)
- [readAttributeAcceptedCommandListWithParams:](mtrclusterdeviceenergymanagement/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterdeviceenergymanagement/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterdeviceenergymanagement/readattributeclusterrevision%28with_%29.md)
- [readAttributeESACanGenerateWithParams:](mtrclusterdeviceenergymanagement/readattributeesacangenerate%28with_%29.md)
- [readAttributeESAStateWithParams:](mtrclusterdeviceenergymanagement/readattributeesastate%28with_%29.md)
- [readAttributeESATypeWithParams:](mtrclusterdeviceenergymanagement/readattributeesatype%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterdeviceenergymanagement/readattributefeaturemap%28with_%29.md)
- [readAttributeForecastWithParams:](mtrclusterdeviceenergymanagement/readattributeforecast%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterdeviceenergymanagement/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeOptOutStateWithParams:](mtrclusterdeviceenergymanagement/readattributeoptoutstate%28with_%29.md)
- [readAttributePowerAdjustmentCapabilityWithParams:](mtrclusterdeviceenergymanagement/readattributepoweradjustmentcapability%28with_%29.md)
- [requestConstraintBasedForecastWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterdeviceenergymanagement/requestconstraintbasedforecast%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [resumeRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterdeviceenergymanagement/resumerequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [resumeRequestWithExpectedValues:expectedValueInterval:completion:](mtrclusterdeviceenergymanagement/resumerequest%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [startTimeAdjustRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterdeviceenergymanagement/starttimeadjustrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
