> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkhttpcookiestore/setcookie(_:completionhandler:)](https://developer.apple.com/documentation/webkit/wkhttpcookiestore/setcookie(_:completionhandler:))

# setCookie(\_:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Adds a cookie to the cookie store.

## Declaration

```swift
func setCookie(_ cookie: HTTPCookie, completionHandler: (@MainActor @Sendable () -> Void)? = nil)
```

```swift
func setCookie(_ cookie: HTTPCookie) async
```

## Parameters

- `cookie`: The cookie to add.
- `completionHandler`: A completion handler block to execute asynchronously after the method successfully stores the cookie. This block has no return value and no parameters.

## See Also

### Managing cookies

- [getAllCookies(\_:)](getallcookies%28__%29.md): Fetches all stored cookies asynchronously and delivers them to the specified completion handler.
- [delete(\_:completionHandler:)](delete%28__completionhandler_%29.md): Deletes the specified cookie.

# setCookie:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Adds a cookie to the cookie store.

## Declaration

```objectivec
- (void) setCookie:(NSHTTPCookie *) cookie completionHandler:(void (^)(void)) completionHandler;
```

## Parameters

- `cookie`: The cookie to add.
- `completionHandler`: A completion handler block to execute asynchronously after the method successfully stores the cookie. This block has no return value and no parameters.

## See Also

### Managing cookies

- [getAllCookies:](getallcookies%28__%29.md): Fetches all stored cookies asynchronously and delivers them to the specified completion handler.
- [deleteCookie:completionHandler:](delete%28__completionhandler_%29.md): Deletes the specified cookie.
