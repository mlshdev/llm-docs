> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookiestorage/setcookies(_:for:maindocumenturl:)](https://developer.apple.com/documentation/foundation/httpcookiestorage/setcookies(_:for:maindocumenturl:))

# setCookies(\_:for:mainDocumentURL:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds an array of cookies to the cookie storage if the storage’s cookie acceptance policy permits.

## Declaration

```swift
func setCookies(_ cookies: [HTTPCookie], for URL: URL?, mainDocumentURL: URL?)
```

## Parameters

- `cookies`: The cookies to add.
- `URL`: The URL associated with the added cookies.
- `mainDocumentURL`: The URL of the main HTML document for the top-level frame, if known. The value can be `nil`. This URL is used to determine whether the cookie should be accepted if the cookie accept policy is [HTTPCookie.AcceptPolicy.onlyFromMainDocumentDomain](../httpcookie/acceptpolicy/onlyfrommaindocumentdomain.md).

<a id="Discussion"></a>

## Discussion

Cookies in the array will replace existing cookies with the same name, domain, and path in the cookie storage. If the storage has an accept policy of [HTTPCookie.AcceptPolicy.never](../httpcookie/acceptpolicy/never.md), the cookies are ignored.

To store cookies from a set of response headers, an application can use [cookies(withResponseHeaderFields:for:)](../httpcookie/cookies%28withresponseheaderfields_for_%29.md) passing a header field dictionary and then use this method to store the resulting cookies in accordance with the cookie storage’s cookie acceptance policy.

If you override this method, also override [storeCookies(\_:for:)](storecookies%28__for_%29.md).

## See Also

### Adding and removing cookies

- [removeCookies(since:)](removecookies%28since_%29.md): Removes cookies that were stored after a given date.
- [deleteCookie(\_:)](deletecookie%28__%29.md): Deletes the specified cookie from the cookie storage.
- [setCookie(\_:)](setcookie%28__%29.md): Stores a specified cookie in the cookie storage if the cookie accept policy permits.
- [storeCookies(\_:for:)](storecookies%28__for_%29.md): Stores an array of cookies in the cookie storage, on behalf of the provided task, if the cookie accept policy permits.

# setCookies:forURL:mainDocumentURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds an array of cookies to the cookie storage if the storage’s cookie acceptance policy permits.

## Declaration

```objectivec
- (void) setCookies:(NSArray<NSHTTPCookie *> *) cookies forURL:(NSURL *) URL mainDocumentURL:(NSURL *) mainDocumentURL;
```

## Parameters

- `cookies`: The cookies to add.
- `URL`: The URL associated with the added cookies.
- `mainDocumentURL`: The URL of the main HTML document for the top-level frame, if known. The value can be `nil`. This URL is used to determine whether the cookie should be accepted if the cookie accept policy is [NSHTTPCookieAcceptPolicyOnlyFromMainDocumentDomain](../httpcookie/acceptpolicy/onlyfrommaindocumentdomain.md).

<a id="Discussion"></a>

## Discussion

Cookies in the array will replace existing cookies with the same name, domain, and path in the cookie storage. If the storage has an accept policy of [NSHTTPCookieAcceptPolicyNever](../httpcookie/acceptpolicy/never.md), the cookies are ignored.

To store cookies from a set of response headers, an application can use [cookiesWithResponseHeaderFields:forURL:](../httpcookie/cookies%28withresponseheaderfields_for_%29.md) passing a header field dictionary and then use this method to store the resulting cookies in accordance with the cookie storage’s cookie acceptance policy.

If you override this method, also override [storeCookies:forTask:](storecookies%28__for_%29.md).

## See Also

### Adding and removing cookies

- [removeCookiesSinceDate:](removecookies%28since_%29.md): Removes cookies that were stored after a given date.
- [deleteCookie:](deletecookie%28__%29.md): Deletes the specified cookie from the cookie storage.
- [setCookie:](setcookie%28__%29.md): Stores a specified cookie in the cookie storage if the cookie accept policy permits.
- [storeCookies:forTask:](storecookies%28__for_%29.md): Stores an array of cookies in the cookie storage, on behalf of the provided task, if the cookie accept policy permits.
