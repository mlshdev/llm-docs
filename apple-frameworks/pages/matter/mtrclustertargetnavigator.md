> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclustertargetnavigator](https://developer.apple.com/documentation/matter/mtrclustertargetnavigator)

# MTRClusterTargetNavigator (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterTargetNavigator
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclustertargetnavigator/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclustertargetnavigator/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [navigateTarget(with:expectedValues:expectedValueInterval:completion:)](mtrclustertargetnavigator/navigatetarget%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [navigateTarget(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustertargetnavigator/navigatetarget%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandList(with:)](mtrclustertargetnavigator/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclustertargetnavigator/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclustertargetnavigator/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentTarget(with:)](mtrclustertargetnavigator/readattributecurrenttarget%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclustertargetnavigator/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclustertargetnavigator/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeTargetList(with:)](mtrclustertargetnavigator/readattributetargetlist%28with_%29.md)

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

# MTRClusterTargetNavigator (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterTargetNavigator : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclustertargetnavigator/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclustertargetnavigator/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [navigateTargetWithParams:expectedValues:expectedValueInterval:completion:](mtrclustertargetnavigator/navigatetarget%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [navigateTargetWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustertargetnavigator/navigatetarget%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandListWithParams:](mtrclustertargetnavigator/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclustertargetnavigator/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclustertargetnavigator/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentTargetWithParams:](mtrclustertargetnavigator/readattributecurrenttarget%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclustertargetnavigator/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclustertargetnavigator/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeTargetListWithParams:](mtrclustertargetnavigator/readattributetargetlist%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
