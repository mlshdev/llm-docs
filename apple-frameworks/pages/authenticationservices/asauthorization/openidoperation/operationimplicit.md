> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorization/openidoperation/operationimplicit](https://developer.apple.com/documentation/authenticationservices/asauthorization/openidoperation/operationimplicit)

# operationImplicit (Swift)

**Framework:** Authentication Services  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An operation that depends on the particular kind of credential provider.

## Declaration

```swift
static let operationImplicit: ASAuthorization.OpenIDOperation
```

## See Also

### Operation Types

- [operationLogin](operationlogin.md): An operation used to authenticate a user.
- [operationRefresh](operationrefresh.md): An operation that refreshes the logged-in user’s credentials.
- [operationLogout](operationlogout.md): An operation that ends an authenticated session.

# ASAuthorizationOperationImplicit (Objective-C)

**Framework:** Authentication Services  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An operation that depends on the particular kind of credential provider.

## Declaration

```objectivec
extern ASAuthorizationOpenIDOperation const ASAuthorizationOperationImplicit;
```

## See Also

### Operation Types

- [ASAuthorizationOperationLogin](operationlogin.md): An operation used to authenticate a user.
- [ASAuthorizationOperationRefresh](operationrefresh.md): An operation that refreshes the logged-in user’s credentials.
- [ASAuthorizationOperationLogout](operationlogout.md): An operation that ends an authenticated session.
