> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclustersoftwarediagnostics](https://developer.apple.com/documentation/matter/mtrclustersoftwarediagnostics)

# MTRClusterSoftwareDiagnostics (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterSoftwareDiagnostics
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclustersoftwarediagnostics/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclustersoftwarediagnostics/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclustersoftwarediagnostics/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclustersoftwarediagnostics/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclustersoftwarediagnostics/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentHeapFree(with:)](mtrclustersoftwarediagnostics/readattributecurrentheapfree%28with_%29.md)
- [readAttributeCurrentHeapHighWatermark(with:)](mtrclustersoftwarediagnostics/readattributecurrentheaphighwatermark%28with_%29.md)
- [readAttributeCurrentHeapUsed(with:)](mtrclustersoftwarediagnostics/readattributecurrentheapused%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclustersoftwarediagnostics/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclustersoftwarediagnostics/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeThreadMetrics(with:)](mtrclustersoftwarediagnostics/readattributethreadmetrics%28with_%29.md)
- [resetWatermarks(with:expectedValues:expectedValueInterval:completion:)](mtrclustersoftwarediagnostics/resetwatermarks%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [resetWatermarks(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustersoftwarediagnostics/resetwatermarks%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [resetWatermarks(withExpectedValues:expectedValueInterval:completion:)](mtrclustersoftwarediagnostics/resetwatermarks%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [resetWatermarks(withExpectedValues:expectedValueInterval:completionHandler:)](mtrclustersoftwarediagnostics/resetwatermarks%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

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

# MTRClusterSoftwareDiagnostics (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterSoftwareDiagnostics : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclustersoftwarediagnostics/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclustersoftwarediagnostics/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclustersoftwarediagnostics/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclustersoftwarediagnostics/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclustersoftwarediagnostics/readattributeclusterrevision%28with_%29.md)
- [readAttributeCurrentHeapFreeWithParams:](mtrclustersoftwarediagnostics/readattributecurrentheapfree%28with_%29.md)
- [readAttributeCurrentHeapHighWatermarkWithParams:](mtrclustersoftwarediagnostics/readattributecurrentheaphighwatermark%28with_%29.md)
- [readAttributeCurrentHeapUsedWithParams:](mtrclustersoftwarediagnostics/readattributecurrentheapused%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclustersoftwarediagnostics/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclustersoftwarediagnostics/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeThreadMetricsWithParams:](mtrclustersoftwarediagnostics/readattributethreadmetrics%28with_%29.md)
- [resetWatermarksWithParams:expectedValues:expectedValueInterval:completion:](mtrclustersoftwarediagnostics/resetwatermarks%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [resetWatermarksWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustersoftwarediagnostics/resetwatermarks%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [resetWatermarksWithExpectedValues:expectedValueInterval:completion:](mtrclustersoftwarediagnostics/resetwatermarks%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [resetWatermarksWithExpectedValues:expectedValueInterval:completionHandler:](mtrclustersoftwarediagnostics/resetwatermarks%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
