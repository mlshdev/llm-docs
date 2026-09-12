> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterlocalizationconfiguration](https://developer.apple.com/documentation/matter/mtrclusterlocalizationconfiguration)

# MTRClusterLocalizationConfiguration (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterLocalizationConfiguration
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusterlocalizationconfiguration/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusterlocalizationconfiguration/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandList(with:)](mtrclusterlocalizationconfiguration/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeActiveLocale(with:)](mtrclusterlocalizationconfiguration/readattributeactivelocale%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusterlocalizationconfiguration/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusterlocalizationconfiguration/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusterlocalizationconfiguration/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusterlocalizationconfiguration/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSupportedLocales(with:)](mtrclusterlocalizationconfiguration/readattributesupportedlocales%28with_%29.md)
- [writeAttributeActiveLocale(withValue:expectedValueInterval:)](mtrclusterlocalizationconfiguration/writeattributeactivelocale%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeActiveLocale(withValue:expectedValueInterval:params:)](mtrclusterlocalizationconfiguration/writeattributeactivelocale%28withvalue_expectedvalueinterval_params_%29.md)

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

# MTRClusterLocalizationConfiguration (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterLocalizationConfiguration : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusterlocalizationconfiguration/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusterlocalizationconfiguration/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [readAttributeAcceptedCommandListWithParams:](mtrclusterlocalizationconfiguration/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeActiveLocaleWithParams:](mtrclusterlocalizationconfiguration/readattributeactivelocale%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusterlocalizationconfiguration/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusterlocalizationconfiguration/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusterlocalizationconfiguration/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusterlocalizationconfiguration/readattributegeneratedcommandlist%28with_%29.md)
- [readAttributeSupportedLocalesWithParams:](mtrclusterlocalizationconfiguration/readattributesupportedlocales%28with_%29.md)
- [writeAttributeActiveLocaleWithValue:expectedValueInterval:](mtrclusterlocalizationconfiguration/writeattributeactivelocale%28withvalue_expectedvalueinterval_%29.md)
- [writeAttributeActiveLocaleWithValue:expectedValueInterval:params:](mtrclusterlocalizationconfiguration/writeattributeactivelocale%28withvalue_expectedvalueinterval_params_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
