> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorization/scope](https://developer.apple.com/documentation/authenticationservices/asauthorization/scope)

# ASAuthorization.Scope (Swift)

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The kinds of contact information that can be requested from the user.

## Declaration

```swift
struct Scope
```

<a id="Discussion"></a>

## Discussion

Use one or more of these values in the [requestedScopes](../asauthorizationopenidrequest/requestedscopes.md) array that you configure in an instance of either [ASAuthorizationAppleIDRequest](../asauthorizationappleidrequest.md) or [ASAuthorizationSingleSignOnRequest](../asauthorizationsinglesignonrequest.md) to request certain contact information from the user.

Inspect the [authorizedScopes](../asauthorizationappleidcredential/authorizedscopes.md) array of an [ASAuthorizationAppleIDCredential](../asauthorizationappleidcredential.md) instance, or the (similarly named) [authorizedScopes](../asauthorizationsinglesignoncredential/authorizedscopes.md) array of an [ASAuthorizationSingleSignOnCredential](../asauthorizationsinglesignoncredential.md) instance, to see what scopes the user actually authorized. This might differ from the scopes you requested.

## Topics

### Scopes

- [email](scope/email.md): A scope that includes the user’s email address.
- [fullName](scope/fullname.md): A scope that includes the user’s full name.

### Creating a Scope

- [init(\_:)](scope/init%28__%29.md): Creates a scope from the given string.
- [init(rawValue:)](scope/init%28rawvalue_%29.md): Creates a scope from the given string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting the Scope

- [requestedScopes](../asauthorizationopenidrequest/requestedscopes.md): The contact information to be requested from the user during authentication.

# ASAuthorizationScope (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The kinds of contact information that can be requested from the user.

## Declaration

```objectivec
typedef NSString * ASAuthorizationScope;
```

<a id="Discussion"></a>

## Discussion

Use one or more of these values in the [requestedScopes](../asauthorizationopenidrequest/requestedscopes.md) array that you configure in an instance of either [ASAuthorizationAppleIDRequest](../asauthorizationappleidrequest.md) or [ASAuthorizationSingleSignOnRequest](../asauthorizationsinglesignonrequest.md) to request certain contact information from the user.

Inspect the [authorizedScopes](../asauthorizationappleidcredential/authorizedscopes.md) array of an [ASAuthorizationAppleIDCredential](../asauthorizationappleidcredential.md) instance, or the (similarly named) [authorizedScopes](../asauthorizationsinglesignoncredential/authorizedscopes.md) array of an [ASAuthorizationSingleSignOnCredential](../asauthorizationsinglesignoncredential.md) instance, to see what scopes the user actually authorized. This might differ from the scopes you requested.

## Topics

### Scopes

- [ASAuthorizationScopeEmail](scope/email.md): A scope that includes the user’s email address.
- [ASAuthorizationScopeFullName](scope/fullname.md): A scope that includes the user’s full name.

## See Also

### Setting the Scope

- [requestedScopes](../asauthorizationopenidrequest/requestedscopes.md): The contact information to be requested from the user during authentication.
