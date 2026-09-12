> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationplatformpublickeycredentialregistrationrequest](https://developer.apple.com/documentation/authenticationservices/asauthorizationplatformpublickeycredentialregistrationrequest)

# ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The object for registering a new platform public key credential.

## Declaration

```swift
class ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest
```

## Mentioned In

- [Supporting passkeys](supporting-passkeys.md)

<a id="overview"></a>

## Overview

Create an instance of this class when registering for a new credential using platform authorization.

## Topics

### Accessing request properties

- [largeBlob](asauthorizationplatformpublickeycredentialregistrationrequest/largeblob-5ismm.md): The request’s binary large object value.

### Instance Properties

- [prf](asauthorizationplatformpublickeycredentialregistrationrequest/prf-3d9iw.md)
- [requestStyle](asauthorizationplatformpublickeycredentialregistrationrequest/requeststyle-swift.property.md)

### Enumerations

- [ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest.RequestStyle](asauthorizationplatformpublickeycredentialregistrationrequest/requeststyle-swift.enum.md)

## Relationships

### Inherits From

- [ASAuthorizationRequest](asauthorizationrequest.md)

### Conforms To

- [ASAuthorizationPublicKeyCredentialRegistrationRequest](asauthorizationpublickeycredentialregistrationrequest.md)
- [ASAuthorizationWebBrowserPlatformPublicKeyCredentialRegistrationRequest](asauthorizationwebbrowserplatformpublickeycredentialregistrationrequest.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
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
- [ASAuthorizationSecurityKeyPublicKeyCredentialRegistration](asauthorizationsecuritykeypublickeycredentialregistration.md): A newly created security key credential that results from a credential registration request.
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASAuthorizationSecurityKeyPublicKeyCredentialRegistrationRequest](asauthorizationsecuritykeypublickeycredentialregistrationrequest.md): The object for registering a new security key credential.

# ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The object for registering a new platform public key credential.

## Declaration

```objectivec
@interface ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest : ASAuthorizationRequest
```

## Mentioned In

- [Supporting passkeys](supporting-passkeys.md)

<a id="overview"></a>

## Overview

Create an instance of this class when registering for a new credential using platform authorization.

## Topics

### Accessing request properties

- [largeBlob](asauthorizationplatformpublickeycredentialregistrationrequest/largeblob-28v2m.md): The request’s binary large object value.

### Instance Properties

- [prf](asauthorizationplatformpublickeycredentialregistrationrequest/prf-8fus5.md)
- [requestStyle](asauthorizationplatformpublickeycredentialregistrationrequest/requeststyle-swift.property.md)

## Relationships

### Inherits From

- [ASAuthorizationRequest](asauthorizationrequest.md)

### Conforms To

- [ASAuthorizationPublicKeyCredentialRegistrationRequest](asauthorizationpublickeycredentialregistrationrequest.md)
- [ASAuthorizationWebBrowserPlatformPublicKeyCredentialRegistrationRequest](asauthorizationwebbrowserplatformpublickeycredentialregistrationrequest.md)

## See Also

### Account registration

- [ASAuthorizationPublicKeyCredentialRegistration](asauthorizationpublickeycredentialregistration.md): An interface that credential registration requests adhere to.
- [ASAuthorizationPlatformPublicKeyCredentialRegistration](asauthorizationplatformpublickeycredentialregistration.md): A newly created platform credential that results from a credential registration request.
- [ASAuthorizationSecurityKeyPublicKeyCredentialRegistration](asauthorizationsecuritykeypublickeycredentialregistration.md): A newly created security key credential that results from a credential registration request.
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASAuthorizationSecurityKeyPublicKeyCredentialRegistrationRequest](asauthorizationsecuritykeypublickeycredentialregistrationrequest.md): The object for registering a new security key credential.
