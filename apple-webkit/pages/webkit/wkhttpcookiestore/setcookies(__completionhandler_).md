> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/wkhttpcookiestore/setcookies(_:completionhandler:)

# setCookies(\_:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
func setCookies(_ cookies: [HTTPCookie], completionHandler: (@MainActor @Sendable () -> Void)? = nil)
```

```swift
func setCookies(_ cookies: [HTTPCookie]) async
```

## Parameters

- `cookies`: An array of cookies to set.
- `completionHandler`: A block to invoke once the cookies have been stored.

<a id="discussion"></a>

## Discussion

Set multiple cookies.

# setCookies:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
- (void) setCookies:(NSArray<NSHTTPCookie *> *) cookies completionHandler:(void (^)(void)) completionHandler;
```

## Parameters

- `cookies`: An array of cookies to set.
- `completionHandler`: A block to invoke once the cookies have been stored.

<a id="discussion"></a>

## Discussion

Set multiple cookies.
