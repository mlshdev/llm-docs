> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookiestorage/removecookies(since:)](https://developer.apple.com/documentation/foundation/httpcookiestorage/removecookies(since:))

# removeCookies(since:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes cookies that were stored after a given date.

## Declaration

```swift
func removeCookies(since date: Date)
```

## Parameters

- `date`: The date after which cookies should be removed.

## See Also

### Adding and removing cookies

- [deleteCookie(\_:)](deletecookie%28__%29.md): Deletes the specified cookie from the cookie storage.
- [setCookie(\_:)](setcookie%28__%29.md): Stores a specified cookie in the cookie storage if the cookie accept policy permits.
- [setCookies(\_:for:mainDocumentURL:)](setcookies%28__for_maindocumenturl_%29.md): Adds an array of cookies to the cookie storage if the storage’s cookie acceptance policy permits.
- [storeCookies(\_:for:)](storecookies%28__for_%29.md): Stores an array of cookies in the cookie storage, on behalf of the provided task, if the cookie accept policy permits.

# removeCookiesSinceDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes cookies that were stored after a given date.

## Declaration

```objectivec
- (void) removeCookiesSinceDate:(NSDate *) date;
```

## Parameters

- `date`: The date after which cookies should be removed.

## See Also

### Adding and removing cookies

- [deleteCookie:](deletecookie%28__%29.md): Deletes the specified cookie from the cookie storage.
- [setCookie:](setcookie%28__%29.md): Stores a specified cookie in the cookie storage if the cookie accept policy permits.
- [setCookies:forURL:mainDocumentURL:](setcookies%28__for_maindocumenturl_%29.md): Adds an array of cookies to the cookie storage if the storage’s cookie acceptance policy permits.
- [storeCookies:forTask:](storecookies%28__for_%29.md): Stores an array of cookies in the cookie storage, on behalf of the provided task, if the cookie accept policy permits.
