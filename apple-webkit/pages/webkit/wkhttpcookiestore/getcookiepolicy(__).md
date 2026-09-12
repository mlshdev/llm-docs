> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkhttpcookiestore/getcookiepolicy(_:)](https://developer.apple.com/documentation/webkit/wkhttpcookiestore/getcookiepolicy(_:))

# getCookiePolicy(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Returns a cookie policy that indicates whether the cookie store allows cookie storage.

## Declaration

```swift
func getCookiePolicy(_ completionHandler: @escaping @MainActor @Sendable (WKHTTPCookieStore.CookiePolicy) -> Void)
```

```swift
var cookiePolicy: WKHTTPCookieStore.CookiePolicy { get async }
```

## Parameters

- `completionHandler`: The completion handler block to execute asynchronously with the cookie policy. This block has no return value, and takes the following parameter:

  - **cookiePolicy**: A [WKHTTPCookieStore.CookiePolicy](cookiepolicy.md) case that indicates whether the cookie store allows cookie storage.

## See Also

### Permitting cookie storage

- [setCookiePolicy(\_:completionHandler:)](setcookiepolicy%28__completionhandler_%29.md): Sets a cookie policy that indicates whether the cookie store allows cookie storage.
- [WKHTTPCookieStore.CookiePolicy](cookiepolicy.md): An enumeration with cases that indicate whether a cookie store allows cookie storage.

# getCookiePolicy: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Returns a cookie policy that indicates whether the cookie store allows cookie storage.

## Declaration

```objectivec
- (void) getCookiePolicy:(void (^)(enum WKCookiePolicy)) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler block to execute asynchronously with the cookie policy. This block has no return value, and takes the following parameter:

  - **cookiePolicy**: A [WKCookiePolicy](cookiepolicy.md) case that indicates whether the cookie store allows cookie storage.

## See Also

### Permitting cookie storage

- [setCookiePolicy:completionHandler:](setcookiepolicy%28__completionhandler_%29.md): Sets a cookie policy that indicates whether the cookie store allows cookie storage.
- [WKCookiePolicy](cookiepolicy.md): An enumeration with cases that indicate whether a cookie store allows cookie storage.
