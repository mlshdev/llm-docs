> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionrequest/url](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionrequest/url)

# url (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The web address the browser should use to perform the authentication request.

## Declaration

```swift
var url: URL { get }
```

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](../supporting-single-sign-on-in-a-web-browser-app.md)

## See Also

### Interpreting a request

- [shouldUseEphemeralSession](shoulduseephemeralsession.md): A Boolean that indicates whether the browser should use a private browsing session.
- [uuid](uuid.md): A unique identifier for the request.
- [additionalHeaderFields](additionalheaderfields.md): Additional headers to send when loading the initial URL.

# URL (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

The web address the browser should use to perform the authentication request.

## Declaration

```objectivec
@property (nonatomic, readonly) NSURL * URL;
```

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](../supporting-single-sign-on-in-a-web-browser-app.md)

## See Also

### Interpreting a request

- [shouldUseEphemeralSession](shoulduseephemeralsession.md): A Boolean that indicates whether the browser should use a private browsing session.
- [UUID](uuid.md): A unique identifier for the request.
- [additionalHeaderFields](additionalheaderfields.md): Additional headers to send when loading the initial URL.
