> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusteractions](https://developer.apple.com/documentation/matter/mtrclusteractions)

# MTRClusterActions (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterActions
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusteractions/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusteractions/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [disableAction(with:expectedValues:expectedValueInterval:completion:)](mtrclusteractions/disableaction%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [disableAction(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteractions/disableaction%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [disableActionWithDuration(with:expectedValues:expectedValueInterval:completion:)](mtrclusteractions/disableactionwithduration%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [disableActionWithDuration(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteractions/disableactionwithduration%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [enableAction(with:expectedValues:expectedValueInterval:completion:)](mtrclusteractions/enableaction%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [enableAction(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteractions/enableaction%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [enableActionWithDuration(with:expectedValues:expectedValueInterval:completion:)](mtrclusteractions/enableactionwithduration%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [enableActionWithDuration(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteractions/enableactionwithduration%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [instantAction(with:expectedValues:expectedValueInterval:completion:)](mtrclusteractions/instantaction%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [instantAction(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteractions/instantaction%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [instantActionWithTransition(with:expectedValues:expectedValueInterval:completion:)](mtrclusteractions/instantactionwithtransition%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [instantActionWithTransition(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteractions/instantactionwithtransition%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [pauseAction(with:expectedValues:expectedValueInterval:completion:)](mtrclusteractions/pauseaction%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [pauseAction(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteractions/pauseaction%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [pauseActionWithDuration(with:expectedValues:expectedValueInterval:completion:)](mtrclusteractions/pauseactionwithduration%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [pauseActionWithDuration(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteractions/pauseactionwithduration%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandList(with:)](mtrclusteractions/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeActionList(with:)](mtrclusteractions/readattributeactionlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusteractions/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusteractions/readattributeclusterrevision%28with_%29.md)
- [readAttributeEndpointLists(with:)](mtrclusteractions/readattributeendpointlists%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusteractions/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusteractions/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSetupURL(with:)](mtrclusteractions/readattributesetupurl%28with_%29.md)
- [resumeAction(with:expectedValues:expectedValueInterval:completion:)](mtrclusteractions/resumeaction%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [resumeAction(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteractions/resumeaction%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [startAction(with:expectedValues:expectedValueInterval:completion:)](mtrclusteractions/startaction%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [startAction(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteractions/startaction%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [startActionWithDuration(with:expectedValues:expectedValueInterval:completion:)](mtrclusteractions/startactionwithduration%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [startActionWithDuration(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteractions/startactionwithduration%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [stopAction(with:expectedValues:expectedValueInterval:completion:)](mtrclusteractions/stopaction%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [stopAction(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteractions/stopaction%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

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

# MTRClusterActions (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterActions : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusteractions/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusteractions/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [disableActionWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteractions/disableaction%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [disableActionWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteractions/disableaction%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [disableActionWithDurationWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteractions/disableactionwithduration%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [disableActionWithDurationWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteractions/disableactionwithduration%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [enableActionWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteractions/enableaction%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [enableActionWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteractions/enableaction%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [enableActionWithDurationWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteractions/enableactionwithduration%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [enableActionWithDurationWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteractions/enableactionwithduration%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [instantActionWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteractions/instantaction%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [instantActionWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteractions/instantaction%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [instantActionWithTransitionWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteractions/instantactionwithtransition%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [instantActionWithTransitionWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteractions/instantactionwithtransition%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [pauseActionWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteractions/pauseaction%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [pauseActionWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteractions/pauseaction%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [pauseActionWithDurationWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteractions/pauseactionwithduration%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [pauseActionWithDurationWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteractions/pauseactionwithduration%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandListWithParams:](mtrclusteractions/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeActionListWithParams:](mtrclusteractions/readattributeactionlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusteractions/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusteractions/readattributeclusterrevision%28with_%29.md)
- [readAttributeEndpointListsWithParams:](mtrclusteractions/readattributeendpointlists%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusteractions/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusteractions/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSetupURLWithParams:](mtrclusteractions/readattributesetupurl%28with_%29.md)
- [resumeActionWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteractions/resumeaction%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [resumeActionWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteractions/resumeaction%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [startActionWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteractions/startaction%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [startActionWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteractions/startaction%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [startActionWithDurationWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteractions/startactionwithduration%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [startActionWithDurationWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteractions/startactionwithduration%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [stopActionWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteractions/stopaction%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [stopActionWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteractions/stopaction%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
