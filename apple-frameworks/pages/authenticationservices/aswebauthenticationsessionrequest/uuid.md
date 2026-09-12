> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionrequest/uuid](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionrequest/uuid)

# uuid (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A unique identifier for the request.

## Declaration

```swift
var uuid: UUID { get }
```

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](../supporting-single-sign-on-in-a-web-browser-app.md)

## See Also

### Interpreting a request

- [url](url.md): The web address the browser should use to perform the authentication request.
- [shouldUseEphemeralSession](shoulduseephemeralsession.md): A Boolean that indicates whether the browser should use a private browsing session.
- [additionalHeaderFields](additionalheaderfields.md): Additional headers to send when loading the initial URL.

# UUID (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

A unique identifier for the request.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUUID * UUID;
```

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](../supporting-single-sign-on-in-a-web-browser-app.md)

## See Also

### Interpreting a request

- [URL](url.md): The web address the browser should use to perform the authentication request.
- [shouldUseEphemeralSession](shoulduseephemeralsession.md): A Boolean that indicates whether the browser should use a private browsing session.
- [additionalHeaderFields](additionalheaderfields.md): Additional headers to send when loading the initial URL.
