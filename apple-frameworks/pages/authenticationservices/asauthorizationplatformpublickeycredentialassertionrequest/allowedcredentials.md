> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationplatformpublickeycredentialassertionrequest/allowedcredentials

# allowedCredentials (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The array of allowed credentials.

## Declaration

```swift
var allowedCredentials: [ASAuthorizationPlatformPublicKeyCredentialDescriptor] { get set }
```

## Mentioned In

- [Authenticating people by using passkeys in browser apps](../authenticating-people-by-using-passkeys-in-browser-apps.md)

## See Also

### Accessing request properties

- [largeBlob](largeblob-9kvvl.md): The request’s binary large object value.
- [prf](prf-47uoa.md)

# allowedCredentials (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The array of allowed credentials.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<ASAuthorizationPlatformPublicKeyCredentialDescriptor *> * allowedCredentials;
```

## Mentioned In

- [Authenticating people by using passkeys in browser apps](../authenticating-people-by-using-passkeys-in-browser-apps.md)

## See Also

### Accessing request properties

- [largeBlob](largeblob-5mg1q.md): The request’s binary large object value.
- [ASAuthorizationPublicKeyCredentialPRFAssertionInput](../asauthorizationpublickeycredentialprfassertioninput-c.class.md): A type that represents input for the web authentication PRF extension in passkey assertion requests.
