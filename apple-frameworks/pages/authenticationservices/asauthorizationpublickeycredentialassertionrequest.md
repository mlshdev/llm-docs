> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialassertionrequest](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialassertionrequest)

# ASAuthorizationPublicKeyCredentialAssertionRequest (Swift)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

An interface for requesting a public key-based credential assertion.

## Declaration

```swift
protocol ASAuthorizationPublicKeyCredentialAssertionRequest : NSCopying, NSSecureCoding, NSObjectProtocol
```

## Topics

### Getting the properties

- [challenge](asauthorizationpublickeycredentialassertionrequest/challenge.md): The challenge to sign.
- [relyingPartyIdentifier](asauthorizationpublickeycredentialassertionrequest/relyingpartyidentifier.md): The domain name of the website for the credential.
- [allowedCredentials](asauthorizationpublickeycredentialassertionrequest/allowedcredentials.md): A list of allowed credential descriptors the user attempts to sign in with.
- [userVerificationPreference](asauthorizationpublickeycredentialassertionrequest/userverificationpreference.md): A preference that indicates whether the authenticator attempts to verify the user at the time of sign-in.

## Relationships

### Inherits From

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

### Conforming Types

- [ASAuthorizationPlatformPublicKeyCredentialAssertionRequest](asauthorizationplatformpublickeycredentialassertionrequest.md)
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest](asauthorizationsecuritykeypublickeycredentialassertionrequest.md)

## See Also

### Account authentication

- [ASAuthorizationPublicKeyCredentialAssertion](asauthorizationpublickeycredentialassertion.md): An interface for establishing a public key-based assertion.
- [ASAuthorizationPlatformPublicKeyCredentialAssertion](asauthorizationplatformpublickeycredentialassertion.md): A class that represents the platform credential assertion type.
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertion](asauthorizationsecuritykeypublickeycredentialassertion.md): A class that represents the security key credential assertion type.
- [ASAuthorizationPlatformPublicKeyCredentialAssertionRequest](asauthorizationplatformpublickeycredentialassertionrequest.md): The concrete assertion request type for platform credentials.
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest](asauthorizationsecuritykeypublickeycredentialassertionrequest.md): A class that defines the assertion request type for security key credentials.

# ASAuthorizationPublicKeyCredentialAssertionRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

An interface for requesting a public key-based credential assertion.

## Declaration

```objectivec
@protocol ASAuthorizationPublicKeyCredentialAssertionRequest <NSObject, NSSecureCoding, NSCopying>
```

## Topics

### Getting the properties

- [challenge](asauthorizationpublickeycredentialassertionrequest/challenge.md): The challenge to sign.
- [relyingPartyIdentifier](asauthorizationpublickeycredentialassertionrequest/relyingpartyidentifier.md): The domain name of the website for the credential.
- [allowedCredentials](asauthorizationpublickeycredentialassertionrequest/allowedcredentials.md): A list of allowed credential descriptors the user attempts to sign in with.
- [userVerificationPreference](asauthorizationpublickeycredentialassertionrequest/userverificationpreference.md): A preference that indicates whether the authenticator attempts to verify the user at the time of sign-in.

## Relationships

### Inherits From

- [NSCopying](../foundation/nscopying.md)
- [NSObject](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

### Conforming Types

- [ASAuthorizationPlatformPublicKeyCredentialAssertionRequest](asauthorizationplatformpublickeycredentialassertionrequest.md)
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest](asauthorizationsecuritykeypublickeycredentialassertionrequest.md)

## See Also

### Account authentication

- [ASAuthorizationPublicKeyCredentialAssertion](asauthorizationpublickeycredentialassertion.md): An interface for establishing a public key-based assertion.
- [ASAuthorizationPlatformPublicKeyCredentialAssertion](asauthorizationplatformpublickeycredentialassertion.md): A class that represents the platform credential assertion type.
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertion](asauthorizationsecuritykeypublickeycredentialassertion.md): A class that represents the security key credential assertion type.
- [ASAuthorizationPlatformPublicKeyCredentialAssertionRequest](asauthorizationplatformpublickeycredentialassertionrequest.md): The concrete assertion request type for platform credentials.
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest](asauthorizationsecuritykeypublickeycredentialassertionrequest.md): A class that defines the assertion request type for security key credentials.
