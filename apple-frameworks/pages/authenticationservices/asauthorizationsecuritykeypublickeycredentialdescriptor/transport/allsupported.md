> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialdescriptor/transport/allsupported](https://developer.apple.com/documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialdescriptor/transport/allsupported)

# allSupported (Swift)

**Framework:** Authentication Services  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An array of currently supported transport types.

## Declaration

```swift
static var allSupported: [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor.Transport] { get }
```

## See Also

### Request configuration

- [ASPublicKeyCredential](../../aspublickeycredential.md): An interface that defines the properties of the public key.
- [ASAuthorizationPublicKeyCredentialParameters](../../asauthorizationpublickeycredentialparameters.md): An object that provides required parameters for the credential during registration.
- [ASCOSEAlgorithmIdentifier](../../ascosealgorithmidentifier.md): An identifier for the algorithm that a credential’s key pair uses.
- [ASCOSEEllipticCurveIdentifier](../../ascoseellipticcurveidentifier.md): A structure that contains the elliptic curve identifier.
- [ASAuthorizationPublicKeyCredentialAttestationKind](../../asauthorizationpublickeycredentialattestationkind.md): A structure that defines the types of attestations a developer can request.
- [ASAuthorizationPublicKeyCredentialResidentKeyPreference](../../asauthorizationpublickeycredentialresidentkeypreference.md): A structure that specifies the relying party’s preference for resident key storage.
- [ASAuthorizationPublicKeyCredentialUserVerificationPreference](../../asauthorizationpublickeycredentialuserverificationpreference.md): A structure that defines the relying party’s user verification preference.
- [ASAuthorizationPublicKeyCredentialDescriptor](../../asauthorizationpublickeycredentialdescriptor.md): An interface that defines the credential identifier.
- [ASAuthorizationPlatformPublicKeyCredentialDescriptor](../../asauthorizationplatformpublickeycredentialdescriptor.md): An object that holds the credential.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor](../../asauthorizationsecuritykeypublickeycredentialdescriptor.md): An object that holds public key credential transport information.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor.Transport](../transport.md): A structure that defines the security key credential transport type.

# ASAuthorizationAllSupportedPublicKeyCredentialDescriptorTransports (Objective-C)

**Framework:** Authentication Services  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An array of currently supported transport types.

## Declaration

```objectivec
NSArray<NSString *> *ASAuthorizationAllSupportedPublicKeyCredentialDescriptorTransports();
```

## See Also

### Request configuration

- [ASPublicKeyCredential](../../aspublickeycredential.md): An interface that defines the properties of the public key.
- [ASAuthorizationPublicKeyCredentialParameters](../../asauthorizationpublickeycredentialparameters.md): An object that provides required parameters for the credential during registration.
- [ASCOSEAlgorithmIdentifier](../../ascosealgorithmidentifier.md): An identifier for the algorithm that a credential’s key pair uses.
- [ASCOSEEllipticCurveIdentifier](../../ascoseellipticcurveidentifier.md): A structure that contains the elliptic curve identifier.
- [ASAuthorizationPublicKeyCredentialAttestationKind](../../asauthorizationpublickeycredentialattestationkind.md): A structure that defines the types of attestations a developer can request.
- [ASAuthorizationPublicKeyCredentialResidentKeyPreference](../../asauthorizationpublickeycredentialresidentkeypreference.md): A structure that specifies the relying party’s preference for resident key storage.
- [ASAuthorizationPublicKeyCredentialUserVerificationPreference](../../asauthorizationpublickeycredentialuserverificationpreference.md): A structure that defines the relying party’s user verification preference.
- [ASAuthorizationPublicKeyCredentialDescriptor](../../asauthorizationpublickeycredentialdescriptor.md): An interface that defines the credential identifier.
- [ASAuthorizationPlatformPublicKeyCredentialDescriptor](../../asauthorizationplatformpublickeycredentialdescriptor.md): An object that holds the credential.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor](../../asauthorizationsecuritykeypublickeycredentialdescriptor.md): An object that holds public key credential transport information.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptorTransport](../transport.md): A structure that defines the security key credential transport type.
