> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorization/openidoperation](https://developer.apple.com/documentation/authenticationservices/asauthorization/openidoperation)

# ASAuthorization.OpenIDOperation (Swift)

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The kinds of operations that you can perform with OpenID authentication.

## Declaration

```swift
struct OpenIDOperation
```

<a id="Discussion"></a>

## Discussion

Use one of these values as the [requestedOperation](../asauthorizationopenidrequest/requestedoperation.md) property in an OpenID request that you make with an instance of either [ASAuthorizationAppleIDRequest](../asauthorizationappleidrequest.md) or [ASAuthorizationSingleSignOnRequest](../asauthorizationsinglesignonrequest.md).

## Topics

### Operation Types

- [operationLogin](openidoperation/operationlogin.md): An operation used to authenticate a user.
- [operationRefresh](openidoperation/operationrefresh.md): An operation that refreshes the logged-in user’s credentials.
- [operationLogout](openidoperation/operationlogout.md): An operation that ends an authenticated session.
- [operationImplicit](openidoperation/operationimplicit.md): An operation that depends on the particular kind of credential provider.

### Creating an Operation

- [init(\_:)](openidoperation/init%28__%29.md): Creates an operation from the given string.
- [init(rawValue:)](openidoperation/init%28rawvalue_%29.md): Creates an operation from the given string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting the Operation

- [requestedOperation](../asauthorizationopenidrequest/requestedoperation.md): The OpenID authentication operation you want this request to perform.

# ASAuthorizationOpenIDOperation (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The kinds of operations that you can perform with OpenID authentication.

## Declaration

```objectivec
typedef NSString * ASAuthorizationOpenIDOperation;
```

<a id="Discussion"></a>

## Discussion

Use one of these values as the [requestedOperation](../asauthorizationopenidrequest/requestedoperation.md) property in an OpenID request that you make with an instance of either [ASAuthorizationAppleIDRequest](../asauthorizationappleidrequest.md) or [ASAuthorizationSingleSignOnRequest](../asauthorizationsinglesignonrequest.md).

## Topics

### Operation Types

- [ASAuthorizationOperationLogin](openidoperation/operationlogin.md): An operation used to authenticate a user.
- [ASAuthorizationOperationRefresh](openidoperation/operationrefresh.md): An operation that refreshes the logged-in user’s credentials.
- [ASAuthorizationOperationLogout](openidoperation/operationlogout.md): An operation that ends an authenticated session.
- [ASAuthorizationOperationImplicit](openidoperation/operationimplicit.md): An operation that depends on the particular kind of credential provider.

## See Also

### Setting the Operation

- [requestedOperation](../asauthorizationopenidrequest/requestedoperation.md): The OpenID authentication operation you want this request to perform.
