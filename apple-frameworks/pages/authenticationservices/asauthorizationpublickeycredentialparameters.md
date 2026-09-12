> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialparameters](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialparameters)

# ASAuthorizationPublicKeyCredentialParameters (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

An object that provides required parameters for the credential during registration.

## Declaration

```swift
class ASAuthorizationPublicKeyCredentialParameters
```

<a id="overview"></a>

## Overview

This object is mainly for signing algorithm negotiation, and is only relevant for physical security keys.

## Topics

### Getting the parameters

- [init(algorithm:)](asauthorizationpublickeycredentialparameters/init%28algorithm_%29.md): Creates the object with an algorithm.
- [algorithm](asauthorizationpublickeycredentialparameters/algorithm.md): The algorithm to use for negitation between the authenticator and the relying party.

### Initializers

- [init(coder:)](asauthorizationpublickeycredentialparameters/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Request configuration

- [ASPublicKeyCredential](aspublickeycredential.md): An interface that defines the properties of the public key.
- [ASCOSEAlgorithmIdentifier](ascosealgorithmidentifier.md): An identifier for the algorithm that a credential’s key pair uses.
- [ASCOSEEllipticCurveIdentifier](ascoseellipticcurveidentifier.md): A structure that contains the elliptic curve identifier.
- [ASAuthorizationPublicKeyCredentialAttestationKind](asauthorizationpublickeycredentialattestationkind.md): A structure that defines the types of attestations a developer can request.
- [ASAuthorizationPublicKeyCredentialResidentKeyPreference](asauthorizationpublickeycredentialresidentkeypreference.md): A structure that specifies the relying party’s preference for resident key storage.
- [ASAuthorizationPublicKeyCredentialUserVerificationPreference](asauthorizationpublickeycredentialuserverificationpreference.md): A structure that defines the relying party’s user verification preference.
- [ASAuthorizationPublicKeyCredentialDescriptor](asauthorizationpublickeycredentialdescriptor.md): An interface that defines the credential identifier.
- [ASAuthorizationPlatformPublicKeyCredentialDescriptor](asauthorizationplatformpublickeycredentialdescriptor.md): An object that holds the credential.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor](asauthorizationsecuritykeypublickeycredentialdescriptor.md): An object that holds public key credential transport information.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor.Transport](asauthorizationsecuritykeypublickeycredentialdescriptor/transport.md): A structure that defines the security key credential transport type.
- [allSupported](asauthorizationsecuritykeypublickeycredentialdescriptor/transport/allsupported.md): An array of currently supported transport types.

# ASAuthorizationPublicKeyCredentialParameters (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

An object that provides required parameters for the credential during registration.

## Declaration

```objectivec
@interface ASAuthorizationPublicKeyCredentialParameters : NSObject
```

<a id="overview"></a>

## Overview

This object is mainly for signing algorithm negotiation, and is only relevant for physical security keys.

## Topics

### Getting the parameters

- [initWithAlgorithm:](asauthorizationpublickeycredentialparameters/init%28algorithm_%29.md): Creates the object with an algorithm.
- [algorithm](asauthorizationpublickeycredentialparameters/algorithm.md): The algorithm to use for negitation between the authenticator and the relying party.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Request configuration

- [ASPublicKeyCredential](aspublickeycredential.md): An interface that defines the properties of the public key.
- [ASCOSEAlgorithmIdentifier](ascosealgorithmidentifier.md): An identifier for the algorithm that a credential’s key pair uses.
- [ASCOSEEllipticCurveIdentifier](ascoseellipticcurveidentifier.md): A structure that contains the elliptic curve identifier.
- [ASAuthorizationPublicKeyCredentialAttestationKind](asauthorizationpublickeycredentialattestationkind.md): A structure that defines the types of attestations a developer can request.
- [ASAuthorizationPublicKeyCredentialResidentKeyPreference](asauthorizationpublickeycredentialresidentkeypreference.md): A structure that specifies the relying party’s preference for resident key storage.
- [ASAuthorizationPublicKeyCredentialUserVerificationPreference](asauthorizationpublickeycredentialuserverificationpreference.md): A structure that defines the relying party’s user verification preference.
- [ASAuthorizationPublicKeyCredentialDescriptor](asauthorizationpublickeycredentialdescriptor.md): An interface that defines the credential identifier.
- [ASAuthorizationPlatformPublicKeyCredentialDescriptor](asauthorizationplatformpublickeycredentialdescriptor.md): An object that holds the credential.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor](asauthorizationsecuritykeypublickeycredentialdescriptor.md): An object that holds public key credential transport information.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptorTransport](asauthorizationsecuritykeypublickeycredentialdescriptor/transport.md): A structure that defines the security key credential transport type.
- [ASAuthorizationAllSupportedPublicKeyCredentialDescriptorTransports](asauthorizationsecuritykeypublickeycredentialdescriptor/transport/allsupported.md): An array of currently supported transport types.
