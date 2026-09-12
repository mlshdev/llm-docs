> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclustermicrowaveovencontrol](https://developer.apple.com/documentation/matter/mtrclustermicrowaveovencontrol)

# MTRClusterMicrowaveOvenControl (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Microwave Oven Control Attributes and commands for configuring the microwave oven control, and reporting cooking stats.

## Declaration

```swift
class MTRClusterMicrowaveOvenControl
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclustermicrowaveovencontrol/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [addMoreTime(with:expectedValues:expectedValueInterval:completion:)](mtrclustermicrowaveovencontrol/addmoretime%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclustermicrowaveovencontrol/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclustermicrowaveovencontrol/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclustermicrowaveovencontrol/readattributeclusterrevision%28with_%29.md)
- [readAttributeCookTime(with:)](mtrclustermicrowaveovencontrol/readattributecooktime%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclustermicrowaveovencontrol/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclustermicrowaveovencontrol/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeMaxCookTime(with:)](mtrclustermicrowaveovencontrol/readattributemaxcooktime%28with_%29.md)
- [readAttributeMaxPower(with:)](mtrclustermicrowaveovencontrol/readattributemaxpower%28with_%29.md)
- [readAttributeMinPower(with:)](mtrclustermicrowaveovencontrol/readattributeminpower%28with_%29.md)
- [readAttributePowerSetting(with:)](mtrclustermicrowaveovencontrol/readattributepowersetting%28with_%29.md)
- [readAttributePowerStep(with:)](mtrclustermicrowaveovencontrol/readattributepowerstep%28with_%29.md)
- [readAttributeWattRating(with:)](mtrclustermicrowaveovencontrol/readattributewattrating%28with_%29.md)
- [setCookingParametersWith(\_:expectedValues:expectedValueInterval:completion:)](mtrclustermicrowaveovencontrol/setcookingparameterswith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [setCookingParametersWithExpectedValues(\_:expectedValueInterval:completion:)](mtrclustermicrowaveovencontrol/setcookingparameterswithexpectedvalues%28__expectedvalueinterval_completion_%29.md)

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

# MTRClusterMicrowaveOvenControl (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Microwave Oven Control Attributes and commands for configuring the microwave oven control, and reporting cooking stats.

## Declaration

```objectivec
@interface MTRClusterMicrowaveOvenControl : MTRGenericCluster
```

## Topics

### Instance Methods

- [addMoreTimeWithParams:expectedValues:expectedValueInterval:completion:](mtrclustermicrowaveovencontrol/addmoretime%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [initWithDevice:endpointID:queue:](mtrclustermicrowaveovencontrol/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [readAttributeAcceptedCommandListWithParams:](mtrclustermicrowaveovencontrol/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclustermicrowaveovencontrol/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclustermicrowaveovencontrol/readattributeclusterrevision%28with_%29.md)
- [readAttributeCookTimeWithParams:](mtrclustermicrowaveovencontrol/readattributecooktime%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclustermicrowaveovencontrol/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclustermicrowaveovencontrol/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeMaxCookTimeWithParams:](mtrclustermicrowaveovencontrol/readattributemaxcooktime%28with_%29.md)
- [readAttributeMaxPowerWithParams:](mtrclustermicrowaveovencontrol/readattributemaxpower%28with_%29.md)
- [readAttributeMinPowerWithParams:](mtrclustermicrowaveovencontrol/readattributeminpower%28with_%29.md)
- [readAttributePowerSettingWithParams:](mtrclustermicrowaveovencontrol/readattributepowersetting%28with_%29.md)
- [readAttributePowerStepWithParams:](mtrclustermicrowaveovencontrol/readattributepowerstep%28with_%29.md)
- [readAttributeWattRatingWithParams:](mtrclustermicrowaveovencontrol/readattributewattrating%28with_%29.md)
- [setCookingParametersWithParams:expectedValues:expectedValueInterval:completion:](mtrclustermicrowaveovencontrol/setcookingparameterswith%28__expectedvalues_expectedvalueinterval_completion_%29.md)
- [setCookingParametersWithExpectedValues:expectedValueInterval:completion:](mtrclustermicrowaveovencontrol/setcookingparameterswithexpectedvalues%28__expectedvalueinterval_completion_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
