> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationcredential](https://developer.apple.com/documentation/authenticationservices/asauthorizationcredential)

# ASAuthorizationCredential (Swift)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An interface that all credentials share.

## Declaration

```swift
protocol ASAuthorizationCredential : NSCopying, NSSecureCoding, NSObjectProtocol
```

## Relationships

### Inherits From

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

### Inherited By

- [ASAuthorizationPublicKeyCredentialAssertion](asauthorizationpublickeycredentialassertion.md)
- [ASAuthorizationPublicKeyCredentialRegistration](asauthorizationpublickeycredentialregistration.md)
- [ASPublicKeyCredential](aspublickeycredential.md)

### Conforming Types

- [ASAuthorizationAccountCreationPlatformPublicKeyCredential](asauthorizationaccountcreationplatformpublickeycredential.md)
- [ASAuthorizationAppleIDCredential](asauthorizationappleidcredential.md)
- [ASAuthorizationPlatformPublicKeyCredentialAssertion](asauthorizationplatformpublickeycredentialassertion.md)
- [ASAuthorizationPlatformPublicKeyCredentialRegistration](asauthorizationplatformpublickeycredentialregistration.md)
- [ASAuthorizationSecurityKeyPublicKeyCredentialAssertion](asauthorizationsecuritykeypublickeycredentialassertion.md)
- [ASAuthorizationSecurityKeyPublicKeyCredentialRegistration](asauthorizationsecuritykeypublickeycredentialregistration.md)
- [ASAuthorizationSingleSignOnCredential](asauthorizationsinglesignoncredential.md)
- [ASOneTimeCodeCredential](asonetimecodecredential.md)
- [ASPasskeyAssertionCredential](aspasskeyassertioncredential.md)
- [ASPasskeyRegistrationCredential](aspasskeyregistrationcredential.md)
- [ASPasswordCredential](aspasswordcredential.md)

## See Also

### Getting the Credential

- [credential](asauthorization/credential.md): Information provided about a user after successful authentication.

# ASAuthorizationCredential (Objective-C)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An interface that all credentials share.

## Declaration

```objectivec
@protocol ASAuthorizationCredential <NSObject, NSCopying, NSSecureCoding>
```

## Relationships

### Inherits From

- [NSCopying](../foundation/nscopying.md)
- [NSObject](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

### Inherited By

- [ASPublicKeyCredential](aspublickeycredential.md)

### Conforming Types

- [ASAuthorizationAppleIDCredential](asauthorizationappleidcredential.md)
- [ASAuthorizationSingleSignOnCredential](asauthorizationsinglesignoncredential.md)
- [ASOneTimeCodeCredential](asonetimecodecredential.md)
- [ASPasskeyAssertionCredential](aspasskeyassertioncredential.md)
- [ASPasskeyRegistrationCredential](aspasskeyregistrationcredential.md)
- [ASPasswordCredential](aspasswordcredential.md)

## See Also

### Getting the Credential

- [credential](asauthorization/credential.md): Information provided about a user after successful authentication.
