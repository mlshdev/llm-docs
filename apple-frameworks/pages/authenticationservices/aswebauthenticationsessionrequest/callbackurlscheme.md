> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionrequest/callbackurlscheme](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionrequest/callbackurlscheme)

# callbackURLScheme (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 10.15+ (deprecated in 14.4)

The scheme for the browser to use when returning the result of the authentication attempt to the app requesting it.

> Use [callback](callback.md) to match all callback types.

## Declaration

```swift
var callbackURLScheme: String? { get }
```

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](../supporting-single-sign-on-in-a-web-browser-app.md)

# callbackURLScheme (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ (deprecated in 17.4) · macOS 10.15+ (deprecated in 14.4)

The scheme for the browser to use when returning the result of the authentication attempt to the app requesting it.

> Use [callback](callback.md) to match all callback types.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * callbackURLScheme;
```

## Mentioned In

- [Supporting Single Sign-On in a Web Browser App](../supporting-single-sign-on-in-a-web-browser-app.md)
