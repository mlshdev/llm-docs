> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsession/init(url:callbackurlscheme:completionhandler:)-7fpox](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession/init(url:callbackurlscheme:completionhandler:)-7fpox)

# init(url:callbackURLScheme:completionHandler:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 12.0+ (deprecated in 27.0) · iPadOS 12.0+ (deprecated in 27.0) · Mac Catalyst 12.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.2+ (deprecated in 27.0)

Creates a web authentication session instance.

> Use [init(url:callback:completionHandler:)](init%28url_callback_completionhandler_%29-6nut7.md) to handle callbacks.

## Declaration

```swift
init(url URL: URL, callbackURLScheme: String?, completionHandler: @escaping ASWebAuthenticationSession.CompletionHandler)
```

## Parameters

- `URL`: A URL with the `http` or `https` scheme pointing to the authentication webpage.
- `callbackURLScheme`: The custom URL scheme that the app requires in the callback URL.
- `completionHandler`: A completion handler the session calls when it completes successfully, or when the user cancels the session.

# initWithURL:callbackURLScheme:completionHandler: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 27.0) · iPadOS 12.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.2+ (deprecated in 27.0)

Creates a web authentication session instance.

> Use [initWithURL:callback:completionHandler:](init%28url_callback_completionhandler_%29-6nut7.md) to handle callbacks.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL callbackURLScheme:(NSString *) callbackURLScheme completionHandler:(ASWebAuthenticationSessionCompletionHandler) completionHandler;
```

## Parameters

- `URL`: A URL with the `http` or `https` scheme pointing to the authentication webpage.
- `callbackURLScheme`: The custom URL scheme that the app requires in the callback URL.
- `completionHandler`: A completion handler the session calls when it completes successfully, or when the user cancels the session.
