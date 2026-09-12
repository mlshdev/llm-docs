> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationsinglesignonprovider/createrequest()](https://developer.apple.com/documentation/authenticationservices/asauthorizationsinglesignonprovider/createrequest())

# createRequest() (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a single sign-on (SSO) authorization request.

## Declaration

```swift
func createRequest() -> ASAuthorizationSingleSignOnRequest
```

<a id="return-value"></a>

## Return Value

A single sign-on (SSO) authorization request.

## See Also

### Creating Authorization Requests

- [canPerformAuthorization](canperformauthorization.md): A Boolean value that indicates if the provider is capable of performing authorization within a given configuration.
- [ASAuthorizationSingleSignOnRequest](../asauthorizationsinglesignonrequest.md): An OpenID authorization request that provides single sign-on (SSO) functionality.
- [ASAuthorizationOpenIDRequest](../asauthorizationopenidrequest.md): An OpenID authorization request.

# createRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a single sign-on (SSO) authorization request.

## Declaration

```objectivec
- (ASAuthorizationSingleSignOnRequest *) createRequest;
```

<a id="return-value"></a>

## Return Value

A single sign-on (SSO) authorization request.

## See Also

### Creating Authorization Requests

- [canPerformAuthorization](canperformauthorization.md): A Boolean value that indicates if the provider is capable of performing authorization within a given configuration.
- [ASAuthorizationSingleSignOnRequest](../asauthorizationsinglesignonrequest.md): An OpenID authorization request that provides single sign-on (SSO) functionality.
- [ASAuthorizationOpenIDRequest](../asauthorizationopenidrequest.md): An OpenID authorization request.
