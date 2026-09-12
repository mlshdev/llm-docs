> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkhttpcookiestore/getcookies(for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkhttpcookiestore/getcookies(for:completionhandler:))

# getCookies(for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func getCookies(for url: URL, completionHandler: @escaping @MainActor @Sendable ([HTTPCookie]) -> Void)
```

```swift
func cookies(for url: URL) async -> [HTTPCookie]
```

## Parameters

- `url`: The URL to fetch the matching cookies for.
- `completionHandler`: A block to invoke with the fetched cookies.

<a id="discussion"></a>

## Discussion

Fetches stored cookies that match the passed in URL.

# getCookiesForURL:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) getCookiesForURL:(NSURL *) url completionHandler:(void (^)(NSArray<NSHTTPCookie *> *)) completionHandler;
```

## Parameters

- `url`: The URL to fetch the matching cookies for.
- `completionHandler`: A block to invoke with the fetched cookies.

<a id="discussion"></a>

## Discussion

Fetches stored cookies that match the passed in URL.
