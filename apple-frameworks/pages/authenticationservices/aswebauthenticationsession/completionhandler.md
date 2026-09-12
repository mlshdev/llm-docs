> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsession/completionhandler](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession/completionhandler)

# ASWebAuthenticationSession.CompletionHandler (Swift)

**Framework:** Authentication Services  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A completion handler for the web authentication session.

## Declaration

```swift
typealias CompletionHandler = (URL?, (any Error)?) -> Void
```

## See Also

### Creating a session

- [init(url:callback:completionHandler:)](init%28url_callback_completionhandler_%29-6nut7.md): Creates a web authentication session instance that uses a callback to evaluate a redirection URL.
- [ASWebAuthenticationSession.Callback](callback.md): An object for evaluating navigation events in an authentication session.

# ASWebAuthenticationSessionCompletionHandler (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A completion handler for the web authentication session.

## Declaration

```objectivec
typedef void (^)(NSURL *, NSError *) ASWebAuthenticationSessionCompletionHandler;
```

## See Also

### Creating a session

- [initWithURL:callback:completionHandler:](init%28url_callback_completionhandler_%29-6nut7.md): Creates a web authentication session instance that uses a callback to evaluate a redirection URL.
- [ASWebAuthenticationSessionCallback](callback.md): An object for evaluating navigation events in an authentication session.
