> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationsinglesignoncredential/identitytoken](https://developer.apple.com/documentation/authenticationservices/asauthorizationsinglesignoncredential/identitytoken)

# identityToken (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A JSON Web Token (JWT) that securely communicates information about the user to your app.

## Declaration

```swift
var identityToken: Data? { get }
```

## See Also

### Identifying a User

- [accessToken](accesstoken.md): An access token used to get an identity token.
- [state](state.md): An arbitrary string that your app provided to the request that generated this credential.
- [authorizedScopes](authorizedscopes.md): The contact information the user authorized your app to access.

# identityToken (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A JSON Web Token (JWT) that securely communicates information about the user to your app.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSData * identityToken;
```

## See Also

### Identifying a User

- [accessToken](accesstoken.md): An access token used to get an identity token.
- [state](state.md): An arbitrary string that your app provided to the request that generated this credential.
- [authorizedScopes](authorizedscopes.md): The contact information the user authorized your app to access.
