> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialassertionrequest](https://developer.apple.com/documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialassertionrequest)

# ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A class that defines the assertion request type for security key credentials.

## Declaration

```swift
class ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest
```

## Mentioned In

- [Supporting Security Key Authentication Using Physical Keys](supporting-security-key-authentication-using-physical-keys.md)

<a id="overview"></a>

## Overview

Use this class to sign in with an existing credential on a security key.

## Topics

### Getting the properties

- [allowedCredentials](asauthorizationsecuritykeypublickeycredentialassertionrequest/allowedcredentials.md): An array of allowed credentials.

### Instance Properties

- [appID](asauthorizationsecuritykeypublickeycredentialassertionrequest/appid.md)
- [prf](asauthorizationsecuritykeypublickeycredentialassertionrequest/prf-7pp6b.md)
- [prf](asauthorizationsecuritykeypublickeycredentialassertionrequest/prf-99zke.md)

## Relationships

### Inherits From

- [ASAuthorizationRequest](asauthorizationrequest.md)

### Conforms To

- [ASAuthorizationPublicKeyCredentialAssertionRequest](asauthorizationpublickeycredentialassertionrequest.md)
- [ASAuthorizationWebBrowserSecurityKeyPublicKeyCredentialAssertionRequest](asauthorizationwebbrowsersecuritykeypublickeycredentialassertionrequest.md)
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

### Account authentication

- [ASAuthorizationPublicKeyCredentialAssertion](asauthorizationpublickeycredentialassertion.md): An interface for establishing a public key-based assertion.
- [ASAuthorizationPlatformPublicKeyCredentialAssertion](asauthorizationplatformpublickeycredentialassertion.md): A class that represents the platform credential assertion type.
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertion](asauthorizationsecuritykeypublickeycredentialassertion.md): A class that represents the security key credential assertion type.
- [ASAuthorizationPublicKeyCredentialAssertionRequest](asauthorizationpublickeycredentialassertionrequest.md): An interface for requesting a public key-based credential assertion.
- [ASAuthorizationPlatformPublicKeyCredentialAssertionRequest](asauthorizationplatformpublickeycredentialassertionrequest.md): The concrete assertion request type for platform credentials.

# ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A class that defines the assertion request type for security key credentials.

## Declaration

```objectivec
@interface ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest : ASAuthorizationRequest
```

## Mentioned In

- [Supporting Security Key Authentication Using Physical Keys](supporting-security-key-authentication-using-physical-keys.md)

<a id="overview"></a>

## Overview

Use this class to sign in with an existing credential on a security key.

## Topics

### Getting the properties

- [allowedCredentials](asauthorizationsecuritykeypublickeycredentialassertionrequest/allowedcredentials.md): An array of allowed credentials.

### Instance Properties

- [appID](asauthorizationsecuritykeypublickeycredentialassertionrequest/appid.md)
- [prf](asauthorizationsecuritykeypublickeycredentialassertionrequest/prf-99zke.md)

## Relationships

### Inherits From

- [ASAuthorizationRequest](asauthorizationrequest.md)

### Conforms To

- [ASAuthorizationPublicKeyCredentialAssertionRequest](asauthorizationpublickeycredentialassertionrequest.md)
- [ASAuthorizationWebBrowserSecurityKeyPublicKeyCredentialAssertionRequest](asauthorizationwebbrowsersecuritykeypublickeycredentialassertionrequest.md)

## See Also

### Account authentication

- [ASAuthorizationPublicKeyCredentialAssertion](asauthorizationpublickeycredentialassertion.md): An interface for establishing a public key-based assertion.
- [ASAuthorizationPlatformPublicKeyCredentialAssertion](asauthorizationplatformpublickeycredentialassertion.md): A class that represents the platform credential assertion type.
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertion](asauthorizationsecuritykeypublickeycredentialassertion.md): A class that represents the security key credential assertion type.
- [ASAuthorizationPublicKeyCredentialAssertionRequest](asauthorizationpublickeycredentialassertionrequest.md): An interface for requesting a public key-based credential assertion.
- [ASAuthorizationPlatformPublicKeyCredentialAssertionRequest](asauthorizationplatformpublickeycredentialassertionrequest.md): The concrete assertion request type for platform credentials.
