> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/federationtype-swift.enum](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/federationtype-swift.enum)

# ASAuthorizationProviderExtensionLoginConfiguration.FederationType (Swift)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** macOS 13.3+

## Declaration

```swift
enum FederationType
```

## Topics

### Enumeration Cases

- [ASAuthorizationProviderExtensionLoginConfiguration.FederationType.dynamicWSTrust](federationtype-swift.enum/dynamicwstrust.md)
- [ASAuthorizationProviderExtensionLoginConfiguration.FederationType.none](federationtype-swift.enum/none.md)
- [ASAuthorizationProviderExtensionLoginConfiguration.FederationType.wsTrust](federationtype-swift.enum/wstrust.md)
- [ASAuthorizationProviderExtensionLoginConfiguration.FederationType.dynamicOpenID](federationtype-swift.enum/dynamicopenid.md)
- [ASAuthorizationProviderExtensionLoginConfiguration.FederationType.openID](federationtype-swift.enum/openid.md)

### Initializers

- [init(rawValue:)](federationtype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [ASAuthorizationProviderExtensionLoginConfiguration.UserSecureEnclaveKeyBiometricPolicy](usersecureenclavekeybiometricpolicy-swift.struct.md)
- [ASAuthorizationProviderExtensionPlatformSSOProtocolVersion](../asauthorizationproviderextensionplatformssoprotocolversion.md)
- [ASAuthorizationProviderExtensionSupportedGrantTypes](../asauthorizationproviderextensionsupportedgranttypes.md)
- [ASAuthorizationPublicKeyCredentialAttachment](../asauthorizationpublickeycredentialattachment.md)
- [ASCredentialIdentityStore.IdentityTypes](../ascredentialidentitystore/identitytypes.md): The defined identity types for use in retrieving credentials.
- [ASPublicKeyCredentialClientDataCrossOriginValue](../aspublickeycredentialclientdatacrossoriginvalue.md)
- [ASUserAgeRange](../asuseragerange.md)

# ASAuthorizationProviderExtensionFederationType (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

## Declaration

```objectivec
enum ASAuthorizationProviderExtensionFederationType : NSInteger;
```

## Topics

### Enumeration Cases

- [ASAuthorizationProviderExtensionFederationTypeDynamicWSTrust](federationtype-swift.enum/dynamicwstrust.md)
- [ASAuthorizationProviderExtensionFederationTypeNone](federationtype-swift.enum/none.md)
- [ASAuthorizationProviderExtensionFederationTypeWSTrust](federationtype-swift.enum/wstrust.md)
- [ASAuthorizationProviderExtensionFederationTypeDynamicOpenID](federationtype-swift.enum/dynamicopenid.md)
- [ASAuthorizationProviderExtensionFederationTypeOpenID](federationtype-swift.enum/openid.md)

## See Also

### Enumerations

- [ASAuthorizationProviderExtensionUserSecureEnclaveKeyBiometricPolicy](usersecureenclavekeybiometricpolicy-swift.struct.md)
- [ASAuthorizationProviderExtensionPlatformSSOProtocolVersion](../asauthorizationproviderextensionplatformssoprotocolversion.md)
- [ASAuthorizationProviderExtensionSupportedGrantTypes](../asauthorizationproviderextensionsupportedgranttypes.md)
- [ASAuthorizationPublicKeyCredentialAttachment](../asauthorizationpublickeycredentialattachment.md)
- [ASAuthorizationPublicKeyCredentialLargeBlobAssertionOperation](../asauthorizationpublickeycredentiallargeblobassertionoperation.md): A type that represents the operation of the large blob assertion.
- [ASAuthorizationPublicKeyCredentialLargeBlobSupportRequirement](../asauthorizationpublickeycredentiallargeblobsupportrequirement.md): An enumeration of large binary object support requirement values.
- [ASCredentialIdentityTypes](../ascredentialidentitystore/identitytypes.md): The defined identity types for use in retrieving credentials.
- [ASPublicKeyCredentialClientDataCrossOriginValue](../aspublickeycredentialclientdatacrossoriginvalue.md)
- [ASUserAgeRange](../asuseragerange.md)
