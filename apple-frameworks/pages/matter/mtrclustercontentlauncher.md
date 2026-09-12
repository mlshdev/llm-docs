> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclustercontentlauncher](https://developer.apple.com/documentation/matter/mtrclustercontentlauncher)

# MTRClusterContentLauncher (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterContentLauncher
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclustercontentlauncher/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclustercontentlauncher/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [launchContent(with:expectedValues:expectedValueInterval:completion:)](mtrclustercontentlauncher/launchcontent%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [launchContent(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustercontentlauncher/launchcontent%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [launchURL(with:expectedValues:expectedValueInterval:completion:)](mtrclustercontentlauncher/launchurl%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [launchURL(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclustercontentlauncher/launchurl%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptHeader(with:)](mtrclustercontentlauncher/readattributeacceptheader%28with_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclustercontentlauncher/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclustercontentlauncher/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclustercontentlauncher/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclustercontentlauncher/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclustercontentlauncher/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSupportedStreamingProtocols(with:)](mtrclustercontentlauncher/readattributesupportedstreamingprotocols%28with_%29.md)
- [writeAttributeSupportedStreamingProtocols(withValue:expectedValueInterval:)](mtrclustercontentlauncher/writeattributesupportedstreamingprotocols%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeSupportedStreamingProtocols(withValue:expectedValueInterval:params:)](mtrclustercontentlauncher/writeattributesupportedstreamingprotocols%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterContentLauncher (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterContentLauncher : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclustercontentlauncher/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclustercontentlauncher/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [launchContentWithParams:expectedValues:expectedValueInterval:completion:](mtrclustercontentlauncher/launchcontent%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [launchContentWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustercontentlauncher/launchcontent%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [launchURLWithParams:expectedValues:expectedValueInterval:completion:](mtrclustercontentlauncher/launchurl%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [launchURLWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclustercontentlauncher/launchurl%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptHeaderWithParams:](mtrclustercontentlauncher/readattributeacceptheader%28with_%29.md)
- [readAttributeAcceptedCommandListWithParams:](mtrclustercontentlauncher/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclustercontentlauncher/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclustercontentlauncher/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclustercontentlauncher/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclustercontentlauncher/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSupportedStreamingProtocolsWithParams:](mtrclustercontentlauncher/readattributesupportedstreamingprotocols%28with_%29.md)
- [writeAttributeSupportedStreamingProtocolsWithValue:expectedValueInterval:](mtrclustercontentlauncher/writeattributesupportedstreamingprotocols%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeSupportedStreamingProtocolsWithValue:expectedValueInterval:params:](mtrclustercontentlauncher/writeattributesupportedstreamingprotocols%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
