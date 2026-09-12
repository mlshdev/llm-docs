> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterdiagnosticlogs](https://developer.apple.com/documentation/matter/mtrclusterdiagnosticlogs)

# MTRClusterDiagnosticLogs (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterDiagnosticLogs
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusterdiagnosticlogs/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusterdiagnosticlogs/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterdiagnosticlogs/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterdiagnosticlogs/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterdiagnosticlogs/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterdiagnosticlogs/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterdiagnosticlogs/readattributegeneratedcommandlist%28with_%29.md)
- [retrieveLogsRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclusterdiagnosticlogs/retrievelogsrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [retrieveLogsRequest(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusterdiagnosticlogs/retrievelogsrequest%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

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

# MTRClusterDiagnosticLogs (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterDiagnosticLogs : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusterdiagnosticlogs/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusterdiagnosticlogs/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclusterdiagnosticlogs/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterdiagnosticlogs/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterdiagnosticlogs/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterdiagnosticlogs/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterdiagnosticlogs/readattributegeneratedcommandlist%28with_%29.md)
- [retrieveLogsRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterdiagnosticlogs/retrievelogsrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [retrieveLogsRequestWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusterdiagnosticlogs/retrievelogsrequest%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
