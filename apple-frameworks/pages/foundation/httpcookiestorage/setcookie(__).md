> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookiestorage/setcookie(_:)](https://developer.apple.com/documentation/foundation/httpcookiestorage/setcookie(_:))

# setCookie(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stores a specified cookie in the cookie storage if the cookie accept policy permits.

## Declaration

```swift
func setCookie(_ cookie: HTTPCookie)
```

## Parameters

- `cookie`: The cookie to store.

<a id="Discussion"></a>

## Discussion

The cookie replaces an existing cookie with the same name, domain, and path, if one exists in the cookie storage. This method accepts the cookie only if the storage’s cookie accept policy is [HTTPCookie.AcceptPolicy.always](../httpcookie/acceptpolicy/always.md) or [HTTPCookie.AcceptPolicy.onlyFromMainDocumentDomain](../httpcookie/acceptpolicy/onlyfrommaindocumentdomain.md). The cookie is ignored if the storage’s cookie accept policy is [HTTPCookie.AcceptPolicy.never](../httpcookie/acceptpolicy/never.md).

## See Also

### Adding and removing cookies

- [removeCookies(since:)](removecookies%28since_%29.md): Removes cookies that were stored after a given date.
- [deleteCookie(\_:)](deletecookie%28__%29.md): Deletes the specified cookie from the cookie storage.
- [setCookies(\_:for:mainDocumentURL:)](setcookies%28__for_maindocumenturl_%29.md): Adds an array of cookies to the cookie storage if the storage’s cookie acceptance policy permits.
- [storeCookies(\_:for:)](storecookies%28__for_%29.md): Stores an array of cookies in the cookie storage, on behalf of the provided task, if the cookie accept policy permits.

# setCookie: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stores a specified cookie in the cookie storage if the cookie accept policy permits.

## Declaration

```objectivec
- (void) setCookie:(NSHTTPCookie *) cookie;
```

## Parameters

- `cookie`: The cookie to store.

<a id="Discussion"></a>

## Discussion

The cookie replaces an existing cookie with the same name, domain, and path, if one exists in the cookie storage. This method accepts the cookie only if the storage’s cookie accept policy is [NSHTTPCookieAcceptPolicyAlways](../httpcookie/acceptpolicy/always.md) or [NSHTTPCookieAcceptPolicyOnlyFromMainDocumentDomain](../httpcookie/acceptpolicy/onlyfrommaindocumentdomain.md). The cookie is ignored if the storage’s cookie accept policy is [NSHTTPCookieAcceptPolicyNever](../httpcookie/acceptpolicy/never.md).

## See Also

### Adding and removing cookies

- [removeCookiesSinceDate:](removecookies%28since_%29.md): Removes cookies that were stored after a given date.
- [deleteCookie:](deletecookie%28__%29.md): Deletes the specified cookie from the cookie storage.
- [setCookies:forURL:mainDocumentURL:](setcookies%28__for_maindocumenturl_%29.md): Adds an array of cookies to the cookie storage if the storage’s cookie acceptance policy permits.
- [storeCookies:forTask:](storecookies%28__for_%29.md): Stores an array of cookies in the cookie storage, on behalf of the provided task, if the cookie accept policy permits.
