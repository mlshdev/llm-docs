> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkhttpcookiestore/getallcookies(_:)](https://developer.apple.com/documentation/webkit/wkhttpcookiestore/getallcookies(_:))

# getAllCookies(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Fetches all stored cookies asynchronously and delivers them to the specified completion handler.

## Declaration

```swift
func getAllCookies(_ completionHandler: @escaping @MainActor @Sendable ([HTTPCookie]) -> Void)
```

```swift
func allCookies() async -> [HTTPCookie]
```

## Parameters

- `completionHandler`: A completion handler block to execute asynchronously with the results. This block has no return value and takes the following parameter:

  - **cookieArray**: An array of [HTTPCookie](https://developer.apple.com/documentation/foundation/httpcookie) objects. If the store contains no cookies, this parameter contains an empty array.

<a id="Discussion"></a>

## Discussion

Use this method to get the set of cookies currently associated with your web view. Iterate over the contents of the provided array to retrieve the specific cookie you need for your code.

## See Also

### Managing cookies

- [setCookie(\_:completionHandler:)](setcookie%28__completionhandler_%29.md): Adds a cookie to the cookie store.
- [delete(\_:completionHandler:)](delete%28__completionhandler_%29.md): Deletes the specified cookie.

# getAllCookies: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Fetches all stored cookies asynchronously and delivers them to the specified completion handler.

## Declaration

```objectivec
- (void) getAllCookies:(void (^)(NSArray<NSHTTPCookie *> *)) completionHandler;
```

## Parameters

- `completionHandler`: A completion handler block to execute asynchronously with the results. This block has no return value and takes the following parameter:

  - **cookieArray**: An array of [NSHTTPCookie](https://developer.apple.com/documentation/foundation/httpcookie) objects. If the store contains no cookies, this parameter contains an empty array.

<a id="Discussion"></a>

## Discussion

Use this method to get the set of cookies currently associated with your web view. Iterate over the contents of the provided array to retrieve the specific cookie you need for your code.

## See Also

### Managing cookies

- [setCookie:completionHandler:](setcookie%28__completionhandler_%29.md): Adds a cookie to the cookie store.
- [deleteCookie:completionHandler:](delete%28__completionhandler_%29.md): Deletes the specified cookie.
