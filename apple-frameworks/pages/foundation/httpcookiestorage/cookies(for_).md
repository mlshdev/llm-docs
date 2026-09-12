> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookiestorage/cookies(for:)](https://developer.apple.com/documentation/foundation/httpcookiestorage/cookies(for:))

# cookies(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns all the cookie storage’s cookies that are sent to a specified URL.

## Declaration

```swift
func cookies(for URL: URL) -> [HTTPCookie]?
```

## Parameters

- `URL`: The URL to filter on.

<a id="return-value"></a>

## Return Value

An array of cookies whose URL matches the provided URL.

<a id="Discussion"></a>

## Discussion

You can use the [requestHeaderFields(with:)](../httpcookie/requestheaderfields%28with_%29.md) method of [HTTPCookie](../httpcookie.md) to turn the array returned by this method into a set of header fields to add to a [URLRequest](../urlrequest.md) object (or [NSMutableURLRequest](../nsmutableurlrequest.md) in Objective-C).

If you override this method, also override [getCookiesFor(\_:completionHandler:)](getcookiesfor%28__completionhandler_%29.md).

## See Also

### Retrieving cookies

- [cookies](cookies.md): The cookie storage’s cookies.
- [getCookiesFor(\_:completionHandler:)](getcookiesfor%28__completionhandler_%29.md): Fetches cookies relevant to the specified task and passes them to the completion handler.
- [sortedCookies(using:)](sortedcookies%28using_%29.md): Returns all of the cookie storage’s cookies, sorted according to a given set of sort descriptors.

# cookiesForURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns all the cookie storage’s cookies that are sent to a specified URL.

## Declaration

```objectivec
- (NSArray<NSHTTPCookie *> *) cookiesForURL:(NSURL *) URL;
```

## Parameters

- `URL`: The URL to filter on.

<a id="return-value"></a>

## Return Value

An array of cookies whose URL matches the provided URL.

<a id="Discussion"></a>

## Discussion

You can use the [requestHeaderFieldsWithCookies:](../httpcookie/requestheaderfields%28with_%29.md) method of [NSHTTPCookie](../httpcookie.md) to turn the array returned by this method into a set of header fields to add to a [URLRequest](../urlrequest.md) object (or [NSMutableURLRequest](../nsmutableurlrequest.md) in Objective-C).

If you override this method, also override [getCookiesForTask:completionHandler:](getcookiesfor%28__completionhandler_%29.md).

## See Also

### Retrieving cookies

- [cookies](cookies.md): The cookie storage’s cookies.
- [getCookiesForTask:completionHandler:](getcookiesfor%28__completionhandler_%29.md): Fetches cookies relevant to the specified task and passes them to the completion handler.
- [sortedCookiesUsingDescriptors:](sortedcookies%28using_%29.md): Returns all of the cookie storage’s cookies, sorted according to a given set of sort descriptors.
