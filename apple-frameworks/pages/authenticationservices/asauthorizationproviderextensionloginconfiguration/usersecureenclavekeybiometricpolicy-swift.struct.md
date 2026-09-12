> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/usersecureenclavekeybiometricpolicy-swift.struct](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/usersecureenclavekeybiometricpolicy-swift.struct)

# ASAuthorizationProviderExtensionLoginConfiguration.UserSecureEnclaveKeyBiometricPolicy (Swift)

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** macOS 10.15+

## Declaration

```swift
struct UserSecureEnclaveKeyBiometricPolicy
```

## Topics

### Initializers

- [init(rawValue:)](usersecureenclavekeybiometricpolicy-swift.struct/init%28rawvalue_%29.md)

### Type Properties

- [passwordFallback](usersecureenclavekeybiometricpolicy-swift.struct/passwordfallback.md)
- [reuseDuringUnlock](usersecureenclavekeybiometricpolicy-swift.struct/reuseduringunlock.md)
- [touchIDOrWatchAny](usersecureenclavekeybiometricpolicy-swift.struct/touchidorwatchany.md)
- [touchIDOrWatchCurrentSet](usersecureenclavekeybiometricpolicy-swift.struct/touchidorwatchcurrentset.md)

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

- [ASAuthorizationProviderExtensionLoginConfiguration.FederationType](federationtype-swift.enum.md)
- [ASAuthorizationProviderExtensionPlatformSSOProtocolVersion](../asauthorizationproviderextensionplatformssoprotocolversion.md)
- [ASAuthorizationProviderExtensionSupportedGrantTypes](../asauthorizationproviderextensionsupportedgranttypes.md)
- [ASAuthorizationPublicKeyCredentialAttachment](../asauthorizationpublickeycredentialattachment.md)
- [ASCredentialIdentityStore.IdentityTypes](../ascredentialidentitystore/identitytypes.md): The defined identity types for use in retrieving credentials.
- [ASPublicKeyCredentialClientDataCrossOriginValue](../aspublickeycredentialclientdatacrossoriginvalue.md)
- [ASUserAgeRange](../asuseragerange.md)

# ASAuthorizationProviderExtensionUserSecureEnclaveKeyBiometricPolicy (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

## Declaration

```objectivec
enum ASAuthorizationProviderExtensionUserSecureEnclaveKeyBiometricPolicy : NSUInteger;
```

## Topics

### Type Properties

- [ASAuthorizationProviderExtensionUserSecureEnclaveKeyBiometricPolicyPasswordFallback](usersecureenclavekeybiometricpolicy-swift.struct/passwordfallback.md)
- [ASAuthorizationProviderExtensionUserSecureEnclaveKeyBiometricPolicyReuseDuringUnlock](usersecureenclavekeybiometricpolicy-swift.struct/reuseduringunlock.md)
- [ASAuthorizationProviderExtensionUserSecureEnclaveKeyBiometricPolicyTouchIDOrWatchAny](usersecureenclavekeybiometricpolicy-swift.struct/touchidorwatchany.md)
- [ASAuthorizationProviderExtensionUserSecureEnclaveKeyBiometricPolicyTouchIDOrWatchCurrentSet](usersecureenclavekeybiometricpolicy-swift.struct/touchidorwatchcurrentset.md)

### Constants

- [ASAuthorizationProviderExtensionUserSecureEnclaveKeyBiometricPolicyNone](../asauthorizationproviderextensionusersecureenclavekeybiometricpolicy/asauthorizationproviderextensionusersecureenclavekeybiometricpolicynone.md)

## See Also

### Enumerations

- [ASAuthorizationProviderExtensionFederationType](federationtype-swift.enum.md)
- [ASAuthorizationProviderExtensionPlatformSSOProtocolVersion](../asauthorizationproviderextensionplatformssoprotocolversion.md)
- [ASAuthorizationProviderExtensionSupportedGrantTypes](../asauthorizationproviderextensionsupportedgranttypes.md)
- [ASAuthorizationPublicKeyCredentialAttachment](../asauthorizationpublickeycredentialattachment.md)
- [ASAuthorizationPublicKeyCredentialLargeBlobAssertionOperation](../asauthorizationpublickeycredentiallargeblobassertionoperation.md): A type that represents the operation of the large blob assertion.
- [ASAuthorizationPublicKeyCredentialLargeBlobSupportRequirement](../asauthorizationpublickeycredentiallargeblobsupportrequirement.md): An enumeration of large binary object support requirement values.
- [ASCredentialIdentityTypes](../ascredentialidentitystore/identitytypes.md): The defined identity types for use in retrieving credentials.
- [ASPublicKeyCredentialClientDataCrossOriginValue](../aspublickeycredentialclientdatacrossoriginvalue.md)
- [ASUserAgeRange](../asuseragerange.md)
