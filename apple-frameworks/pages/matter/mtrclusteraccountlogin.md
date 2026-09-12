> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusteraccountlogin](https://developer.apple.com/documentation/matter/mtrclusteraccountlogin)

# MTRClusterAccountLogin (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRClusterAccountLogin
```

## Topics

### Initializers

- [init(device:endpoint:queue:)](mtrclusteraccountlogin/init%28device_endpoint_queue_%29.md): Deprecated.
- [init(device:endpointID:queue:)](mtrclusteraccountlogin/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [getSetupPIN(with:expectedValues:expectedValueInterval:completion:)](mtrclusteraccountlogin/getsetuppin%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [getSetupPIN(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteraccountlogin/getsetuppin%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [login(with:expectedValues:expectedValueInterval:completion:)](mtrclusteraccountlogin/login%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [login(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteraccountlogin/login%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [logout(with:expectedValues:expectedValueInterval:completion:)](mtrclusteraccountlogin/logout%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [logout(with:expectedValues:expectedValueInterval:completionHandler:)](mtrclusteraccountlogin/logout%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [logout(withExpectedValues:expectedValueInterval:completion:)](mtrclusteraccountlogin/logout%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [logout(withExpectedValues:expectedValueInterval:completionHandler:)](mtrclusteraccountlogin/logout%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandList(with:)](mtrclusteraccountlogin/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeList(with:)](mtrclusteraccountlogin/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevision(with:)](mtrclusteraccountlogin/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMap(with:)](mtrclusteraccountlogin/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandList(with:)](mtrclusteraccountlogin/readattributegeneratedcommandlist%28with_%29.md)

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

# MTRClusterAccountLogin (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRClusterAccountLogin : MTRGenericCluster
```

## Topics

### Initializers

- [initWithDevice:endpoint:queue:](mtrclusteraccountlogin/init%28device_endpoint_queue_%29.md): Deprecated.
- [initWithDevice:endpointID:queue:](mtrclusteraccountlogin/init%28device_endpointid_queue_%29.md)

### Instance Methods

- [getSetupPINWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteraccountlogin/getsetuppin%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [getSetupPINWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteraccountlogin/getsetuppin%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [loginWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteraccountlogin/login%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [loginWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteraccountlogin/login%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [logoutWithParams:expectedValues:expectedValueInterval:completion:](mtrclusteraccountlogin/logout%28with_expectedvalues_expectedvalueinterval_completion_%29.md)
- [logoutWithParams:expectedValues:expectedValueInterval:completionHandler:](mtrclusteraccountlogin/logout%28with_expectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [logoutWithExpectedValues:expectedValueInterval:completion:](mtrclusteraccountlogin/logout%28withexpectedvalues_expectedvalueinterval_completion_%29.md)
- [logoutWithExpectedValues:expectedValueInterval:completionHandler:](mtrclusteraccountlogin/logout%28withexpectedvalues_expectedvalueinterval_completionhandler_%29.md): Deprecated.
- [readAttributeAcceptedCommandListWithParams:](mtrclusteraccountlogin/readattributeacceptedcommandlist%28with_%29.md)
- [readAttributeAttributeListWithParams:](mtrclusteraccountlogin/readattributeattributelist%28with_%29.md)
- [readAttributeClusterRevisionWithParams:](mtrclusteraccountlogin/readattributeclusterrevision%28with_%29.md)
- [readAttributeFeatureMapWithParams:](mtrclusteraccountlogin/readattributefeaturemap%28with_%29.md)
- [readAttributeGeneratedCommandListWithParams:](mtrclusteraccountlogin/readattributegeneratedcommandlist%28with_%29.md)

## Relationships

### Inherits From

- [MTRGenericCluster](mtrgenericcluster.md)
