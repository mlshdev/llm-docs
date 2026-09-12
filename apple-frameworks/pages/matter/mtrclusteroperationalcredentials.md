> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusteroperationalcredentials](https://developer.apple.com/documentation/matter/mtrclusteroperationalcredentials)

# MTRClusterOperationalCredentials (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterOperationalCredentials
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusteroperationalcredentials/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusteroperationalcredentials/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [addNOC(with:expectedValues:expectedValueInterval:completion:)](mtrclusteroperationalcredentials/addnoc%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [addNOC(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteroperationalcredentials/addnoc%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [addTrustedRootCertificate(with:expectedValues:expectedValueInterval:completion:)](mtrclusteroperationalcredentials/addtrustedrootcertificate%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [addTrustedRootCertificate(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteroperationalcredentials/addtrustedrootcertificate%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [attestationRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclusteroperationalcredentials/attestationrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [attestationRequest(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteroperationalcredentials/attestationrequest%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [certificateChainRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclusteroperationalcredentials/certificatechainrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [certificateChainRequest(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteroperationalcredentials/certificatechainrequest%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [csrRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclusteroperationalcredentials/csrrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [csrRequest(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteroperationalcredentials/csrrequest%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandList(with:)](mtrclusteroperationalcredentials/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusteroperationalcredentials/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusteroperationalcredentials/readattributeclusterrevision%28with_%29.md)
- [readAttributeCommissionedFabrics(with:)](mtrclusteroperationalcredentials/readattributecommissionedfabrics%28with_%29.md)
- [readAttributeCurrentFabricIndex(with:)](mtrclusteroperationalcredentials/readattributecurrentfabricindex%28with_%29.md)
- [readAttributeFabrics(with:)](mtrclusteroperationalcredentials/readattributefabrics%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusteroperationalcredentials/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusteroperationalcredentials/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeNOCs(with:)](mtrclusteroperationalcredentials/readattributenocs%28with_%29.md)
- [readAttributeSupportedFabrics(with:)](mtrclusteroperationalcredentials/readattributesupportedfabrics%28with_%29.md)
- [readAttributeTrustedRootCertificates(with:)](mtrclusteroperationalcredentials/readattributetrustedrootcertificates%28with_%29.md)
- [removeFabric(with:expectedValues:expectedValueInterval:completion:)](mtrclusteroperationalcredentials/removefabric%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [removeFabric(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteroperationalcredentials/removefabric%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [updateFabricLabel(with:expectedValues:expectedValueInterval:completion:)](mtrclusteroperationalcredentials/updatefabriclabel%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [updateFabricLabel(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteroperationalcredentials/updatefabriclabel%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [updateNOC(with:expectedValues:expectedValueInterval:completion:)](mtrclusteroperationalcredentials/updatenoc%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [updateNOC(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteroperationalcredentials/updatenoc%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

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

# MTRClusterOperationalCredentials (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterOperationalCredentials : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusteroperationalcredentials/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusteroperationalcredentials/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [addNOCWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteroperationalcredentials/addnoc%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [addNOCWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteroperationalcredentials/addnoc%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [addTrustedRootCertificateWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteroperationalcredentials/addtrustedrootcertificate%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [addTrustedRootCertificateWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteroperationalcredentials/addtrustedrootcertificate%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [attestationRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteroperationalcredentials/attestationrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [attestationRequestWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteroperationalcredentials/attestationrequest%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [certificateChainRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteroperationalcredentials/certificatechainrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [certificateChainRequestWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteroperationalcredentials/certificatechainrequest%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [CSRRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteroperationalcredentials/csrrequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [CSRRequestWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteroperationalcredentials/csrrequest%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandListWithParams:](mtrclusteroperationalcredentials/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusteroperationalcredentials/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusteroperationalcredentials/readattributeclusterrevision%28with_%29.md)
- [readAttributeCommissionedFabricsWithParams:](mtrclusteroperationalcredentials/readattributecommissionedfabrics%28with_%29.md)
- [readAttributeCurrentFabricIndexWithParams:](mtrclusteroperationalcredentials/readattributecurrentfabricindex%28with_%29.md)
- [readAttributeFabricsWithParams:](mtrclusteroperationalcredentials/readattributefabrics%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusteroperationalcredentials/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusteroperationalcredentials/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeNOCsWithParams:](mtrclusteroperationalcredentials/readattributenocs%28with_%29.md)
- [readAttributeSupportedFabricsWithParams:](mtrclusteroperationalcredentials/readattributesupportedfabrics%28with_%29.md)
- [readAttributeTrustedRootCertificatesWithParams:](mtrclusteroperationalcredentials/readattributetrustedrootcertificates%28with_%29.md)
- [removeFabricWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteroperationalcredentials/removefabric%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [removeFabricWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteroperationalcredentials/removefabric%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [updateFabricLabelWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteroperationalcredentials/updatefabriclabel%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [updateFabricLabelWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteroperationalcredentials/updatefabriclabel%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [updateNOCWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteroperationalcredentials/updatenoc%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [updateNOCWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteroperationalcredentials/updatenoc%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
