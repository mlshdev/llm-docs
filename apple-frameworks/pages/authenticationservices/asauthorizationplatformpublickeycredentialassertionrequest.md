> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationplatformpublickeycredentialassertionrequest](https://developer.apple.com/documentation/authenticationservices/asauthorizationplatformpublickeycredentialassertionrequest)

# ASAuthorizationPlatformPublicKeyCredentialAssertionRequest (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The concrete assertion request type for platform credentials.

## Declaration

```swift
class ASAuthorizationPlatformPublicKeyCredentialAssertionRequest
```

## Mentioned In

- [Supporting passkeys](supporting-passkeys.md)

<a id="overview"></a>

## Overview

Use this class to sign in with an existing credential that the system stores in iCloud Keychain.

## Topics

### Accessing request properties

- [allowedCredentials](asauthorizationplatformpublickeycredentialassertionrequest/allowedcredentials.md): The array of allowed credentials.
- [largeBlob](asauthorizationplatformpublickeycredentialassertionrequest/largeblob-9kvvl.md): The request’s binary large object value.
- [prf](asauthorizationplatformpublickeycredentialassertionrequest/prf-47uoa.md)

## Relationships

### Inherits From

- [ASAuthorizationRequest](asauthorizationrequest.md)

### Conforms To

- [ASAuthorizationPublicKeyCredentialAssertionRequest](asauthorizationpublickeycredentialassertionrequest.md)
- [ASAuthorizationWebBrowserExternallyAuthenticatableRequest](asauthorizationwebbrowserexternallyauthenticatablerequest.md)
- [ASAuthorizationWebBrowserPlatformPublicKeyCredentialAssertionRequest](asauthorizationwebbrowserplatformpublickeycredentialassertionrequest.md)
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
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest](asauthorizationsecuritykeypublickeycredentialassertionrequest.md): A class that defines the assertion request type for security key credentials.

# ASAuthorizationPlatformPublicKeyCredentialAssertionRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The concrete assertion request type for platform credentials.

## Declaration

```objectivec
@interface ASAuthorizationPlatformPublicKeyCredentialAssertionRequest : ASAuthorizationRequest
```

## Mentioned In

- [Supporting passkeys](supporting-passkeys.md)

<a id="overview"></a>

## Overview

Use this class to sign in with an existing credential that the system stores in iCloud Keychain.

## Topics

### Accessing request properties

- [allowedCredentials](asauthorizationplatformpublickeycredentialassertionrequest/allowedcredentials.md): The array of allowed credentials.
- [largeBlob](asauthorizationplatformpublickeycredentialassertionrequest/largeblob-5mg1q.md): The request’s binary large object value.
- [ASAuthorizationPublicKeyCredentialPRFAssertionInput](asauthorizationpublickeycredentialprfassertioninput-c.class.md): A type that represents input for the web authentication PRF extension in passkey assertion requests.

### Instance Properties

- [prf](asauthorizationplatformpublickeycredentialassertionrequest/prf-60tle.md)

## Relationships

### Inherits From

- [ASAuthorizationRequest](asauthorizationrequest.md)

### Conforms To

- [ASAuthorizationPublicKeyCredentialAssertionRequest](asauthorizationpublickeycredentialassertionrequest.md)
- [ASAuthorizationWebBrowserExternallyAuthenticatableRequest](asauthorizationwebbrowserexternallyauthenticatablerequest.md)
- [ASAuthorizationWebBrowserPlatformPublicKeyCredentialAssertionRequest](asauthorizationwebbrowserplatformpublickeycredentialassertionrequest.md)

## See Also

### Account authentication

- [ASAuthorizationPublicKeyCredentialAssertion](asauthorizationpublickeycredentialassertion.md): An interface for establishing a public key-based assertion.
- [ASAuthorizationPlatformPublicKeyCredentialAssertion](asauthorizationplatformpublickeycredentialassertion.md): A class that represents the platform credential assertion type.
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertion](asauthorizationsecuritykeypublickeycredentialassertion.md): A class that represents the security key credential assertion type.
- [ASAuthorizationPublicKeyCredentialAssertionRequest](asauthorizationpublickeycredentialassertionrequest.md): An interface for requesting a public key-based credential assertion.
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest](asauthorizationsecuritykeypublickeycredentialassertionrequest.md): A class that defines the assertion request type for security key credentials.
