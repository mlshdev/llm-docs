> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialresidentkeypreference](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialresidentkeypreference)

# ASAuthorizationPublicKeyCredentialResidentKeyPreference (Swift)

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A structure that specifies the relying party’s preference for resident key storage.

## Declaration

```swift
struct ASAuthorizationPublicKeyCredentialResidentKeyPreference
```

## Topics

### Creating the preference

- [init(\_:)](asauthorizationpublickeycredentialresidentkeypreference/init%28__%29.md): Creates the object with a preference.
- [init(rawValue:)](asauthorizationpublickeycredentialresidentkeypreference/init%28rawvalue_%29.md): Creates the object with a preference.

### Getting preferences

- [discouraged](asauthorizationpublickeycredentialresidentkeypreference/discouraged.md): The preference for the device not to store the resident key.
- [preferred](asauthorizationpublickeycredentialresidentkeypreference/preferred.md): The preference for the device to store the resident key.
- [required](asauthorizationpublickeycredentialresidentkeypreference/required.md): The device must store the resident key.

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
- [ASAuthorizationPublicKeyCredentialUserVerificationPreference](asauthorizationpublickeycredentialuserverificationpreference.md): A structure that defines the relying party’s user verification preference.
- [ASAuthorizationPublicKeyCredentialDescriptor](asauthorizationpublickeycredentialdescriptor.md): An interface that defines the credential identifier.
- [ASAuthorizationPlatformPublicKeyCredentialDescriptor](asauthorizationplatformpublickeycredentialdescriptor.md): An object that holds the credential.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor](asauthorizationsecuritykeypublickeycredentialdescriptor.md): An object that holds public key credential transport information.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor.Transport](asauthorizationsecuritykeypublickeycredentialdescriptor/transport.md): A structure that defines the security key credential transport type.
- [allSupported](asauthorizationsecuritykeypublickeycredentialdescriptor/transport/allsupported.md): An array of currently supported transport types.

# ASAuthorizationPublicKeyCredentialResidentKeyPreference (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A structure that specifies the relying party’s preference for resident key storage.

## Declaration

```objectivec
typedef NSString * ASAuthorizationPublicKeyCredentialResidentKeyPreference;
```

## Topics

### Getting preferences

- [ASAuthorizationPublicKeyCredentialResidentKeyPreferenceDiscouraged](asauthorizationpublickeycredentialresidentkeypreference/discouraged.md): The preference for the device not to store the resident key.
- [ASAuthorizationPublicKeyCredentialResidentKeyPreferencePreferred](asauthorizationpublickeycredentialresidentkeypreference/preferred.md): The preference for the device to store the resident key.
- [ASAuthorizationPublicKeyCredentialResidentKeyPreferenceRequired](asauthorizationpublickeycredentialresidentkeypreference/required.md): The device must store the resident key.

## See Also

### Request configuration

- [ASPublicKeyCredential](aspublickeycredential.md): An interface that defines the properties of the public key.
- [ASAuthorizationPublicKeyCredentialParameters](asauthorizationpublickeycredentialparameters.md): An object that provides required parameters for the credential during registration.
- [ASCOSEAlgorithmIdentifier](ascosealgorithmidentifier.md): An identifier for the algorithm that a credential’s key pair uses.
- [ASCOSEEllipticCurveIdentifier](ascoseellipticcurveidentifier.md): A structure that contains the elliptic curve identifier.
- [ASAuthorizationPublicKeyCredentialAttestationKind](asauthorizationpublickeycredentialattestationkind.md): A structure that defines the types of attestations a developer can request.
- [ASAuthorizationPublicKeyCredentialUserVerificationPreference](asauthorizationpublickeycredentialuserverificationpreference.md): A structure that defines the relying party’s user verification preference.
- [ASAuthorizationPublicKeyCredentialDescriptor](asauthorizationpublickeycredentialdescriptor.md): An interface that defines the credential identifier.
- [ASAuthorizationPlatformPublicKeyCredentialDescriptor](asauthorizationplatformpublickeycredentialdescriptor.md): An object that holds the credential.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor](asauthorizationsecuritykeypublickeycredentialdescriptor.md): An object that holds public key credential transport information.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptorTransport](asauthorizationsecuritykeypublickeycredentialdescriptor/transport.md): A structure that defines the security key credential transport type.
- [ASAuthorizationAllSupportedPublicKeyCredentialDescriptorTransports](asauthorizationsecuritykeypublickeycredentialdescriptor/transport/allsupported.md): An array of currently supported transport types.
