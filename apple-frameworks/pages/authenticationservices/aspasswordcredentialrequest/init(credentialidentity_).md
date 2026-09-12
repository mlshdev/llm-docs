> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasswordcredentialrequest/init(credentialidentity:)](https://developer.apple.com/documentation/authenticationservices/aspasswordcredentialrequest/init(credentialidentity:))

# init(credentialIdentity:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Initializes a password credential request object.

## Declaration

```swift
init(credentialIdentity: ASPasswordCredentialIdentity)
```

## Parameters

- `credentialIdentity`: The credential identity for the requested password.

# initWithCredentialIdentity: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Initializes a password credential request object.

## Declaration

```objectivec
- (instancetype) initWithCredentialIdentity:(ASPasswordCredentialIdentity *) credentialIdentity;
```

## Parameters

- `credentialIdentity`: The credential identity for the requested password.

## See Also

### Creating password credential requests

- [requestWithCredentialIdentity:](requestwithcredentialidentity_.md): Creates and initializes a password credential request object.
