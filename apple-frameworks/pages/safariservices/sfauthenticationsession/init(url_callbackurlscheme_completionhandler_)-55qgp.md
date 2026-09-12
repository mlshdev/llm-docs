> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfauthenticationsession/init(url:callbackurlscheme:completionhandler:)-55qgp](https://developer.apple.com/documentation/safariservices/sfauthenticationsession/init(url:callbackurlscheme:completionhandler:)-55qgp)

# init(url:callbackURLScheme:completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 12.0) · iPadOS 11.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Initializes the SFAuthenticationSession in an application.

## Declaration

```swift
init(url URL: URL, callbackURLScheme: String?, completionHandler: @escaping SFAuthenticationSession.CompletionHandler)
```

# initWithURL:callbackURLScheme:completionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 12.0) · iPadOS 11.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Initializes the SFAuthenticationSession in an application.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL callbackURLScheme:(NSString *) callbackURLScheme completionHandler:(SFAuthenticationCompletionHandler) completionHandler;
```
