> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorization/openidoperation/operationlogin](https://developer.apple.com/documentation/authenticationservices/asauthorization/openidoperation/operationlogin)

# operationLogin (Swift)

**Framework:** Authentication Services  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An operation used to authenticate a user.

## Declaration

```swift
static let operationLogin: ASAuthorization.OpenIDOperation
```

## See Also

### Operation Types

- [operationRefresh](operationrefresh.md): An operation that refreshes the logged-in user’s credentials.
- [operationLogout](operationlogout.md): An operation that ends an authenticated session.
- [operationImplicit](operationimplicit.md): An operation that depends on the particular kind of credential provider.

# ASAuthorizationOperationLogin (Objective-C)

**Framework:** Authentication Services  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An operation used to authenticate a user.

## Declaration

```objectivec
extern ASAuthorizationOpenIDOperation const ASAuthorizationOperationLogin;
```

## See Also

### Operation Types

- [ASAuthorizationOperationRefresh](operationrefresh.md): An operation that refreshes the logged-in user’s credentials.
- [ASAuthorizationOperationLogout](operationlogout.md): An operation that ends an authenticated session.
- [ASAuthorizationOperationImplicit](operationimplicit.md): An operation that depends on the particular kind of credential provider.
