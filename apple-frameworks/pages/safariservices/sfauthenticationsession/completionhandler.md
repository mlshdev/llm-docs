> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfauthenticationsession/completionhandler](https://developer.apple.com/documentation/safariservices/sfauthenticationsession/completionhandler)

# SFAuthenticationSession.CompletionHandler (Swift)

**Framework:** Safari Services  
**Kind:** Type Alias  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.0+

The completion handler for an authentication session when the user cancels or finishes the login.

## Declaration

```swift
typealias CompletionHandler = (URL?, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

The custom callback URL should only be a custom URL scheme, and not a standard scheme (e.g. http or https). The session looks at the scheme registered first and routes to the app asking to start a session before potentially routing the scheme to another app.

## See Also

### Safari content in your app

- [Importing data exported from Safari](../importing-data-exported-from-safari.md): Transfer bookmarks, saved passwords, and other information between browsers.
- [SFSafariViewController](../sfsafariviewcontroller.md): An object that provides a visible standard interface for browsing the web.
- [SFSafariSettings](../sfsafarisettings.md): A class that provides your app access to several of Safari’s settings options.

# SFAuthenticationCompletionHandler (Objective-C)

**Framework:** Safari Services  
**Kind:** Type Alias  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.0+

The completion handler for an authentication session when the user cancels or finishes the login.

## Declaration

```objectivec
typedef void (^)(NSURL *, NSError *) SFAuthenticationCompletionHandler;
```

<a id="Discussion"></a>

## Discussion

The custom callback URL should only be a custom URL scheme, and not a standard scheme (e.g. http or https). The session looks at the scheme registered first and routes to the app asking to start a session before potentially routing the scheme to another app.

## See Also

### Safari content in your app

- [Importing data exported from Safari](../importing-data-exported-from-safari.md): Transfer bookmarks, saved passwords, and other information between browsers.
- [SFSafariViewController](../sfsafariviewcontroller.md): An object that provides a visible standard interface for browsing the web.
- [SFSafariSettings](../sfsafarisettings.md): A class that provides your app access to several of Safari’s settings options.
