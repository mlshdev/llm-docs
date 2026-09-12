> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialdescriptor/transport](https://developer.apple.com/documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialdescriptor/transport)

# ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor.Transport (Swift)

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A structure that defines the security key credential transport type.

## Declaration

```swift
struct Transport
```

## Topics

### Creating the transport type

- [init(\_:)](transport/init%28__%29.md): Creates the object with a transport type.
- [init(rawValue:)](transport/init%28rawvalue_%29.md): Creates the object with a preference.

### Getting the properties

- [allSupported](transport/allsupported.md): An array of currently supported transport types.
- [bluetooth](transport/bluetooth.md): The Bluetooth transport type.
- [nfc](transport/nfc.md): The Near Field Communication transport type.
- [usb](transport/usb.md): The USB transport type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Request configuration

- [ASPublicKeyCredential](../aspublickeycredential.md): An interface that defines the properties of the public key.
- [ASAuthorizationPublicKeyCredentialParameters](../asauthorizationpublickeycredentialparameters.md): An object that provides required parameters for the credential during registration.
- [ASCOSEAlgorithmIdentifier](../ascosealgorithmidentifier.md): An identifier for the algorithm that a credential’s key pair uses.
- [ASCOSEEllipticCurveIdentifier](../ascoseellipticcurveidentifier.md): A structure that contains the elliptic curve identifier.
- [ASAuthorizationPublicKeyCredentialAttestationKind](../asauthorizationpublickeycredentialattestationkind.md): A structure that defines the types of attestations a developer can request.
- [ASAuthorizationPublicKeyCredentialResidentKeyPreference](../asauthorizationpublickeycredentialresidentkeypreference.md): A structure that specifies the relying party’s preference for resident key storage.
- [ASAuthorizationPublicKeyCredentialUserVerificationPreference](../asauthorizationpublickeycredentialuserverificationpreference.md): A structure that defines the relying party’s user verification preference.
- [ASAuthorizationPublicKeyCredentialDescriptor](../asauthorizationpublickeycredentialdescriptor.md): An interface that defines the credential identifier.
- [ASAuthorizationPlatformPublicKeyCredentialDescriptor](../asauthorizationplatformpublickeycredentialdescriptor.md): An object that holds the credential.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor](../asauthorizationsecuritykeypublickeycredentialdescriptor.md): An object that holds public key credential transport information.
- [allSupported](transport/allsupported.md): An array of currently supported transport types.

# ASAuthorizationSecurityKeyPublicKeyCredentialDescriptorTransport (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A structure that defines the security key credential transport type.

## Declaration

```objectivec
typedef NSString * ASAuthorizationSecurityKeyPublicKeyCredentialDescriptorTransport;
```

## Topics

### Getting the properties

- [ASAuthorizationAllSupportedPublicKeyCredentialDescriptorTransports](transport/allsupported.md): An array of currently supported transport types.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptorTransportBluetooth](transport/bluetooth.md): The Bluetooth transport type.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptorTransportNFC](transport/nfc.md): The Near Field Communication transport type.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptorTransportUSB](transport/usb.md): The USB transport type.

## See Also

### Request configuration

- [ASPublicKeyCredential](../aspublickeycredential.md): An interface that defines the properties of the public key.
- [ASAuthorizationPublicKeyCredentialParameters](../asauthorizationpublickeycredentialparameters.md): An object that provides required parameters for the credential during registration.
- [ASCOSEAlgorithmIdentifier](../ascosealgorithmidentifier.md): An identifier for the algorithm that a credential’s key pair uses.
- [ASCOSEEllipticCurveIdentifier](../ascoseellipticcurveidentifier.md): A structure that contains the elliptic curve identifier.
- [ASAuthorizationPublicKeyCredentialAttestationKind](../asauthorizationpublickeycredentialattestationkind.md): A structure that defines the types of attestations a developer can request.
- [ASAuthorizationPublicKeyCredentialResidentKeyPreference](../asauthorizationpublickeycredentialresidentkeypreference.md): A structure that specifies the relying party’s preference for resident key storage.
- [ASAuthorizationPublicKeyCredentialUserVerificationPreference](../asauthorizationpublickeycredentialuserverificationpreference.md): A structure that defines the relying party’s user verification preference.
- [ASAuthorizationPublicKeyCredentialDescriptor](../asauthorizationpublickeycredentialdescriptor.md): An interface that defines the credential identifier.
- [ASAuthorizationPlatformPublicKeyCredentialDescriptor](../asauthorizationplatformpublickeycredentialdescriptor.md): An object that holds the credential.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor](../asauthorizationsecuritykeypublickeycredentialdescriptor.md): An object that holds public key credential transport information.
- [ASAuthorizationAllSupportedPublicKeyCredentialDescriptorTransports](transport/allsupported.md): An array of currently supported transport types.
