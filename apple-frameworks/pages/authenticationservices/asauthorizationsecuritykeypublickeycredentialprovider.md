> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialprovider](https://developer.apple.com/documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialprovider)

# ASAuthorizationSecurityKeyPublicKeyCredentialProvider (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A mechanism for providing public key credential requests to an app or service with a physical security key.

## Declaration

```swift
class ASAuthorizationSecurityKeyPublicKeyCredentialProvider
```

## Mentioned In

- [Supporting Security Key Authentication Using Physical Keys](supporting-security-key-authentication-using-physical-keys.md)

<a id="overview"></a>

## Overview

The credential provider accesses public-private key pairs stored on a physical security key for registration or authentication with a relying party. Instantiate this object, passing in the relying party identifier for the credentials.

## Topics

### Creating the provider

- [init(relyingPartyIdentifier:)](asauthorizationsecuritykeypublickeycredentialprovider/init%28relyingpartyidentifier_%29.md): Creates the object with a relying party identifier.

### Creating the request

- [relyingPartyIdentifier](asauthorizationsecuritykeypublickeycredentialprovider/relyingpartyidentifier.md): The domain name of the service to authorize against.
- [createCredentialAssertionRequest(challenge:)](asauthorizationsecuritykeypublickeycredentialprovider/createcredentialassertionrequest%28challenge_%29.md): Creates an assertion request with a challenge.
- [createCredentialRegistrationRequest(challenge:displayName:name:userID:)](asauthorizationsecuritykeypublickeycredentialprovider/createcredentialregistrationrequest%28challenge_displayname_name_userid_%29.md): Creates a registration request with a challenge, display name, and user ID.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationProvider](asauthorizationprovider.md)
- [ASAuthorizationWebBrowserSecurityKeyPublicKeyCredentialProvider](asauthorizationwebbrowsersecuritykeypublickeycredentialprovider-8xc1s.md)
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

- [ASAuthorizationPlatformPublicKeyCredentialProvider](asauthorizationplatformpublickeycredentialprovider.md): A mechanism for providing public key credential requests to an app or service with iCloud Keychain.

# ASAuthorizationSecurityKeyPublicKeyCredentialProvider (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A mechanism for providing public key credential requests to an app or service with a physical security key.

## Declaration

```objectivec
@interface ASAuthorizationSecurityKeyPublicKeyCredentialProvider : NSObject
```

## Mentioned In

- [Supporting Security Key Authentication Using Physical Keys](supporting-security-key-authentication-using-physical-keys.md)

<a id="overview"></a>

## Overview

The credential provider accesses public-private key pairs stored on a physical security key for registration or authentication with a relying party. Instantiate this object, passing in the relying party identifier for the credentials.

## Topics

### Creating the provider

- [initWithRelyingPartyIdentifier:](asauthorizationsecuritykeypublickeycredentialprovider/init%28relyingpartyidentifier_%29.md): Creates the object with a relying party identifier.

### Creating the request

- [relyingPartyIdentifier](asauthorizationsecuritykeypublickeycredentialprovider/relyingpartyidentifier.md): The domain name of the service to authorize against.
- [createCredentialAssertionRequestWithChallenge:](asauthorizationsecuritykeypublickeycredentialprovider/createcredentialassertionrequest%28challenge_%29.md): Creates an assertion request with a challenge.
- [createCredentialRegistrationRequestWithChallenge:displayName:name:userID:](asauthorizationsecuritykeypublickeycredentialprovider/createcredentialregistrationrequest%28challenge_displayname_name_userid_%29.md): Creates a registration request with a challenge, display name, and user ID.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationProvider](asauthorizationprovider.md)
- [ASAuthorizationWebBrowserSecurityKeyPublicKeyCredentialProvider](asauthorizationwebbrowsersecuritykeypublickeycredentialprovider-4gzot.md)

## See Also

### Credential providers

- [ASAuthorizationPlatformPublicKeyCredentialProvider](asauthorizationplatformpublickeycredentialprovider.md): A mechanism for providing public key credential requests to an app or service with iCloud Keychain.
