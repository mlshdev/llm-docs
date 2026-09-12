> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascosealgorithmidentifier](https://developer.apple.com/documentation/authenticationservices/ascosealgorithmidentifier)

# ASCOSEAlgorithmIdentifier (Swift)

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

An identifier for the algorithm that a credential’s key pair uses.

## Declaration

```swift
struct ASCOSEAlgorithmIdentifier
```

## Topics

### Creating the identifier

- [init(\_:)](ascosealgorithmidentifier/init%28__%29.md): Creates the algorithm identifier.
- [init(rawValue:)](ascosealgorithmidentifier/init%28rawvalue_%29.md): Creates the algorithm identifier.
- [ES256](ascosealgorithmidentifier/es256.md): The ES256 algorithm.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Request configuration

- [ASPublicKeyCredential](aspublickeycredential.md): An interface that defines the properties of the public key.
- [ASAuthorizationPublicKeyCredentialParameters](asauthorizationpublickeycredentialparameters.md): An object that provides required parameters for the credential during registration.
- [ASCOSEEllipticCurveIdentifier](ascoseellipticcurveidentifier.md): A structure that contains the elliptic curve identifier.
- [ASAuthorizationPublicKeyCredentialAttestationKind](asauthorizationpublickeycredentialattestationkind.md): A structure that defines the types of attestations a developer can request.
- [ASAuthorizationPublicKeyCredentialResidentKeyPreference](asauthorizationpublickeycredentialresidentkeypreference.md): A structure that specifies the relying party’s preference for resident key storage.
- [ASAuthorizationPublicKeyCredentialUserVerificationPreference](asauthorizationpublickeycredentialuserverificationpreference.md): A structure that defines the relying party’s user verification preference.
- [ASAuthorizationPublicKeyCredentialDescriptor](asauthorizationpublickeycredentialdescriptor.md): An interface that defines the credential identifier.
- [ASAuthorizationPlatformPublicKeyCredentialDescriptor](asauthorizationplatformpublickeycredentialdescriptor.md): An object that holds the credential.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor](asauthorizationsecuritykeypublickeycredentialdescriptor.md): An object that holds public key credential transport information.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor.Transport](asauthorizationsecuritykeypublickeycredentialdescriptor/transport.md): A structure that defines the security key credential transport type.
- [allSupported](asauthorizationsecuritykeypublickeycredentialdescriptor/transport/allsupported.md): An array of currently supported transport types.

# ASCOSEAlgorithmIdentifier (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

An identifier for the algorithm that a credential’s key pair uses.

## Declaration

```objectivec
typedef NSInteger ASCOSEAlgorithmIdentifier;
```

## Topics

### Creating the identifier

- [ASCOSEAlgorithmIdentifierES256](ascosealgorithmidentifier/es256.md): The ES256 algorithm.

## See Also

### Request configuration

- [ASPublicKeyCredential](aspublickeycredential.md): An interface that defines the properties of the public key.
- [ASAuthorizationPublicKeyCredentialParameters](asauthorizationpublickeycredentialparameters.md): An object that provides required parameters for the credential during registration.
- [ASCOSEEllipticCurveIdentifier](ascoseellipticcurveidentifier.md): A structure that contains the elliptic curve identifier.
- [ASAuthorizationPublicKeyCredentialAttestationKind](asauthorizationpublickeycredentialattestationkind.md): A structure that defines the types of attestations a developer can request.
- [ASAuthorizationPublicKeyCredentialResidentKeyPreference](asauthorizationpublickeycredentialresidentkeypreference.md): A structure that specifies the relying party’s preference for resident key storage.
- [ASAuthorizationPublicKeyCredentialUserVerificationPreference](asauthorizationpublickeycredentialuserverificationpreference.md): A structure that defines the relying party’s user verification preference.
- [ASAuthorizationPublicKeyCredentialDescriptor](asauthorizationpublickeycredentialdescriptor.md): An interface that defines the credential identifier.
- [ASAuthorizationPlatformPublicKeyCredentialDescriptor](asauthorizationplatformpublickeycredentialdescriptor.md): An object that holds the credential.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor](asauthorizationsecuritykeypublickeycredentialdescriptor.md): An object that holds public key credential transport information.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptorTransport](asauthorizationsecuritykeypublickeycredentialdescriptor/transport.md): A structure that defines the security key credential transport type.
- [ASAuthorizationAllSupportedPublicKeyCredentialDescriptorTransports](asauthorizationsecuritykeypublickeycredentialdescriptor/transport/allsupported.md): An array of currently supported transport types.
