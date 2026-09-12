> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialidentitystore/getcredentialidentitiesforservice:credentialidentitytypes:completionhandler:](https://developer.apple.com/documentation/authenticationservices/ascredentialidentitystore/getcredentialidentitiesforservice:credentialidentitytypes:completionhandler:)

# getCredentialIdentitiesForService:credentialIdentityTypes:completionHandler:

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · visionOS 1.1+

Retrieves an array of all previously saved credential identities in the store for your extension.

## Declaration

```objectivec
- (void) getCredentialIdentitiesForService:(ASCredentialServiceIdentifier *) serviceIdentifier credentialIdentityTypes:(ASCredentialIdentityTypes) credentialIdentityTypes completionHandler:(void (^)(NSArray<id<ASCredentialIdentity>> *)) completionHandler;
```

## Parameters

- `serviceIdentifier`: An [ASCredentialServiceIdentifier](../ascredentialserviceidentifier.md) that limits results to only that service. Pass `nil` to get credential identities for all services. Defaults to `nil`.
- `credentialIdentityTypes`: An array of [ASCredentialIdentityTypes](identitytypes.md) that limits results to only those types. Pass `0` or `ASCredentialIdentityTypesAll` to get credential identities for all types.
- `completionHandler`: A block that receives as its one parameter an array of previously saved credential identities that match the identifier and identity type criteria.

## See Also

### Fetching saved credential identities

- [ASCredentialServiceIdentifier](../ascredentialserviceidentifier.md): An identifier representing a particular service for which the user needs a credential, like a web site.
- [ASCredentialIdentityTypes](identitytypes.md): The defined identity types for use in retrieving credentials.
