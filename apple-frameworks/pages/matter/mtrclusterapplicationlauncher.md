> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterapplicationlauncher](https://developer.apple.com/documentation/matter/mtrclusterapplicationlauncher)

# MTRClusterApplicationLauncher (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterApplicationLauncher
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusterapplicationlauncher/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusterapplicationlauncher/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [hideApp(with:expectedValues:expectedValueInterval:completion:)](mtrclusterapplicationlauncher/hideapp%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [hideApp(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterapplicationlauncher/hideapp%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [hideApp(withExpectedValues:expectedValueInterval:completion:)](mtrclusterapplicationlauncher/hideapp%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [launchApp(with:expectedValues:expectedValueInterval:completion:)](mtrclusterapplicationlauncher/launchapp%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [launchApp(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterapplicationlauncher/launchapp%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [launchApp(withExpectedValues:expectedValueInterval:completion:)](mtrclusterapplicationlauncher/launchapp%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclusterapplicationlauncher/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterapplicationlauncher/readattributeattributelist%28with_%29.md)
- [readAttributeCatalogList(with:)](mtrclusterapplicationlauncher/readattributecataloglist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterapplicationlauncher/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentApp(with:)](mtrclusterapplicationlauncher/readattributecurrentapp%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterapplicationlauncher/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterapplicationlauncher/readattributegeneratedcommandlist%28with_%29.md)
- [stopApp(with:expectedValues:expectedValueInterval:completion:)](mtrclusterapplicationlauncher/stopapp%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [stopApp(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterapplicationlauncher/stopapp%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [stopApp(withExpectedValues:expectedValueInterval:completion:)](mtrclusterapplicationlauncher/stopapp%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [writeAttributeCurrentApp(withValue:expectedValueInterval:)](mtrclusterapplicationlauncher/writeattributecurrentapp%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeCurrentApp(withValue:expectedValueInterval:params:)](mtrclusterapplicationlauncher/writeattributecurrentapp%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterApplicationLauncher (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterApplicationLauncher : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusterapplicationlauncher/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusterapplicationlauncher/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [hideAppWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterapplicationlauncher/hideapp%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [hideAppWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterapplicationlauncher/hideapp%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [hideAppWithExpectedValues:expectedValueInterval:completion:](mtrclusterapplicationlauncher/hideapp%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [launchAppWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterapplicationlauncher/launchapp%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [launchAppWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterapplicationlauncher/launchapp%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [launchAppWithExpectedValues:expectedValueInterval:completion:](mtrclusterapplicationlauncher/launchapp%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandListWithParams:](mtrclusterapplicationlauncher/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterapplicationlauncher/readattributeattributelist%28with_%29.md)
- [readAttributeCatalogListWithParams:](mtrclusterapplicationlauncher/readattributecataloglist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterapplicationlauncher/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentAppWithParams:](mtrclusterapplicationlauncher/readattributecurrentapp%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterapplicationlauncher/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterapplicationlauncher/readattributegeneratedcommandlist%28with_%29.md)
- [stopAppWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterapplicationlauncher/stopapp%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [stopAppWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterapplicationlauncher/stopapp%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [stopAppWithExpectedValues:expectedValueInterval:completion:](mtrclusterapplicationlauncher/stopapp%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [writeAttributeCurrentAppWithValue:expectedValueInterval:](mtrclusterapplicationlauncher/writeattributecurrentapp%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeCurrentAppWithValue:expectedValueInterval:params:](mtrclusterapplicationlauncher/writeattributecurrentapp%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
