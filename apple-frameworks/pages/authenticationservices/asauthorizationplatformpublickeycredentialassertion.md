> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationplatformpublickeycredentialassertion](https://developer.apple.com/documentation/authenticationservices/asauthorizationplatformpublickeycredentialassertion)

# ASAuthorizationPlatformPublicKeyCredentialAssertion (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A class that represents the platform credential assertion type.

## Declaration

```swift
class ASAuthorizationPlatformPublicKeyCredentialAssertion
```

<a id="overview"></a>

## Overview

The device creates an assertion when signing in with an existing credential. Use this class to verify the platform credential assertion when the authorization controller calls [authorizationController(controller:didCompleteWithAuthorization:)](asauthorizationcontrollerdelegate/authorizationcontroller%28controller_didcompletewithauthorization_%29.md).

## Topics

### Creating requests

- [ASAuthorizationPlatformPublicKeyCredentialAssertionRequest](asauthorizationplatformpublickeycredentialassertionrequest.md): The concrete assertion request type for platform credentials.
- [ASAuthorizationPlatformPublicKeyCredentialDescriptor](asauthorizationplatformpublickeycredentialdescriptor.md): An object that holds the credential.

### Accessing assertion properties

- [largeBlob](asauthorizationplatformpublickeycredentialassertion/largeblob-29ggs.md): The request’s binary large object value.

### Initializers

- [init(coder:)](asauthorizationplatformpublickeycredentialassertion/init%28coder_%29.md)

### Instance Properties

- [attachment](asauthorizationplatformpublickeycredentialassertion/attachment.md)
- [prf](asauthorizationplatformpublickeycredentialassertion/prf-8o9sr.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationCredential](asauthorizationcredential.md)
- [ASAuthorizationPublicKeyCredentialAssertion](asauthorizationpublickeycredentialassertion.md)
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

### Account authentication

- [ASAuthorizationPublicKeyCredentialAssertion](asauthorizationpublickeycredentialassertion.md): An interface for establishing a public key-based assertion.
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertion](asauthorizationsecuritykeypublickeycredentialassertion.md): A class that represents the security key credential assertion type.
- [ASAuthorizationPublicKeyCredentialAssertionRequest](asauthorizationpublickeycredentialassertionrequest.md): An interface for requesting a public key-based credential assertion.
- [ASAuthorizationPlatformPublicKeyCredentialAssertionRequest](asauthorizationplatformpublickeycredentialassertionrequest.md): The concrete assertion request type for platform credentials.
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest](asauthorizationsecuritykeypublickeycredentialassertionrequest.md): A class that defines the assertion request type for security key credentials.

# ASAuthorizationPlatformPublicKeyCredentialAssertion (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A class that represents the platform credential assertion type.

## Declaration

```objectivec
@interface ASAuthorizationPlatformPublicKeyCredentialAssertion : NSObject
```

<a id="overview"></a>

## Overview

The device creates an assertion when signing in with an existing credential. Use this class to verify the platform credential assertion when the authorization controller calls [authorizationController:didCompleteWithAuthorization:](asauthorizationcontrollerdelegate/authorizationcontroller%28controller_didcompletewithauthorization_%29.md).

## Topics

### Creating requests

- [ASAuthorizationPlatformPublicKeyCredentialAssertionRequest](asauthorizationplatformpublickeycredentialassertionrequest.md): The concrete assertion request type for platform credentials.
- [ASAuthorizationPlatformPublicKeyCredentialDescriptor](asauthorizationplatformpublickeycredentialdescriptor.md): An object that holds the credential.

### Accessing assertion properties

- [largeBlob](asauthorizationplatformpublickeycredentialassertion/largeblob-97tbp.md): The request’s binary large object value.

### Instance Properties

- [attachment](asauthorizationplatformpublickeycredentialassertion/attachment.md)
- [prf](asauthorizationplatformpublickeycredentialassertion/prf-8blir.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationPublicKeyCredentialAssertion](asauthorizationpublickeycredentialassertion.md)

## See Also

### Account authentication

- [ASAuthorizationPublicKeyCredentialAssertion](asauthorizationpublickeycredentialassertion.md): An interface for establishing a public key-based assertion.
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertion](asauthorizationsecuritykeypublickeycredentialassertion.md): A class that represents the security key credential assertion type.
- [ASAuthorizationPublicKeyCredentialAssertionRequest](asauthorizationpublickeycredentialassertionrequest.md): An interface for requesting a public key-based credential assertion.
- [ASAuthorizationPlatformPublicKeyCredentialAssertionRequest](asauthorizationplatformpublickeycredentialassertionrequest.md): The concrete assertion request type for platform credentials.
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest](asauthorizationsecuritykeypublickeycredentialassertionrequest.md): A class that defines the assertion request type for security key credentials.
