> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionrequest/shoulduseephemeralsession](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionrequest/shoulduseephemeralsession)

# shouldUseEphemeralSession (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean that indicates whether the browser should use a private browsing session.

## Declaration

```swift
var shouldUseEphemeralSession: Bool { get }
```

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](../supporting-single-sign-on-in-a-web-browser-app.md)

## See Also

### Interpreting a request

- [url](url.md): The web address the browser should use to perform the authentication request.
- [uuid](uuid.md): A unique identifier for the request.
- [additionalHeaderFields](additionalheaderfields.md): Additional headers to send when loading the initial URL.

# shouldUseEphemeralSession (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

A Boolean that indicates whether the browser should use a private browsing session.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL shouldUseEphemeralSession;
```

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](../supporting-single-sign-on-in-a-web-browser-app.md)

## See Also

### Interpreting a request

- [URL](url.md): The web address the browser should use to perform the authentication request.
- [UUID](uuid.md): A unique identifier for the request.
- [additionalHeaderFields](additionalheaderfields.md): Additional headers to send when loading the initial URL.
