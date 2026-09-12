> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialregistrationrequest](https://developer.apple.com/documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialregistrationrequest)

# ASAuthorizationSecurityKeyPublicKeyCredentialRegistrationRequest (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The object for registering a new security key credential.

## Declaration

```swift
class ASAuthorizationSecurityKeyPublicKeyCredentialRegistrationRequest
```

<a id="overview"></a>

## Overview

Create an instance of this class when registering for a new credential using security key authorization.

## Topics

### Getting the properties

- [credentialParameters](asauthorizationsecuritykeypublickeycredentialregistrationrequest/credentialparameters.md): An array of parameters for the credential.
- [excludedCredentials](asauthorizationsecuritykeypublickeycredentialregistrationrequest/excludedcredentials.md): An array of excluded parameters for the credential.
- [residentKeyPreference](asauthorizationsecuritykeypublickeycredentialregistrationrequest/residentkeypreference.md): The preference that indicates where the resident key resides.

### Instance Properties

- [prf](asauthorizationsecuritykeypublickeycredentialregistrationrequest/prf-964zl.md)

## Relationships

### Inherits From

- [ASAuthorizationRequest](asauthorizationrequest.md)

### Conforms To

- [ASAuthorizationPublicKeyCredentialRegistrationRequest](asauthorizationpublickeycredentialregistrationrequest.md)
- [ASAuthorizationWebBrowserSecurityKeyPublicKeyCredentialRegistrationRequest](asauthorizationwebbrowsersecuritykeypublickeycredentialregistrationrequest.md)
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
- [ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest](asauthorizationplatformpublickeycredentialregistrationrequest.md): The object for registering a new platform public key credential.

# ASAuthorizationSecurityKeyPublicKeyCredentialRegistrationRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The object for registering a new security key credential.

## Declaration

```objectivec
@interface ASAuthorizationSecurityKeyPublicKeyCredentialRegistrationRequest : ASAuthorizationRequest
```

<a id="overview"></a>

## Overview

Create an instance of this class when registering for a new credential using security key authorization.

## Topics

### Getting the properties

- [credentialParameters](asauthorizationsecuritykeypublickeycredentialregistrationrequest/credentialparameters.md): An array of parameters for the credential.
- [excludedCredentials](asauthorizationsecuritykeypublickeycredentialregistrationrequest/excludedcredentials.md): An array of excluded parameters for the credential.
- [residentKeyPreference](asauthorizationsecuritykeypublickeycredentialregistrationrequest/residentkeypreference.md): The preference that indicates where the resident key resides.

### Instance Properties

- [prf](asauthorizationsecuritykeypublickeycredentialregistrationrequest/prf-2ys9l.md)

## Relationships

### Inherits From

- [ASAuthorizationRequest](asauthorizationrequest.md)

### Conforms To

- [ASAuthorizationPublicKeyCredentialRegistrationRequest](asauthorizationpublickeycredentialregistrationrequest.md)
- [ASAuthorizationWebBrowserSecurityKeyPublicKeyCredentialRegistrationRequest](asauthorizationwebbrowsersecuritykeypublickeycredentialregistrationrequest.md)

## See Also

### Account registration

- [ASAuthorizationPublicKeyCredentialRegistration](asauthorizationpublickeycredentialregistration.md): An interface that credential registration requests adhere to.
- [ASAuthorizationPlatformPublicKeyCredentialRegistration](asauthorizationplatformpublickeycredentialregistration.md): A newly created platform credential that results from a credential registration request.
- [ASAuthorizationSecurityKeyPublicKeyCredentialRegistration](asauthorizationsecuritykeypublickeycredentialregistration.md): A newly created security key credential that results from a credential registration request.
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest](asauthorizationplatformpublickeycredentialregistrationrequest.md): The object for registering a new platform public key credential.
