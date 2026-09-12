> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationappleidcredential/identitytoken](https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidcredential/identitytoken)

# identityToken (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A JSON Web Token (JWT) that securely communicates information about the user to the app.

## Declaration

```swift
var identityToken: Data? { get }
```

<a id="Discussion"></a>

## Discussion

The system encodes the object as a string using [NSUTF8StringEncoding](../../foundation/nsutf8stringencoding.md).

## See Also

### Identifying a User

- [authorizationCode](authorizationcode.md): A token that the app uses to interact with the server.
- [state](state.md): An arbitrary string that your app provides to the request that generates the credential.
- [user](user.md): An identifier for the authenticated user.

# identityToken (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A JSON Web Token (JWT) that securely communicates information about the user to the app.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSData * identityToken;
```

<a id="Discussion"></a>

## Discussion

The system encodes the object as a string using [NSUTF8StringEncoding](../../foundation/nsutf8stringencoding.md).

## See Also

### Identifying a User

- [authorizationCode](authorizationcode.md): A token that the app uses to interact with the server.
- [state](state.md): An arbitrary string that your app provides to the request that generates the credential.
- [user](user.md): An identifier for the authenticated user.
