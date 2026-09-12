> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookiestorage/cookies](https://developer.apple.com/documentation/foundation/httpcookiestorage/cookies)

# cookies (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie storage’s cookies.

## Declaration

```swift
var cookies: [HTTPCookie]? { get }
```

<a id="Discussion"></a>

## Discussion

If you want to sort the cookie storage’s cookies, you should use the [sortedCookies(using:)](sortedcookies%28using_%29.md) method instead of sorting the result of this method.

## See Also

### Retrieving cookies

- [getCookiesFor(\_:completionHandler:)](getcookiesfor%28__completionhandler_%29.md): Fetches cookies relevant to the specified task and passes them to the completion handler.
- [cookies(for:)](cookies%28for_%29.md): Returns all the cookie storage’s cookies that are sent to a specified URL.
- [sortedCookies(using:)](sortedcookies%28using_%29.md): Returns all of the cookie storage’s cookies, sorted according to a given set of sort descriptors.

# cookies (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie storage’s cookies.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSHTTPCookie *> * cookies;
```

<a id="Discussion"></a>

## Discussion

If you want to sort the cookie storage’s cookies, you should use the [sortedCookiesUsingDescriptors:](sortedcookies%28using_%29.md) method instead of sorting the result of this method.

## See Also

### Retrieving cookies

- [getCookiesForTask:completionHandler:](getcookiesfor%28__completionhandler_%29.md): Fetches cookies relevant to the specified task and passes them to the completion handler.
- [cookiesForURL:](cookies%28for_%29.md): Returns all the cookie storage’s cookies that are sent to a specified URL.
- [sortedCookiesUsingDescriptors:](sortedcookies%28using_%29.md): Returns all of the cookie storage’s cookies, sorted according to a given set of sort descriptors.
