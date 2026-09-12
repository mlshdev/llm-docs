> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationplatformpublickeycredentialprovider](https://developer.apple.com/documentation/authenticationservices/asauthorizationplatformpublickeycredentialprovider)

# ASAuthorizationPlatformPublicKeyCredentialProvider (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A mechanism for providing public key credential requests to an app or service with iCloud Keychain.

## Declaration

```swift
class ASAuthorizationPlatformPublicKeyCredentialProvider
```

## Mentioned In

- [Supporting passkeys](supporting-passkeys.md)

<a id="overview"></a>

## Overview

The credential provider accesses public-private key pairs stored in iCloud Keychain for registration or authentication with a relying party. Instantiate this object, passing in the relying party identifier for the credentials.

## Topics

### Creating the provider

- [init(relyingPartyIdentifier:)](asauthorizationplatformpublickeycredentialprovider/init%28relyingpartyidentifier_%29.md): Creates the object with a relying party identifier.

### Creating the request

- [relyingPartyIdentifier](asauthorizationplatformpublickeycredentialprovider/relyingpartyidentifier.md): The domain name of the service to register or authorize against.
- [createCredentialAssertionRequest(challenge:)](asauthorizationplatformpublickeycredentialprovider/createcredentialassertionrequest%28challenge_%29.md): Creates an assertion request with a challenge.
- [createCredentialRegistrationRequest(challenge:name:userID:)](asauthorizationplatformpublickeycredentialprovider/createcredentialregistrationrequest%28challenge_name_userid_%29.md): Creates a registration request with a challenge, name, and user ID.
- [createCredentialRegistrationRequest(challenge:name:userID:requestStyle:)](asauthorizationplatformpublickeycredentialprovider/createcredentialregistrationrequest%28challenge_name_userid_requeststyle_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationProvider](asauthorizationprovider.md)
- [ASAuthorizationWebBrowserPlatformPublicKeyCredentialProvider](asauthorizationwebbrowserplatformpublickeycredentialprovider-19bq.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Credential providers

- [ASAuthorizationSecurityKeyPublicKeyCredentialProvider](asauthorizationsecuritykeypublickeycredentialprovider.md): A mechanism for providing public key credential requests to an app or service with a physical security key.

# ASAuthorizationPlatformPublicKeyCredentialProvider (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A mechanism for providing public key credential requests to an app or service with iCloud Keychain.

## Declaration

```objectivec
@interface ASAuthorizationPlatformPublicKeyCredentialProvider : NSObject
```

## Mentioned In

- [Supporting passkeys](supporting-passkeys.md)

<a id="overview"></a>

## Overview

The credential provider accesses public-private key pairs stored in iCloud Keychain for registration or authentication with a relying party. Instantiate this object, passing in the relying party identifier for the credentials.

## Topics

### Creating the provider

- [initWithRelyingPartyIdentifier:](asauthorizationplatformpublickeycredentialprovider/init%28relyingpartyidentifier_%29.md): Creates the object with a relying party identifier.

### Creating the request

- [relyingPartyIdentifier](asauthorizationplatformpublickeycredentialprovider/relyingpartyidentifier.md): The domain name of the service to register or authorize against.
- [createCredentialAssertionRequestWithChallenge:](asauthorizationplatformpublickeycredentialprovider/createcredentialassertionrequest%28challenge_%29.md): Creates an assertion request with a challenge.
- [createCredentialRegistrationRequestWithChallenge:name:userID:](asauthorizationplatformpublickeycredentialprovider/createcredentialregistrationrequest%28challenge_name_userid_%29.md): Creates a registration request with a challenge, name, and user ID.
- [createCredentialRegistrationRequestWithChallenge:name:userID:requestStyle:](asauthorizationplatformpublickeycredentialprovider/createcredentialregistrationrequest%28challenge_name_userid_requeststyle_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationProvider](asauthorizationprovider.md)
- [ASAuthorizationWebBrowserPlatformPublicKeyCredentialProvider](asauthorizationwebbrowserplatformpublickeycredentialprovider-1c8cl.md)

## See Also

### Credential providers

- [ASAuthorizationSecurityKeyPublicKeyCredentialProvider](asauthorizationsecuritykeypublickeycredentialprovider.md): A mechanism for providing public key credential requests to an app or service with a physical security key.
