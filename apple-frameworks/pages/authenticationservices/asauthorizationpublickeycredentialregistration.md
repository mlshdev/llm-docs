> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialregistration](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialregistration)

# ASAuthorizationPublicKeyCredentialRegistration (Swift)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

An interface that credential registration requests adhere to.

## Declaration

```swift
protocol ASAuthorizationPublicKeyCredentialRegistration : ASPublicKeyCredential
```

## Topics

### Getting attestation information

- [rawAttestationObject](asauthorizationpublickeycredentialregistration/rawattestationobject.md): A data object that contains the returned attestation.

## Relationships

### Inherits From

- [ASAuthorizationCredential](asauthorizationcredential.md)
- [ASPublicKeyCredential](aspublickeycredential.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

### Conforming Types

- [ASAuthorizationPlatformPublicKeyCredentialRegistration](asauthorizationplatformpublickeycredentialregistration.md)
- [ASAuthorizationSecurityKeyPublicKeyCredentialRegistration](asauthorizationsecuritykeypublickeycredentialregistration.md)

## See Also

### Account registration

- [ASAuthorizationPlatformPublicKeyCredentialRegistration](asauthorizationplatformpublickeycredentialregistration.md): A newly created platform credential that results from a credential registration request.
- [ASAuthorizationSecurityKeyPublicKeyCredentialRegistration](asauthorizationsecuritykeypublickeycredentialregistration.md): A newly created security key credential that results from a credential registration request.
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest](asauthorizationplatformpublickeycredentialregistrationrequest.md): The object for registering a new platform public key credential.
- [ASAuthorizationSecurityKeyPublicKeyCredentialRegistrationRequest](asauthorizationsecuritykeypublickeycredentialregistrationrequest.md): The object for registering a new security key credential.

# ASAuthorizationPublicKeyCredentialRegistration (Objective-C)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

An interface that credential registration requests adhere to.

## Declaration

```objectivec
@protocol ASAuthorizationPublicKeyCredentialRegistration <ASPublicKeyCredential>
```

## Topics

### Getting attestation information

- [rawAttestationObject](asauthorizationpublickeycredentialregistration/rawattestationobject.md): A data object that contains the returned attestation.

## Relationships

### Inherits From

- [ASPublicKeyCredential](aspublickeycredential.md)

### Conforming Types

- [ASAuthorizationPlatformPublicKeyCredentialRegistration](asauthorizationplatformpublickeycredentialregistration.md)
- [ASAuthorizationSecurityKeyPublicKeyCredentialRegistration](asauthorizationsecuritykeypublickeycredentialregistration.md)

## See Also

### Account registration

- [ASAuthorizationPlatformPublicKeyCredentialRegistration](asauthorizationplatformpublickeycredentialregistration.md): A newly created platform credential that results from a credential registration request.
- [ASAuthorizationSecurityKeyPublicKeyCredentialRegistration](asauthorizationsecuritykeypublickeycredentialregistration.md): A newly created security key credential that results from a credential registration request.
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest](asauthorizationplatformpublickeycredentialregistrationrequest.md): The object for registering a new platform public key credential.
- [ASAuthorizationSecurityKeyPublicKeyCredentialRegistrationRequest](asauthorizationsecuritykeypublickeycredentialregistrationrequest.md): The object for registering a new security key credential.
