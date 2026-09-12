> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookiestorage/getcookiesfor(_:completionhandler:)](https://developer.apple.com/documentation/foundation/httpcookiestorage/getcookiesfor(_:completionhandler:))

# getCookiesFor(\_:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Fetches cookies relevant to the specified task and passes them to the completion handler.

## Declaration

```swift
func getCookiesFor(_ task: URLSessionTask, completionHandler: @escaping @Sendable ([HTTPCookie]?) -> Void)
```

```swift
func cookies(for task: URLSessionTask) async -> [HTTPCookie]?
```

## Parameters

- `task`: The task performing a request. The cookie storage can use the URL and other properties of this task’s request to determine which cookies to fetch.
- `completionHandler`: A completion handler that receives an array of cookies as its argument.

## See Also

### Retrieving cookies

- [cookies](cookies.md): The cookie storage’s cookies.
- [cookies(for:)](cookies%28for_%29.md): Returns all the cookie storage’s cookies that are sent to a specified URL.
- [sortedCookies(using:)](sortedcookies%28using_%29.md): Returns all of the cookie storage’s cookies, sorted according to a given set of sort descriptors.

# getCookiesForTask:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Fetches cookies relevant to the specified task and passes them to the completion handler.

## Declaration

```objectivec
- (void) getCookiesForTask:(NSURLSessionTask *) task completionHandler:(void (^)(NSArray<NSHTTPCookie *> *cookies)) completionHandler;
```

## Parameters

- `task`: The task performing a request. The cookie storage can use the URL and other properties of this task’s request to determine which cookies to fetch.
- `completionHandler`: A completion handler that receives an array of cookies as its argument.

## See Also

### Retrieving cookies

- [cookies](cookies.md): The cookie storage’s cookies.
- [cookiesForURL:](cookies%28for_%29.md): Returns all the cookie storage’s cookies that are sent to a specified URL.
- [sortedCookiesUsingDescriptors:](sortedcookies%28using_%29.md): Returns all of the cookie storage’s cookies, sorted according to a given set of sort descriptors.
