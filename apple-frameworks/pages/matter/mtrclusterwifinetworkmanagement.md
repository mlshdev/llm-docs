> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterwifinetworkmanagement](https://developer.apple.com/documentation/matter/mtrclusterwifinetworkmanagement)

# MTRClusterWiFiNetworkManagement (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Wi-Fi Network Management Functionality to retrieve operational information about a managed Wi-Fi network.

## Declaration

```swift
class MTRClusterWiFiNetworkManagement
```

## Topics

### Initializers

- [init(device:endpointID:queue:)](mtrclusterwifinetworkmanagement/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.

### Instance Methods

- [networkPassphraseRequest(with:expectedValues:expectedValueInterval:completion:)](mtrclusterwifinetworkmanagement/networkpassphraserequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [networkPassphraseRequest(withExpectedValues:expectedValueInterval:completion:)](mtrclusterwifinetworkmanagement/networkpassphraserequest%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandList(with:)](mtrclusterwifinetworkmanagement/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterwifinetworkmanagement/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterwifinetworkmanagement/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterwifinetworkmanagement/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterwifinetworkmanagement/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributePassphraseSurrogate(with:)](mtrclusterwifinetworkmanagement/readattributepassphrasesurrogate%28with_%29.md)
- [readAttributeSSID(with:)](mtrclusterwifinetworkmanagement/readattributessid%28with_%29.md)

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

# MTRClusterWiFiNetworkManagement (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Cluster Wi-Fi Network Management Functionality to retrieve operational information about a managed Wi-Fi network.

## Declaration

```objectivec
@interface MTRClusterWiFiNetworkManagement : MTRGenericCluster
```

## Topics

### Instance Methods

- [initWithDevice:endpointID:queue:](mtrclusterwifinetworkmanagement/init%28device_endpointid_queue_%29.md): For all instance methods that take a completion (i.e. command invocations), the completion will be called on the provided queue.
- [networkPassphraseRequestWithParams:expectedValues:expectedValueInterval:completion:](mtrclusterwifinetworkmanagement/networkpassphraserequest%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [networkPassphraseRequestWithExpectedValues:expectedValueInterval:completion:](mtrclusterwifinetworkmanagement/networkpassphraserequest%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [readAttributeAcceptedCommandListWithParams:](mtrclusterwifinetworkmanagement/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterwifinetworkmanagement/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterwifinetworkmanagement/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterwifinetworkmanagement/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterwifinetworkmanagement/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributePassphraseSurrogateWithParams:](mtrclusterwifinetworkmanagement/readattributepassphrasesurrogate%28with_%29.md)
- [readAttributeSSIDWithParams:](mtrclusterwifinetworkmanagement/readattributessid%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
