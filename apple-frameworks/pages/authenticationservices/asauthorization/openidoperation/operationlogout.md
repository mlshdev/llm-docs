> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorization/openidoperation/operationlogout](https://developer.apple.com/documentation/authenticationservices/asauthorization/openidoperation/operationlogout)

# operationLogout (Swift)

**Framework:** Authentication Services  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An operation that ends an authenticated session.

## Declaration

```swift
static let operationLogout: ASAuthorization.OpenIDOperation
```

## See Also

### Operation Types

- [operationLogin](operationlogin.md): An operation used to authenticate a user.
- [operationRefresh](operationrefresh.md): An operation that refreshes the logged-in user’s credentials.
- [operationImplicit](operationimplicit.md): An operation that depends on the particular kind of credential provider.

# ASAuthorizationOperationLogout (Objective-C)

**Framework:** Authentication Services  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An operation that ends an authenticated session.

## Declaration

```objectivec
extern ASAuthorizationOpenIDOperation const ASAuthorizationOperationLogout;
```

## See Also

### Operation Types

- [ASAuthorizationOperationLogin](operationlogin.md): An operation used to authenticate a user.
- [ASAuthorizationOperationRefresh](operationrefresh.md): An operation that refreshes the logged-in user’s credentials.
- [ASAuthorizationOperationImplicit](operationimplicit.md): An operation that depends on the particular kind of credential provider.
