> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasswordcredentialidentity/init(serviceidentifier:user:recordidentifier:)](https://developer.apple.com/documentation/authenticationservices/aspasswordcredentialidentity/init(serviceidentifier:user:recordidentifier:))

# init(serviceIdentifier:user:recordIdentifier:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Initializes a password credential identity.

## Declaration

```swift
init(serviceIdentifier: ASCredentialServiceIdentifier, user: String, recordIdentifier: String?)
```

## Parameters

- `serviceIdentifier`: The service identifier for the identity.
- `user`: The user associated with the identity.
- `recordIdentifier`: A string that your app can set to correlate the identity with an entry in your password database.

## See Also

### Creating a credential identity

- [ASCredentialServiceIdentifier](../ascredentialserviceidentifier.md): An identifier representing a particular service for which the user needs a credential, like a web site.

# initWithServiceIdentifier:user:recordIdentifier: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Initializes a password credential identity.

## Declaration

```objectivec
- (instancetype) initWithServiceIdentifier:(ASCredentialServiceIdentifier *) serviceIdentifier user:(NSString *) user recordIdentifier:(NSString *) recordIdentifier;
```

## Parameters

- `serviceIdentifier`: The service identifier for the identity.
- `user`: The user associated with the identity.
- `recordIdentifier`: A string that your app can set to correlate the identity with an entry in your password database.

## See Also

### Creating a credential identity

- [identityWithServiceIdentifier:user:recordIdentifier:](identitywithserviceidentifier_user_recordidentifier_.md): Creates and returns a password credential identity object with a service identifier.
- [ASCredentialServiceIdentifier](../ascredentialserviceidentifier.md): An identifier representing a particular service for which the user needs a credential, like a web site.
