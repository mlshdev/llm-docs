> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationsinglesignonprovider/canperformauthorization](https://developer.apple.com/documentation/authenticationservices/asauthorizationsinglesignonprovider/canperformauthorization)

# canPerformAuthorization (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates if the provider is capable of performing authorization within a given configuration.

## Declaration

```swift
var canPerformAuthorization: Bool { get }
```

## See Also

### Creating Authorization Requests

- [createRequest()](createrequest%28%29.md): Creates a single sign-on (SSO) authorization request.
- [ASAuthorizationSingleSignOnRequest](../asauthorizationsinglesignonrequest.md): An OpenID authorization request that provides single sign-on (SSO) functionality.
- [ASAuthorizationOpenIDRequest](../asauthorizationopenidrequest.md): An OpenID authorization request.

# canPerformAuthorization (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates if the provider is capable of performing authorization within a given configuration.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL canPerformAuthorization;
```

## See Also

### Creating Authorization Requests

- [createRequest](createrequest%28%29.md): Creates a single sign-on (SSO) authorization request.
- [ASAuthorizationSingleSignOnRequest](../asauthorizationsinglesignonrequest.md): An OpenID authorization request that provides single sign-on (SSO) functionality.
- [ASAuthorizationOpenIDRequest](../asauthorizationopenidrequest.md): An OpenID authorization request.
