> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkhttpcookiestore/delete(_:completionhandler:)](https://developer.apple.com/documentation/webkit/wkhttpcookiestore/delete(_:completionhandler:))

# delete(\_:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Deletes the specified cookie.

## Declaration

```swift
func delete(_ cookie: HTTPCookie, completionHandler: (@MainActor @Sendable () -> Void)? = nil)
```

```swift
func deleteCookie(_ cookie: HTTPCookie) async
```

## Parameters

- `cookie`: The cookie to delete.
- `completionHandler`: A completion handler block to execute asynchronously after the method successfully deletes the cookie. This block has no return value and no parameters.

## See Also

### Managing cookies

- [getAllCookies(\_:)](getallcookies%28__%29.md): Fetches all stored cookies asynchronously and delivers them to the specified completion handler.
- [setCookie(\_:completionHandler:)](setcookie%28__completionhandler_%29.md): Adds a cookie to the cookie store.

# deleteCookie:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Deletes the specified cookie.

## Declaration

```objectivec
- (void) deleteCookie:(NSHTTPCookie *) cookie completionHandler:(void (^)(void)) completionHandler;
```

## Parameters

- `cookie`: The cookie to delete.
- `completionHandler`: A completion handler block to execute asynchronously after the method successfully deletes the cookie. This block has no return value and no parameters.

## See Also

### Managing cookies

- [getAllCookies:](getallcookies%28__%29.md): Fetches all stored cookies asynchronously and delivers them to the specified completion handler.
- [setCookie:completionHandler:](setcookie%28__completionhandler_%29.md): Adds a cookie to the cookie store.
