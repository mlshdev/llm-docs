> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookiestorage/deletecookie(_:)](https://developer.apple.com/documentation/foundation/httpcookiestorage/deletecookie(_:))

# deleteCookie(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Deletes the specified cookie from the cookie storage.

## Declaration

```swift
func deleteCookie(_ cookie: HTTPCookie)
```

## Parameters

- `cookie`: The cookie to delete.

## See Also

### Adding and removing cookies

- [removeCookies(since:)](removecookies%28since_%29.md): Removes cookies that were stored after a given date.
- [setCookie(\_:)](setcookie%28__%29.md): Stores a specified cookie in the cookie storage if the cookie accept policy permits.
- [setCookies(\_:for:mainDocumentURL:)](setcookies%28__for_maindocumenturl_%29.md): Adds an array of cookies to the cookie storage if the storage’s cookie acceptance policy permits.
- [storeCookies(\_:for:)](storecookies%28__for_%29.md): Stores an array of cookies in the cookie storage, on behalf of the provided task, if the cookie accept policy permits.

# deleteCookie: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Deletes the specified cookie from the cookie storage.

## Declaration

```objectivec
- (void) deleteCookie:(NSHTTPCookie *) cookie;
```

## Parameters

- `cookie`: The cookie to delete.

## See Also

### Adding and removing cookies

- [removeCookiesSinceDate:](removecookies%28since_%29.md): Removes cookies that were stored after a given date.
- [setCookie:](setcookie%28__%29.md): Stores a specified cookie in the cookie storage if the cookie accept policy permits.
- [setCookies:forURL:mainDocumentURL:](setcookies%28__for_maindocumenturl_%29.md): Adds an array of cookies to the cookie storage if the storage’s cookie acceptance policy permits.
- [storeCookies:forTask:](storecookies%28__for_%29.md): Stores an array of cookies in the cookie storage, on behalf of the provided task, if the cookie accept policy permits.
