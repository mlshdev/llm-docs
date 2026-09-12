> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasswordcredentialidentity/identitywithserviceidentifier:user:recordidentifier:](https://developer.apple.com/documentation/authenticationservices/aspasswordcredentialidentity/identitywithserviceidentifier:user:recordidentifier:)

# identityWithServiceIdentifier:user:recordIdentifier:

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates and returns a password credential identity object with a service identifier.

## Declaration

```objectivec
+ (instancetype) identityWithServiceIdentifier:(ASCredentialServiceIdentifier *) serviceIdentifier user:(NSString *) user recordIdentifier:(NSString *) recordIdentifier;
```

## Parameters

- `serviceIdentifier`: The service identifier for the identity.
- `user`: The user associated with the identity.
- `recordIdentifier`: A string that your app can set to correlate the identity with an entry in your password database.

## See Also

### Creating a credential identity

- [initWithServiceIdentifier:user:recordIdentifier:](init%28serviceidentifier_user_recordidentifier_%29.md): Initializes a password credential identity.
- [ASCredentialServiceIdentifier](../ascredentialserviceidentifier.md): An identifier representing a particular service for which the user needs a credential, like a web site.
