> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialassertion](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialassertion)

# ASAuthorizationPublicKeyCredentialAssertion (Swift)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

An interface for establishing a public key-based assertion.

## Declaration

```swift
protocol ASAuthorizationPublicKeyCredentialAssertion : ASPublicKeyCredential
```

<a id="overview"></a>

## Overview

Both [ASAuthorizationSecurityKeyPublicKeyCredentialAssertion](asauthorizationsecuritykeypublickeycredentialassertion.md) and [ASAuthorizationPlatformPublicKeyCredentialAssertion](asauthorizationplatformpublickeycredentialassertion.md) adhere to this interface.

## Topics

### Getting the properties

- [signature](asauthorizationpublickeycredentialassertion/signature.md): The signature for the assertion.
- [userID](asauthorizationpublickeycredentialassertion/userid.md): A user identifier for the assertion.
- [rawAuthenticatorData](asauthorizationpublickeycredentialassertion/rawauthenticatordata.md): A byte sequence that contains additional information about the credential.

## Relationships

### Inherits From

- [ASAuthorizationCredential](asauthorizationcredential.md)
- [ASPublicKeyCredential](aspublickeycredential.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

### Conforming Types

- [ASAuthorizationPlatformPublicKeyCredentialAssertion](asauthorizationplatformpublickeycredentialassertion.md)
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertion](asauthorizationsecuritykeypublickeycredentialassertion.md)

## See Also

### Account authentication

- [ASAuthorizationPlatformPublicKeyCredentialAssertion](asauthorizationplatformpublickeycredentialassertion.md): A class that represents the platform credential assertion type.
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertion](asauthorizationsecuritykeypublickeycredentialassertion.md): A class that represents the security key credential assertion type.
- [ASAuthorizationPublicKeyCredentialAssertionRequest](asauthorizationpublickeycredentialassertionrequest.md): An interface for requesting a public key-based credential assertion.
- [ASAuthorizationPlatformPublicKeyCredentialAssertionRequest](asauthorizationplatformpublickeycredentialassertionrequest.md): The concrete assertion request type for platform credentials.
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest](asauthorizationsecuritykeypublickeycredentialassertionrequest.md): A class that defines the assertion request type for security key credentials.

# ASAuthorizationPublicKeyCredentialAssertion (Objective-C)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

An interface for establishing a public key-based assertion.

## Declaration

```objectivec
@protocol ASAuthorizationPublicKeyCredentialAssertion <ASPublicKeyCredential>
```

<a id="overview"></a>

## Overview

Both [ASAuthorizationSecurityKeyPublicKeyCredentialAssertion](asauthorizationsecuritykeypublickeycredentialassertion.md) and [ASAuthorizationPlatformPublicKeyCredentialAssertion](asauthorizationplatformpublickeycredentialassertion.md) adhere to this interface.

## Topics

### Getting the properties

- [signature](asauthorizationpublickeycredentialassertion/signature.md): The signature for the assertion.
- [userID](asauthorizationpublickeycredentialassertion/userid.md): A user identifier for the assertion.
- [rawAuthenticatorData](asauthorizationpublickeycredentialassertion/rawauthenticatordata.md): A byte sequence that contains additional information about the credential.

## Relationships

### Inherits From

- [ASPublicKeyCredential](aspublickeycredential.md)

### Conforming Types

- [ASAuthorizationPlatformPublicKeyCredentialAssertion](asauthorizationplatformpublickeycredentialassertion.md)
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertion](asauthorizationsecuritykeypublickeycredentialassertion.md)

## See Also

### Account authentication

- [ASAuthorizationPlatformPublicKeyCredentialAssertion](asauthorizationplatformpublickeycredentialassertion.md): A class that represents the platform credential assertion type.
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertion](asauthorizationsecuritykeypublickeycredentialassertion.md): A class that represents the security key credential assertion type.
- [ASAuthorizationPublicKeyCredentialAssertionRequest](asauthorizationpublickeycredentialassertionrequest.md): An interface for requesting a public key-based credential assertion.
- [ASAuthorizationPlatformPublicKeyCredentialAssertionRequest](asauthorizationplatformpublickeycredentialassertionrequest.md): The concrete assertion request type for platform credentials.
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest](asauthorizationsecuritykeypublickeycredentialassertionrequest.md): A class that defines the assertion request type for security key credentials.
