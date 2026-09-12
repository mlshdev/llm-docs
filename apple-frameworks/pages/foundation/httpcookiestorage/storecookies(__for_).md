> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookiestorage/storecookies(_:for:)](https://developer.apple.com/documentation/foundation/httpcookiestorage/storecookies(_:for:))

# storeCookies(\_:for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stores an array of cookies in the cookie storage, on behalf of the provided task, if the cookie accept policy permits.

## Declaration

```swift
func storeCookies(_ cookies: [HTTPCookie], for task: URLSessionTask)
```

## Parameters

- `cookies`: The cookies to add.
- `task`: The task that handles the response. Override this method and inspect this parameter if you need to alter your cookie storage strategy based on properties of the task.

## See Also

### Adding and removing cookies

- [removeCookies(since:)](removecookies%28since_%29.md): Removes cookies that were stored after a given date.
- [deleteCookie(\_:)](deletecookie%28__%29.md): Deletes the specified cookie from the cookie storage.
- [setCookie(\_:)](setcookie%28__%29.md): Stores a specified cookie in the cookie storage if the cookie accept policy permits.
- [setCookies(\_:for:mainDocumentURL:)](setcookies%28__for_maindocumenturl_%29.md): Adds an array of cookies to the cookie storage if the storage’s cookie acceptance policy permits.

# storeCookies:forTask: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stores an array of cookies in the cookie storage, on behalf of the provided task, if the cookie accept policy permits.

## Declaration

```objectivec
- (void) storeCookies:(NSArray<NSHTTPCookie *> *) cookies forTask:(NSURLSessionTask *) task;
```

## Parameters

- `cookies`: The cookies to add.
- `task`: The task that handles the response. Override this method and inspect this parameter if you need to alter your cookie storage strategy based on properties of the task.

## See Also

### Adding and removing cookies

- [removeCookiesSinceDate:](removecookies%28since_%29.md): Removes cookies that were stored after a given date.
- [deleteCookie:](deletecookie%28__%29.md): Deletes the specified cookie from the cookie storage.
- [setCookie:](setcookie%28__%29.md): Stores a specified cookie in the cookie storage if the cookie accept policy permits.
- [setCookies:forURL:mainDocumentURL:](setcookies%28__for_maindocumenturl_%29.md): Adds an array of cookies to the cookie storage if the storage’s cookie acceptance policy permits.
