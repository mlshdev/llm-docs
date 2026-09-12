> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationrequest](https://developer.apple.com/documentation/authenticationservices/asauthorizationrequest)

# ASAuthorizationRequest (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A base class for different kinds of authorization requests.

## Declaration

```swift
class ASAuthorizationRequest
```

<a id="overview"></a>

## Overview

Use one of the concrete requests, like [ASAuthorizationAppleIDRequest](asauthorizationappleidrequest.md), [ASAuthorizationPasswordRequest](asauthorizationpasswordrequest.md), or [ASAuthorizationSingleSignOnRequest](asauthorizationsinglesignonrequest.md).

You typically generate one of these using the corresponding provider, which is an instance of [ASAuthorizationAppleIDProvider](asauthorizationappleidprovider.md), [ASAuthorizationPasswordProvider](asauthorizationpasswordprovider.md), or [ASAuthorizationSingleSignOnProvider](asauthorizationsinglesignonprovider.md), respectively.

## Topics

### Inspecting the Provider

- [provider](asauthorizationrequest/provider.md): The provider servicing the request.
- [ASAuthorizationProvider](asauthorizationprovider.md): An interface that authorization providers must implement.

### Initializers

- [init(coder:)](asauthorizationrequest/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ASAuthorizationAccountCreationPlatformPublicKeyCredentialRequest](asauthorizationaccountcreationplatformpublickeycredentialrequest.md)
- [ASAuthorizationOpenIDRequest](asauthorizationopenidrequest.md)
- [ASAuthorizationPasswordRequest](asauthorizationpasswordrequest.md)
- [ASAuthorizationPlatformPublicKeyCredentialAssertionRequest](asauthorizationplatformpublickeycredentialassertionrequest.md)
- [ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest](asauthorizationplatformpublickeycredentialregistrationrequest.md)
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest](asauthorizationsecuritykeypublickeycredentialassertionrequest.md)
- [ASAuthorizationSecurityKeyPublicKeyCredentialRegistrationRequest](asauthorizationsecuritykeypublickeycredentialregistrationrequest.md)

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

### Inspecting requests

- [authorizationRequests](asauthorizationcontroller/authorizationrequests.md): The authorization requests that the controller manages.
- [customAuthorizationMethods](asauthorizationcontroller/customauthorizationmethods.md): An array of custom authorization methods for the user to choose.

# ASAuthorizationRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A base class for different kinds of authorization requests.

## Declaration

```objectivec
@interface ASAuthorizationRequest : NSObject
```

<a id="overview"></a>

## Overview

Use one of the concrete requests, like [ASAuthorizationAppleIDRequest](asauthorizationappleidrequest.md), [ASAuthorizationPasswordRequest](asauthorizationpasswordrequest.md), or [ASAuthorizationSingleSignOnRequest](asauthorizationsinglesignonrequest.md).

You typically generate one of these using the corresponding provider, which is an instance of [ASAuthorizationAppleIDProvider](asauthorizationappleidprovider.md), [ASAuthorizationPasswordProvider](asauthorizationpasswordprovider.md), or [ASAuthorizationSingleSignOnProvider](asauthorizationsinglesignonprovider.md), respectively.

## Topics

### Inspecting the Provider

- [provider](asauthorizationrequest/provider.md): The provider servicing the request.
- [ASAuthorizationProvider](asauthorizationprovider.md): An interface that authorization providers must implement.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ASAuthorizationOpenIDRequest](asauthorizationopenidrequest.md)
- [ASAuthorizationPasswordRequest](asauthorizationpasswordrequest.md)
- [ASAuthorizationPlatformPublicKeyCredentialAssertionRequest](asauthorizationplatformpublickeycredentialassertionrequest.md)
- [ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest](asauthorizationplatformpublickeycredentialregistrationrequest.md)
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest](asauthorizationsecuritykeypublickeycredentialassertionrequest.md)
- [ASAuthorizationSecurityKeyPublicKeyCredentialRegistrationRequest](asauthorizationsecuritykeypublickeycredentialregistrationrequest.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Inspecting requests

- [authorizationRequests](asauthorizationcontroller/authorizationrequests.md): The authorization requests that the controller manages.
- [customAuthorizationMethods](asauthorizationcontroller/customauthorizationmethods.md): An array of custom authorization methods for the user to choose.
