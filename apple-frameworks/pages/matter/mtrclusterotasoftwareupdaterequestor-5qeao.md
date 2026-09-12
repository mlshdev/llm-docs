> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterotasoftwareupdaterequestor-5qeao](https://developer.apple.com/documentation/matter/mtrclusterotasoftwareupdaterequestor-5qeao)

# MTRClusterOTASoftwareUpdateRequestor (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
class MTRClusterOTASoftwareUpdateRequestor
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterotasoftwareupdaterequestor-5qeao/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [announceOTAProvider(with:expectedValues:expectedValueInterval:completion:)](mtrclusterotasoftwareupdaterequestor-5qeao/announceotaprovider%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclusterotasoftwareupdaterequestor-5qeao/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterotasoftwareupdaterequestor-5qeao/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterotasoftwareupdaterequestor-5qeao/readattributeclusterrevision%28with_%29.md)
- [readAttributeDefaultOTAProviders(with:)](mtrclusterotasoftwareupdaterequestor-5qeao/readattributedefaultotaproviders%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterotasoftwareupdaterequestor-5qeao/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterotasoftwareupdaterequestor-5qeao/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeUpdatePossible(with:)](mtrclusterotasoftwareupdaterequestor-5qeao/readattributeupdatepossible%28with_%29.md)
- [readAttributeUpdateState(with:)](mtrclusterotasoftwareupdaterequestor-5qeao/readattributeupdatestate%28with_%29.md)
- [readAttributeUpdateStateProgress(with:)](mtrclusterotasoftwareupdaterequestor-5qeao/readattributeupdatestateprogress%28with_%29.md)
- [writeAttributeDefaultOTAProviders(withValue:expectedValueInterval:)](mtrclusterotasoftwareupdaterequestor-5qeao/writeattributedefaultotaproviders%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeDefaultOTAProviders(withValue:expectedValueInterval:params:)](mtrclusterotasoftwareupdaterequestor-5qeao/writeattributedefaultotaproviders%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)

### Inherited By

- [MTRClusterOtaSoftwareUpdateRequestor](mtrclusterotasoftwareupdaterequestor-22dfp.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRClusterOTASoftwareUpdateRequestor (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
@interface MTRClusterOTASoftwareUpdateRequestor : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpointID:queue:](mtrclusterotasoftwareupdaterequestor-5qeao/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [announceOTAProviderWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterotasoftwareupdaterequestor-5qeao/announceotaprovider%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandListWithParams:](mtrclusterotasoftwareupdaterequestor-5qeao/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterotasoftwareupdaterequestor-5qeao/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterotasoftwareupdaterequestor-5qeao/readattributeclusterrevision%28with_%29.md)
- [readAttributeDefaultOTAProvidersWithParams:](mtrclusterotasoftwareupdaterequestor-5qeao/readattributedefaultotaproviders%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterotasoftwareupdaterequestor-5qeao/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterotasoftwareupdaterequestor-5qeao/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeUpdatePossibleWithParams:](mtrclusterotasoftwareupdaterequestor-5qeao/readattributeupdatepossible%28with_%29.md)
- [readAttributeUpdateStateWithParams:](mtrclusterotasoftwareupdaterequestor-5qeao/readattributeupdatestate%28with_%29.md)
- [readAttributeUpdateStateProgressWithParams:](mtrclusterotasoftwareupdaterequestor-5qeao/readattributeupdatestateprogress%28with_%29.md)
- [writeAttributeDefaultOTAProvidersWithValue:expectedValueInterval:](mtrclusterotasoftwareupdaterequestor-5qeao/writeattributedefaultotaproviders%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeDefaultOTAProvidersWithValue:expectedValueInterval:params:](mtrclusterotasoftwareupdaterequestor-5qeao/writeattributedefaultotaproviders%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)

### Inherited By

- [MTRClusterOtaSoftwareUpdateRequestor](mtrclusterotasoftwareupdaterequestor-22dfp.md)
