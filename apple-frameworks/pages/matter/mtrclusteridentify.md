> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusteridentify](https://developer.apple.com/documentation/matter/mtrclusteridentify)

# MTRClusterIdentify (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterIdentify
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusteridentify/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusteridentify/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [identify(with:expectedValues:expectedValueInterval:completion:)](mtrclusteridentify/identify%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [identify(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteridentify/identify%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandList(with:)](mtrclusteridentify/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusteridentify/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusteridentify/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusteridentify/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusteridentify/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeIdentifyTime(with:)](mtrclusteridentify/readattributeidentifytime%28with_%29.md)
- [readAttributeIdentifyType(with:)](mtrclusteridentify/readattributeidentifytype%28with_%29.md)
- [triggerEffect(with:expectedValues:expectedValueInterval:completion:)](mtrclusteridentify/triggereffect%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [triggerEffect(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteridentify/triggereffect%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [writeAttributeIdentifyTime(withValue:expectedValueInterval:)](mtrclusteridentify/writeattributeidentifytime%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeIdentifyTime(withValue:expectedValueInterval:params:)](mtrclusteridentify/writeattributeidentifytime%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterIdentify (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterIdentify : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusteridentify/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusteridentify/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [identifyWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteridentify/identify%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [identifyWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteridentify/identify%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandListWithParams:](mtrclusteridentify/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusteridentify/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusteridentify/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusteridentify/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusteridentify/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeIdentifyTimeWithParams:](mtrclusteridentify/readattributeidentifytime%28with_%29.md)
- [readAttributeIdentifyTypeWithParams:](mtrclusteridentify/readattributeidentifytype%28with_%29.md)
- [triggerEffectWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteridentify/triggereffect%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [triggerEffectWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteridentify/triggereffect%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [writeAttributeIdentifyTimeWithValue:expectedValueInterval:](mtrclusteridentify/writeattributeidentifytime%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeIdentifyTimeWithValue:expectedValueInterval:params:](mtrclusteridentify/writeattributeidentifytime%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
