> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionsupportedgranttypes](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionsupportedgranttypes)

# ASAuthorizationProviderExtensionSupportedGrantTypes (Swift)

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** macOS 14.0+

## Declaration

```swift
struct ASAuthorizationProviderExtensionSupportedGrantTypes
```

## Topics

### Initializers

- [init(rawValue:)](asauthorizationproviderextensionsupportedgranttypes/init%28rawvalue_%29.md)

### Type Properties

- [jwtBearer](asauthorizationproviderextensionsupportedgranttypes/jwtbearer.md)
- [password](asauthorizationproviderextensionsupportedgranttypes/password.md)
- [saml1_1](asauthorizationproviderextensionsupportedgranttypes/saml1_1.md)
- [saml2_0](asauthorizationproviderextensionsupportedgranttypes/saml2_0.md)
- [tokenExchange](asauthorizationproviderextensionsupportedgranttypes/tokenexchange.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Enumerations

- [ASAuthorizationProviderExtensionLoginConfiguration.FederationType](asauthorizationproviderextensionloginconfiguration/federationtype-swift.enum.md)
- [ASAuthorizationProviderExtensionLoginConfiguration.UserSecureEnclaveKeyBiometricPolicy](asauthorizationproviderextensionloginconfiguration/usersecureenclavekeybiometricpolicy-swift.struct.md)
- [ASAuthorizationProviderExtensionPlatformSSOProtocolVersion](asauthorizationproviderextensionplatformssoprotocolversion.md)
- [ASAuthorizationPublicKeyCredentialAttachment](asauthorizationpublickeycredentialattachment.md)
- [ASCredentialIdentityStore.IdentityTypes](ascredentialidentitystore/identitytypes.md): The defined identity types for use in retrieving credentials.
- [ASPublicKeyCredentialClientDataCrossOriginValue](aspublickeycredentialclientdatacrossoriginvalue.md)
- [ASUserAgeRange](asuseragerange.md)

# ASAuthorizationProviderExtensionSupportedGrantTypes (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

## Declaration

```objectivec
enum ASAuthorizationProviderExtensionSupportedGrantTypes : NSInteger;
```

## Topics

### Type Properties

- [ASAuthorizationProviderExtensionSupportedGrantTypesJWTBearer](asauthorizationproviderextensionsupportedgranttypes/jwtbearer.md)
- [ASAuthorizationProviderExtensionSupportedGrantTypesPassword](asauthorizationproviderextensionsupportedgranttypes/password.md)
- [ASAuthorizationProviderExtensionSupportedGrantTypesSAML1_1](asauthorizationproviderextensionsupportedgranttypes/saml1_1.md)
- [ASAuthorizationProviderExtensionSupportedGrantTypesSAML2_0](asauthorizationproviderextensionsupportedgranttypes/saml2_0.md)

### Constants

- [ASAuthorizationProviderExtensionSupportedGrantTypesNone](asauthorizationproviderextensionsupportedgranttypes/asauthorizationproviderextensionsupportedgranttypesnone.md)

### Enumeration Cases

- [ASAuthorizationProviderExtensionSupportedGrantTypesTokenExchange](asauthorizationproviderextensionsupportedgranttypes/tokenexchange.md)

## See Also

### Enumerations

- [ASAuthorizationProviderExtensionFederationType](asauthorizationproviderextensionloginconfiguration/federationtype-swift.enum.md)
- [ASAuthorizationProviderExtensionUserSecureEnclaveKeyBiometricPolicy](asauthorizationproviderextensionloginconfiguration/usersecureenclavekeybiometricpolicy-swift.struct.md)
- [ASAuthorizationProviderExtensionPlatformSSOProtocolVersion](asauthorizationproviderextensionplatformssoprotocolversion.md)
- [ASAuthorizationPublicKeyCredentialAttachment](asauthorizationpublickeycredentialattachment.md)
- [ASAuthorizationPublicKeyCredentialLargeBlobAssertionOperation](asauthorizationpublickeycredentiallargeblobassertionoperation.md): A type that represents the operation of the large blob assertion.
- [ASAuthorizationPublicKeyCredentialLargeBlobSupportRequirement](asauthorizationpublickeycredentiallargeblobsupportrequirement.md): An enumeration of large binary object support requirement values.
- [ASCredentialIdentityTypes](ascredentialidentitystore/identitytypes.md): The defined identity types for use in retrieving credentials.
- [ASPublicKeyCredentialClientDataCrossOriginValue](aspublickeycredentialclientdatacrossoriginvalue.md)
- [ASUserAgeRange](asuseragerange.md)
