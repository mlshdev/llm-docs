> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialregistration](https://developer.apple.com/documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialregistration)

# ASAuthorizationSecurityKeyPublicKeyCredentialRegistration (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A newly created security key credential that results from a credential registration request.

## Declaration

```swift
class ASAuthorizationSecurityKeyPublicKeyCredentialRegistration
```

## Mentioned In

- [Supporting Security Key Authentication Using Physical Keys](supporting-security-key-authentication-using-physical-keys.md)

<a id="overview"></a>

## Overview

Use this class to verify a successful security key authorization request in [authorizationController(controller:didCompleteWithAuthorization:)](asauthorizationcontrollerdelegate/authorizationcontroller%28controller_didcompletewithauthorization_%29.md).

## Topics

### Instance Properties

- [transports](asauthorizationsecuritykeypublickeycredentialregistration/transports.md): An array of transport types.
- [prf](asauthorizationsecuritykeypublickeycredentialregistration/prf-2p2lg.md)

### Initializers

- [init(coder:)](asauthorizationsecuritykeypublickeycredentialregistration/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationCredential](asauthorizationcredential.md)
- [ASAuthorizationPublicKeyCredentialRegistration](asauthorizationpublickeycredentialregistration.md)
- [ASPublicKeyCredential](aspublickeycredential.md)
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

### Account registration

- [ASAuthorizationPublicKeyCredentialRegistration](asauthorizationpublickeycredentialregistration.md): An interface that credential registration requests adhere to.
- [ASAuthorizationPlatformPublicKeyCredentialRegistration](asauthorizationplatformpublickeycredentialregistration.md): A newly created platform credential that results from a credential registration request.
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest](asauthorizationplatformpublickeycredentialregistrationrequest.md): The object for registering a new platform public key credential.
- [ASAuthorizationSecurityKeyPublicKeyCredentialRegistrationRequest](asauthorizationsecuritykeypublickeycredentialregistrationrequest.md): The object for registering a new security key credential.

# ASAuthorizationSecurityKeyPublicKeyCredentialRegistration (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A newly created security key credential that results from a credential registration request.

## Declaration

```objectivec
@interface ASAuthorizationSecurityKeyPublicKeyCredentialRegistration : NSObject
```

## Mentioned In

- [Supporting Security Key Authentication Using Physical Keys](supporting-security-key-authentication-using-physical-keys.md)

<a id="overview"></a>

## Overview

Use this class to verify a successful security key authorization request in [authorizationController:didCompleteWithAuthorization:](asauthorizationcontrollerdelegate/authorizationcontroller%28controller_didcompletewithauthorization_%29.md).

## Topics

### Instance Properties

- [transports](asauthorizationsecuritykeypublickeycredentialregistration/transports.md): An array of transport types.
- [prf](asauthorizationsecuritykeypublickeycredentialregistration/prf-2x3x5.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationPublicKeyCredentialRegistration](asauthorizationpublickeycredentialregistration.md)

## See Also

### Account registration

- [ASAuthorizationPublicKeyCredentialRegistration](asauthorizationpublickeycredentialregistration.md): An interface that credential registration requests adhere to.
- [ASAuthorizationPlatformPublicKeyCredentialRegistration](asauthorizationplatformpublickeycredentialregistration.md): A newly created platform credential that results from a credential registration request.
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest](asauthorizationplatformpublickeycredentialregistrationrequest.md): The object for registering a new platform public key credential.
- [ASAuthorizationSecurityKeyPublicKeyCredentialRegistrationRequest](asauthorizationsecuritykeypublickeycredentialregistrationrequest.md): The object for registering a new security key credential.
