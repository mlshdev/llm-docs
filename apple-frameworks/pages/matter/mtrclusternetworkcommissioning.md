> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusternetworkcommissioning](https://developer.apple.com/documentation/matter/mtrclusternetworkcommissioning)

# MTRClusterNetworkCommissioning (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterNetworkCommissioning
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusternetworkcommissioning/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusternetworkcommissioning/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [addOrUpdateThreadNetwork(with:expectedValues:expectedValueInterval:completion:)](mtrclusternetworkcommissioning/addorupdatethreadnetwork%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [addOrUpdateThreadNetwork(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusternetworkcommissioning/addorupdatethreadnetwork%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [addOrUpdateWiFiNetwork(with:expectedValues:expectedValueInterval:completion:)](mtrclusternetworkcommissioning/addorupdatewifinetwork%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [addOrUpdateWiFiNetwork(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusternetworkcommissioning/addorupdatewifinetwork%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [connectNetwork(with:expectedValues:expectedValueInterval:completion:)](mtrclusternetworkcommissioning/connectnetwork%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [connectNetwork(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusternetworkcommissioning/connectnetwork%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandList(with:)](mtrclusternetworkcommissioning/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusternetworkcommissioning/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusternetworkcommissioning/readattributeclusterrevision%28with_%29.md)
- [readAttributeConnectMaxTimeSeconds(with:)](mtrclusternetworkcommissioning/readattributeconnectmaxtimeseconds%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusternetworkcommissioning/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusternetworkcommissioning/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeInterfaceEnabled(with:)](mtrclusternetworkcommissioning/readattributeinterfaceenabled%28with_%29.md)
- [readAttributeLastConnectErrorValue(with:)](mtrclusternetworkcommissioning/readattributelastconnecterrorvalue%28with_%29.md)
- [readAttributeLastNetworkID(with:)](mtrclusternetworkcommissioning/readattributelastnetworkid%28with_%29.md)
- [readAttributeLastNetworkingStatus(with:)](mtrclusternetworkcommissioning/readattributelastnetworkingstatus%28with_%29.md)
- [readAttributeMaxNetworks(with:)](mtrclusternetworkcommissioning/readattributemaxnetworks%28with_%29.md)
- [readAttributeNetworks(with:)](mtrclusternetworkcommissioning/readattributenetworks%28with_%29.md)
- [readAttributeScanMaxTimeSeconds(with:)](mtrclusternetworkcommissioning/readattributescanmaxtimeseconds%28with_%29.md)
- [removeNetwork(with:expectedValues:expectedValueInterval:completion:)](mtrclusternetworkcommissioning/removenetwork%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [removeNetwork(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusternetworkcommissioning/removenetwork%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [reorderNetwork(with:expectedValues:expectedValueInterval:completion:)](mtrclusternetworkcommissioning/reordernetwork%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [reorderNetwork(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusternetworkcommissioning/reordernetwork%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [scanNetworks(with:expectedValues:expectedValueInterval:completion:)](mtrclusternetworkcommissioning/scannetworks%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [scanNetworks(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusternetworkcommissioning/scannetworks%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [scanNetworks(withExpectedValues:expectedValueInterval:completion:)](mtrclusternetworkcommissioning/scannetworks%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [writeAttributeInterfaceEnabled(withValue:expectedValueInterval:)](mtrclusternetworkcommissioning/writeattributeinterfaceenabled%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeInterfaceEnabled(withValue:expectedValueInterval:params:)](mtrclusternetworkcommissioning/writeattributeinterfaceenabled%28withvalue_expectedvalueinterval_params_%29.md)
- [readAttributeSupportedThreadFeatures(with:)](mtrclusternetworkcommissioning/readattributesupportedthreadfeatures%28with_%29.md)
- [readAttributeSupportedWiFiBands(with:)](mtrclusternetworkcommissioning/readattributesupportedwifibands%28with_%29.md)
- [readAttributeThreadVersion(with:)](mtrclusternetworkcommissioning/readattributethreadversion%28with_%29.md)

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

# MTRClusterNetworkCommissioning (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterNetworkCommissioning : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusternetworkcommissioning/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusternetworkcommissioning/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [addOrUpdateThreadNetworkWithParams:expectedValues:expectedValueInterval:completion:](mtrclusternetworkcommissioning/addorupdatethreadnetwork%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [addOrUpdateThreadNetworkWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusternetworkcommissioning/addorupdatethreadnetwork%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [addOrUpdateWiFiNetworkWithParams:expectedValues:expectedValueInterval:completion:](mtrclusternetworkcommissioning/addorupdatewifinetwork%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [addOrUpdateWiFiNetworkWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusternetworkcommissioning/addorupdatewifinetwork%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [connectNetworkWithParams:expectedValues:expectedValueInterval:completion:](mtrclusternetworkcommissioning/connectnetwork%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [connectNetworkWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusternetworkcommissioning/connectnetwork%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandListWithParams:](mtrclusternetworkcommissioning/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusternetworkcommissioning/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusternetworkcommissioning/readattributeclusterrevision%28with_%29.md)
- [readAttributeConnectMaxTimeSecondsWithParams:](mtrclusternetworkcommissioning/readattributeconnectmaxtimeseconds%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusternetworkcommissioning/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusternetworkcommissioning/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeInterfaceEnabledWithParams:](mtrclusternetworkcommissioning/readattributeinterfaceenabled%28with_%29.md)
- [readAttributeLastConnectErrorValueWithParams:](mtrclusternetworkcommissioning/readattributelastconnecterrorvalue%28with_%29.md)
- [readAttributeLastNetworkIDWithParams:](mtrclusternetworkcommissioning/readattributelastnetworkid%28with_%29.md)
- [readAttributeLastNetworkingStatusWithParams:](mtrclusternetworkcommissioning/readattributelastnetworkingstatus%28with_%29.md)
- [readAttributeMaxNetworksWithParams:](mtrclusternetworkcommissioning/readattributemaxnetworks%28with_%29.md)
- [readAttributeNetworksWithParams:](mtrclusternetworkcommissioning/readattributenetworks%28with_%29.md)
- [readAttributeScanMaxTimeSecondsWithParams:](mtrclusternetworkcommissioning/readattributescanmaxtimeseconds%28with_%29.md)
- [removeNetworkWithParams:expectedValues:expectedValueInterval:completion:](mtrclusternetworkcommissioning/removenetwork%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [removeNetworkWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusternetworkcommissioning/removenetwork%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [reorderNetworkWithParams:expectedValues:expectedValueInterval:completion:](mtrclusternetworkcommissioning/reordernetwork%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [reorderNetworkWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusternetworkcommissioning/reordernetwork%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [scanNetworksWithParams:expectedValues:expectedValueInterval:completion:](mtrclusternetworkcommissioning/scannetworks%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [scanNetworksWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusternetworkcommissioning/scannetworks%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [scanNetworksWithExpectedValues:expectedValueInterval:completion:](mtrclusternetworkcommissioning/scannetworks%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [writeAttributeInterfaceEnabledWithValue:expectedValueInterval:](mtrclusternetworkcommissioning/writeattributeinterfaceenabled%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeInterfaceEnabledWithValue:expectedValueInterval:params:](mtrclusternetworkcommissioning/writeattributeinterfaceenabled%28withvalue_expectedvalueinterval_params_%29.md)
- [readAttributeSupportedThreadFeaturesWithParams:](mtrclusternetworkcommissioning/readattributesupportedthreadfeatures%28with_%29.md)
- [readAttributeSupportedWiFiBandsWithParams:](mtrclusternetworkcommissioning/readattributesupportedwifibands%28with_%29.md)
- [readAttributeThreadVersionWithParams:](mtrclusternetworkcommissioning/readattributethreadversion%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
