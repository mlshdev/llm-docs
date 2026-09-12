> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsession/init(url:callback:completionhandler:)-6nut7](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession/init(url:callback:completionhandler:)-6nut7)

# init(url:callback:completionHandler:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Creates a web authentication session instance that uses a callback to evaluate a redirection URL.

## Declaration

```swift
init(url URL: URL, callback: ASWebAuthenticationSession.Callback, completionHandler: @escaping ASWebAuthenticationSession.CompletionHandler)
```

## Parameters

- `URL`: The initial URL pointing to the authentication webpage. This initializer only supports URLs with `http://` or `https://` schemes.
- `callback`: An object that describes when the session calls its completion handler.
- `completionHandler`: A completion handler that the system calls when the session completes successfully, or when the person using the app cancels the request.

<a id="discussion"></a>

## Discussion

The following example creates a session that requires a callback with a custom URL scheme, using the [customScheme(\_:)](callback/customscheme%28__%29.md) type method to create the `callback` parameter:

```swift
let session = ASWebAuthenticationSession(
    url: URL(string: "https://example.com/oauth/login/authorize")!,
    callback: .customScheme("myappscheme")
) { callbackURL, error in
    // Handle the session result.
}
```

## See Also

### Creating a session

- [ASWebAuthenticationSession.Callback](callback.md): An object for evaluating navigation events in an authentication session.
- [ASWebAuthenticationSession.CompletionHandler](completionhandler.md): A completion handler for the web authentication session.

# initWithURL:callback:completionHandler: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Creates a web authentication session instance that uses a callback to evaluate a redirection URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL callback:(ASWebAuthenticationSessionCallback *) callback completionHandler:(ASWebAuthenticationSessionCompletionHandler) completionHandler;
```

## Parameters

- `URL`: The initial URL pointing to the authentication webpage. This initializer only supports URLs with `http://` or `https://` schemes.
- `callback`: An object that describes when the session calls its completion handler.
- `completionHandler`: A completion handler that the system calls when the session completes successfully, or when the person using the app cancels the request.

<a id="discussion"></a>

## Discussion

The following example creates a session that requires a callback with a custom URL scheme, using the [callbackWithCustomScheme:](callback/customscheme%28__%29.md) type method to create the `callback` parameter:

```swift
let session = ASWebAuthenticationSession(
    url: URL(string: "https://example.com/oauth/login/authorize")!,
    callback: .customScheme("myappscheme")
) { callbackURL, error in
    // Handle the session result.
}
```

## See Also

### Creating a session

- [ASWebAuthenticationSessionCallback](callback.md): An object for evaluating navigation events in an authentication session.
- [ASWebAuthenticationSessionCompletionHandler](completionhandler.md): A completion handler for the web authentication session.
