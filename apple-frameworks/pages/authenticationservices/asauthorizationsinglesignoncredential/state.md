> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationsinglesignoncredential/state](https://developer.apple.com/documentation/authenticationservices/asauthorizationsinglesignoncredential/state)

# state (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An arbitrary string that your app provided to the request that generated this credential.

## Declaration

```swift
var state: String? { get }
```

## See Also

### Identifying a User

- [identityToken](identitytoken.md): A JSON Web Token (JWT) that securely communicates information about the user to your app.
- [accessToken](accesstoken.md): An access token used to get an identity token.
- [authorizedScopes](authorizedscopes.md): The contact information the user authorized your app to access.

# state (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An arbitrary string that your app provided to the request that generated this credential.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * state;
```

## See Also

### Identifying a User

- [identityToken](identitytoken.md): A JSON Web Token (JWT) that securely communicates information about the user to your app.
- [accessToken](accesstoken.md): An access token used to get an identity token.
- [authorizedScopes](authorizedscopes.md): The contact information the user authorized your app to access.
