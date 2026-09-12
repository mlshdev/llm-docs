> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkhttpcookiestoreobserver/cookiesdidchange(in:)](https://developer.apple.com/documentation/webkit/wkhttpcookiestoreobserver/cookiesdidchange(in:))

# cookiesDidChange(in:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Tells the delegate that the cookies in the specified cookie store changed.

## Declaration

```swift
optional func cookiesDidChange(in cookieStore: WKHTTPCookieStore)
```

## Parameters

- `cookieStore`: The cookie store that contains the modified cookies.

<a id="Discussion"></a>

## Discussion

When the value of a cookie changes, the cookie store calls this method on all registered observer objects. Use this method to fetch the new cookie values and update any app-specific data structures or JavaScript environment variables that use those values.

# cookiesDidChangeInCookieStore: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Tells the delegate that the cookies in the specified cookie store changed.

## Declaration

```objectivec
- (void) cookiesDidChangeInCookieStore:(WKHTTPCookieStore *) cookieStore;
```

## Parameters

- `cookieStore`: The cookie store that contains the modified cookies.

<a id="Discussion"></a>

## Discussion

When the value of a cookie changes, the cookie store calls this method on all registered observer objects. Use this method to fetch the new cookie values and update any app-specific data structures or JavaScript environment variables that use those values.
