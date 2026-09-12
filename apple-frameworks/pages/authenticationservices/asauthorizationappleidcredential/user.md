> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationappleidcredential/user](https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidcredential/user)

# user (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An identifier for the authenticated user.

## Declaration

```swift
var user: String { get }
```

## See Also

### Identifying a User

- [identityToken](identitytoken.md): A JSON Web Token (JWT) that securely communicates information about the user to the app.
- [authorizationCode](authorizationcode.md): A token that the app uses to interact with the server.
- [state](state.md): An arbitrary string that your app provides to the request that generates the credential.

# user (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An identifier for the authenticated user.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * user;
```

## See Also

### Identifying a User

- [identityToken](identitytoken.md): A JSON Web Token (JWT) that securely communicates information about the user to the app.
- [authorizationCode](authorizationcode.md): A token that the app uses to interact with the server.
- [state](state.md): An arbitrary string that your app provides to the request that generates the credential.
