> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialuserverificationpreference](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialuserverificationpreference)

# ASAuthorizationPublicKeyCredentialUserVerificationPreference (Swift)

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A structure that defines the relying party’s user verification preference.

## Declaration

```swift
struct ASAuthorizationPublicKeyCredentialUserVerificationPreference
```

## Topics

### Creating the preference

- [init(\_:)](asauthorizationpublickeycredentialuserverificationpreference/init%28__%29.md): Creates the object with a preference.
- [init(rawValue:)](asauthorizationpublickeycredentialuserverificationpreference/init%28rawvalue_%29.md): Creates the object with a preference.

### Getting preferences

- [discouraged](asauthorizationpublickeycredentialuserverificationpreference/discouraged.md): The relying party discourages user verification.
- [preferred](asauthorizationpublickeycredentialuserverificationpreference/preferred.md): The relying party prefers user verification.
- [required](asauthorizationpublickeycredentialuserverificationpreference/required.md): The relying party requires user verification.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Request configuration

- [ASPublicKeyCredential](aspublickeycredential.md): An interface that defines the properties of the public key.
- [ASAuthorizationPublicKeyCredentialParameters](asauthorizationpublickeycredentialparameters.md): An object that provides required parameters for the credential during registration.
- [ASCOSEAlgorithmIdentifier](ascosealgorithmidentifier.md): An identifier for the algorithm that a credential’s key pair uses.
- [ASCOSEEllipticCurveIdentifier](ascoseellipticcurveidentifier.md): A structure that contains the elliptic curve identifier.
- [ASAuthorizationPublicKeyCredentialAttestationKind](asauthorizationpublickeycredentialattestationkind.md): A structure that defines the types of attestations a developer can request.
- [ASAuthorizationPublicKeyCredentialResidentKeyPreference](asauthorizationpublickeycredentialresidentkeypreference.md): A structure that specifies the relying party’s preference for resident key storage.
- [ASAuthorizationPublicKeyCredentialDescriptor](asauthorizationpublickeycredentialdescriptor.md): An interface that defines the credential identifier.
- [ASAuthorizationPlatformPublicKeyCredentialDescriptor](asauthorizationplatformpublickeycredentialdescriptor.md): An object that holds the credential.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor](asauthorizationsecuritykeypublickeycredentialdescriptor.md): An object that holds public key credential transport information.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor.Transport](asauthorizationsecuritykeypublickeycredentialdescriptor/transport.md): A structure that defines the security key credential transport type.
- [allSupported](asauthorizationsecuritykeypublickeycredentialdescriptor/transport/allsupported.md): An array of currently supported transport types.

# ASAuthorizationPublicKeyCredentialUserVerificationPreference (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A structure that defines the relying party’s user verification preference.

## Declaration

```objectivec
typedef NSString * ASAuthorizationPublicKeyCredentialUserVerificationPreference;
```

## Topics

### Getting preferences

- [ASAuthorizationPublicKeyCredentialUserVerificationPreferenceDiscouraged](asauthorizationpublickeycredentialuserverificationpreference/discouraged.md): The relying party discourages user verification.
- [ASAuthorizationPublicKeyCredentialUserVerificationPreferencePreferred](asauthorizationpublickeycredentialuserverificationpreference/preferred.md): The relying party prefers user verification.
- [ASAuthorizationPublicKeyCredentialUserVerificationPreferenceRequired](asauthorizationpublickeycredentialuserverificationpreference/required.md): The relying party requires user verification.

## See Also

### Request configuration

- [ASPublicKeyCredential](aspublickeycredential.md): An interface that defines the properties of the public key.
- [ASAuthorizationPublicKeyCredentialParameters](asauthorizationpublickeycredentialparameters.md): An object that provides required parameters for the credential during registration.
- [ASCOSEAlgorithmIdentifier](ascosealgorithmidentifier.md): An identifier for the algorithm that a credential’s key pair uses.
- [ASCOSEEllipticCurveIdentifier](ascoseellipticcurveidentifier.md): A structure that contains the elliptic curve identifier.
- [ASAuthorizationPublicKeyCredentialAttestationKind](asauthorizationpublickeycredentialattestationkind.md): A structure that defines the types of attestations a developer can request.
- [ASAuthorizationPublicKeyCredentialResidentKeyPreference](asauthorizationpublickeycredentialresidentkeypreference.md): A structure that specifies the relying party’s preference for resident key storage.
- [ASAuthorizationPublicKeyCredentialDescriptor](asauthorizationpublickeycredentialdescriptor.md): An interface that defines the credential identifier.
- [ASAuthorizationPlatformPublicKeyCredentialDescriptor](asauthorizationplatformpublickeycredentialdescriptor.md): An object that holds the credential.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor](asauthorizationsecuritykeypublickeycredentialdescriptor.md): An object that holds public key credential transport information.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptorTransport](asauthorizationsecuritykeypublickeycredentialdescriptor/transport.md): A structure that defines the security key credential transport type.
- [ASAuthorizationAllSupportedPublicKeyCredentialDescriptorTransports](asauthorizationsecuritykeypublickeycredentialdescriptor/transport/allsupported.md): An array of currently supported transport types.
