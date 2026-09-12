> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialidentitystore/identitytypes](https://developer.apple.com/documentation/authenticationservices/ascredentialidentitystore/identitytypes)

# ASCredentialIdentityStore.IdentityTypes (Swift)

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · visionOS 1.1+

The defined identity types for use in retrieving credentials.

## Declaration

```swift
struct IdentityTypes
```

## Topics

### Working with identity types

- [passkey](identitytypes/passkey.md): The passkey identity type.
- [password](identitytypes/password.md): The password identity type.
- [oneTimeCode](identitytypes/onetimecode.md): The one-time code identity type.

### Working with raw values

- [init(rawValue:)](identitytypes/init%28rawvalue_%29.md): Creates an instance with the specified raw value.

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

- [ASAuthorizationProviderExtensionLoginConfiguration.FederationType](../asauthorizationproviderextensionloginconfiguration/federationtype-swift.enum.md)
- [ASAuthorizationProviderExtensionLoginConfiguration.UserSecureEnclaveKeyBiometricPolicy](../asauthorizationproviderextensionloginconfiguration/usersecureenclavekeybiometricpolicy-swift.struct.md)
- [ASAuthorizationProviderExtensionPlatformSSOProtocolVersion](../asauthorizationproviderextensionplatformssoprotocolversion.md)
- [ASAuthorizationProviderExtensionSupportedGrantTypes](../asauthorizationproviderextensionsupportedgranttypes.md)
- [ASAuthorizationPublicKeyCredentialAttachment](../asauthorizationpublickeycredentialattachment.md)
- [ASPublicKeyCredentialClientDataCrossOriginValue](../aspublickeycredentialclientdatacrossoriginvalue.md)
- [ASUserAgeRange](../asuseragerange.md)

# ASCredentialIdentityTypes (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · visionOS 1.1+

The defined identity types for use in retrieving credentials.

## Declaration

```objectivec
enum ASCredentialIdentityTypes : NSUInteger;
```

## Topics

### Working with identity types

- [ASCredentialIdentityTypesPasskey](identitytypes/passkey.md): The passkey identity type.
- [ASCredentialIdentityTypesPassword](identitytypes/password.md): The password identity type.
- [ASCredentialIdentityTypesOneTimeCode](identitytypes/onetimecode.md): The one-time code identity type.

### Matching any type

- [ASCredentialIdentityTypesAll](../ascredentialidentitytypes/ascredentialidentitytypesall.md): A value that matches all identity types.

## See Also

### Enumerations

- [ASAuthorizationProviderExtensionFederationType](../asauthorizationproviderextensionloginconfiguration/federationtype-swift.enum.md)
- [ASAuthorizationProviderExtensionUserSecureEnclaveKeyBiometricPolicy](../asauthorizationproviderextensionloginconfiguration/usersecureenclavekeybiometricpolicy-swift.struct.md)
- [ASAuthorizationProviderExtensionPlatformSSOProtocolVersion](../asauthorizationproviderextensionplatformssoprotocolversion.md)
- [ASAuthorizationProviderExtensionSupportedGrantTypes](../asauthorizationproviderextensionsupportedgranttypes.md)
- [ASAuthorizationPublicKeyCredentialAttachment](../asauthorizationpublickeycredentialattachment.md)
- [ASAuthorizationPublicKeyCredentialLargeBlobAssertionOperation](../asauthorizationpublickeycredentiallargeblobassertionoperation.md): A type that represents the operation of the large blob assertion.
- [ASAuthorizationPublicKeyCredentialLargeBlobSupportRequirement](../asauthorizationpublickeycredentiallargeblobsupportrequirement.md): An enumeration of large binary object support requirement values.
- [ASPublicKeyCredentialClientDataCrossOriginValue](../aspublickeycredentialclientdatacrossoriginvalue.md)
- [ASUserAgeRange](../asuseragerange.md)
