> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/authorizationurl

# authorizationURL (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

## Declaration

```swift
var authorizationURL: URL { get set }
```

## Mentioned In

- [Implementing web-based authentication with Platform Single Sign-on](../implementing-web-based-authentication.md)
- [Interpreting Platform Single Sign-on authorization scopes](../interpreting-platform-single-sign-on-authorization-scopes.md)

<a id="discussion"></a>

## Discussion

The OpenID authorization request URL.  This can be overwritten when using dynamic federation.

# authorizationURL (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

## Declaration

```objectivec
@property (nonatomic, copy) NSURL * authorizationURL;
```

## Mentioned In

- [Implementing web-based authentication with Platform Single Sign-on](../implementing-web-based-authentication.md)
- [Interpreting Platform Single Sign-on authorization scopes](../interpreting-platform-single-sign-on-authorization-scopes.md)

<a id="discussion"></a>

## Discussion

The OpenID authorization request URL.  This can be overwritten when using dynamic federation.
