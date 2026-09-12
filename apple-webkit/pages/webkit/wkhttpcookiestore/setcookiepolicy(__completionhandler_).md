> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkhttpcookiestore/setcookiepolicy(_:completionhandler:)](https://developer.apple.com/documentation/webkit/wkhttpcookiestore/setcookiepolicy(_:completionhandler:))

# setCookiePolicy(\_:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Sets a cookie policy that indicates whether the cookie store allows cookie storage.

## Declaration

```swift
func setCookiePolicy(_ policy: WKHTTPCookieStore.CookiePolicy, completionHandler: (@MainActor @Sendable () -> Void)? = nil)
```

```swift
func setCookiePolicy(_ policy: WKHTTPCookieStore.CookiePolicy) async
```

## Parameters

- `policy`: A cookie policy that indicates whether the cookie store allows cookie storage.
- `completionHandler`: A block the system invokes after it sets the cookie policy.

## See Also

### Permitting cookie storage

- [getCookiePolicy(\_:)](getcookiepolicy%28__%29.md): Returns a cookie policy that indicates whether the cookie store allows cookie storage.
- [WKHTTPCookieStore.CookiePolicy](cookiepolicy.md): An enumeration with cases that indicate whether a cookie store allows cookie storage.

# setCookiePolicy:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Sets a cookie policy that indicates whether the cookie store allows cookie storage.

## Declaration

```objectivec
- (void) setCookiePolicy:(WKCookiePolicy) policy completionHandler:(void (^)(void)) completionHandler;
```

## Parameters

- `policy`: A cookie policy that indicates whether the cookie store allows cookie storage.
- `completionHandler`: A block the system invokes after it sets the cookie policy.

## See Also

### Permitting cookie storage

- [getCookiePolicy:](getcookiepolicy%28__%29.md): Returns a cookie policy that indicates whether the cookie store allows cookie storage.
- [WKCookiePolicy](cookiepolicy.md): An enumeration with cases that indicate whether a cookie store allows cookie storage.
