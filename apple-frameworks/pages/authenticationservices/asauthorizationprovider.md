> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationprovider](https://developer.apple.com/documentation/authenticationservices/asauthorizationprovider)

# ASAuthorizationProvider (Swift)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An interface that authorization providers must implement.

## Declaration

```swift
protocol ASAuthorizationProvider : NSObjectProtocol
```

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [ASAuthorizationAccountCreationProvider](asauthorizationaccountcreationprovider.md)
- [ASAuthorizationAppleIDProvider](asauthorizationappleidprovider.md)
- [ASAuthorizationPasswordProvider](asauthorizationpasswordprovider.md)
- [ASAuthorizationPlatformPublicKeyCredentialProvider](asauthorizationplatformpublickeycredentialprovider.md)
- [ASAuthorizationSecurityKeyPublicKeyCredentialProvider](asauthorizationsecuritykeypublickeycredentialprovider.md)
- [ASAuthorizationSingleSignOnProvider](asauthorizationsinglesignonprovider.md)

## See Also

### Inspecting the Provider

- [provider](asauthorizationrequest/provider.md): The provider servicing the request.

# ASAuthorizationProvider (Objective-C)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An interface that authorization providers must implement.

## Declaration

```objectivec
@protocol ASAuthorizationProvider <NSObject>
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [ASAuthorizationAppleIDProvider](asauthorizationappleidprovider.md)
- [ASAuthorizationPasswordProvider](asauthorizationpasswordprovider.md)
- [ASAuthorizationPlatformPublicKeyCredentialProvider](asauthorizationplatformpublickeycredentialprovider.md)
- [ASAuthorizationSecurityKeyPublicKeyCredentialProvider](asauthorizationsecuritykeypublickeycredentialprovider.md)
- [ASAuthorizationSingleSignOnProvider](asauthorizationsinglesignonprovider.md)

## See Also

### Inspecting the Provider

- [provider](asauthorizationrequest/provider.md): The provider servicing the request.
