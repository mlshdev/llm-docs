> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialattestationkind](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialattestationkind)

# ASAuthorizationPublicKeyCredentialAttestationKind (Swift)

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A structure that defines the types of attestations a developer can request.

## Declaration

```swift
struct ASAuthorizationPublicKeyCredentialAttestationKind
```

## Topics

### Creating the attestation type

- [init(\_:)](asauthorizationpublickeycredentialattestationkind/init%28__%29.md): Creates the object with an attestation type.
- [init(rawValue:)](asauthorizationpublickeycredentialattestationkind/init%28rawvalue_%29.md): Creates the object with an attestation type.

### Getting attestation types

- [none](asauthorizationpublickeycredentialattestationkind/none.md): An attestation kind of none.
- [direct](asauthorizationpublickeycredentialattestationkind/direct.md): An attestation kind of direct.
- [enterprise](asauthorizationpublickeycredentialattestationkind/enterprise.md): An attestation kind of enterprise.
- [indirect](asauthorizationpublickeycredentialattestationkind/indirect.md): An attestation kind of indirect.

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
- [ASAuthorizationPublicKeyCredentialResidentKeyPreference](asauthorizationpublickeycredentialresidentkeypreference.md): A structure that specifies the relying party’s preference for resident key storage.
- [ASAuthorizationPublicKeyCredentialUserVerificationPreference](asauthorizationpublickeycredentialuserverificationpreference.md): A structure that defines the relying party’s user verification preference.
- [ASAuthorizationPublicKeyCredentialDescriptor](asauthorizationpublickeycredentialdescriptor.md): An interface that defines the credential identifier.
- [ASAuthorizationPlatformPublicKeyCredentialDescriptor](asauthorizationplatformpublickeycredentialdescriptor.md): An object that holds the credential.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor](asauthorizationsecuritykeypublickeycredentialdescriptor.md): An object that holds public key credential transport information.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor.Transport](asauthorizationsecuritykeypublickeycredentialdescriptor/transport.md): A structure that defines the security key credential transport type.
- [allSupported](asauthorizationsecuritykeypublickeycredentialdescriptor/transport/allsupported.md): An array of currently supported transport types.

# ASAuthorizationPublicKeyCredentialAttestationKind (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A structure that defines the types of attestations a developer can request.

## Declaration

```objectivec
typedef NSString * ASAuthorizationPublicKeyCredentialAttestationKind;
```

## Topics

### Getting attestation types

- [ASAuthorizationPublicKeyCredentialAttestationKindNone](asauthorizationpublickeycredentialattestationkind/none.md): An attestation kind of none.
- [ASAuthorizationPublicKeyCredentialAttestationKindDirect](asauthorizationpublickeycredentialattestationkind/direct.md): An attestation kind of direct.
- [ASAuthorizationPublicKeyCredentialAttestationKindEnterprise](asauthorizationpublickeycredentialattestationkind/enterprise.md): An attestation kind of enterprise.
- [ASAuthorizationPublicKeyCredentialAttestationKindIndirect](asauthorizationpublickeycredentialattestationkind/indirect.md): An attestation kind of indirect.

## See Also

### Request configuration

- [ASPublicKeyCredential](aspublickeycredential.md): An interface that defines the properties of the public key.
- [ASAuthorizationPublicKeyCredentialParameters](asauthorizationpublickeycredentialparameters.md): An object that provides required parameters for the credential during registration.
- [ASCOSEAlgorithmIdentifier](ascosealgorithmidentifier.md): An identifier for the algorithm that a credential’s key pair uses.
- [ASCOSEEllipticCurveIdentifier](ascoseellipticcurveidentifier.md): A structure that contains the elliptic curve identifier.
- [ASAuthorizationPublicKeyCredentialResidentKeyPreference](asauthorizationpublickeycredentialresidentkeypreference.md): A structure that specifies the relying party’s preference for resident key storage.
- [ASAuthorizationPublicKeyCredentialUserVerificationPreference](asauthorizationpublickeycredentialuserverificationpreference.md): A structure that defines the relying party’s user verification preference.
- [ASAuthorizationPublicKeyCredentialDescriptor](asauthorizationpublickeycredentialdescriptor.md): An interface that defines the credential identifier.
- [ASAuthorizationPlatformPublicKeyCredentialDescriptor](asauthorizationplatformpublickeycredentialdescriptor.md): An object that holds the credential.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor](asauthorizationsecuritykeypublickeycredentialdescriptor.md): An object that holds public key credential transport information.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptorTransport](asauthorizationsecuritykeypublickeycredentialdescriptor/transport.md): A structure that defines the security key credential transport type.
- [ASAuthorizationAllSupportedPublicKeyCredentialDescriptorTransports](asauthorizationsecuritykeypublickeycredentialdescriptor/transport/allsupported.md): An array of currently supported transport types.
