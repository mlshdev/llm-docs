> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/useragent(for:)](https://developer.apple.com/documentation/webkit/webview-swift.class/useragent(for:))

# userAgent(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the appropriate user-agent string for a given URL.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
func userAgent(for URL: URL!) -> String!
```

## Parameters

- `URL`: The URL that you need the user-agent string for.

<a id="return-value"></a>

## Return Value

The user-agent string for a given URL. The user-agent string is used by websites to identify the client browser.

## See Also

### Getting and Setting User-agent Strings

- [applicationNameForUserAgent](applicationnameforuseragent.md): Deprecated. The receiver’s application name that is used in the user-agent string.
- [customUserAgent](customuseragent.md): Deprecated. The receiver’s custom user-agent string.

# userAgentForURL: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the appropriate user-agent string for a given URL.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
- (NSString *) userAgentForURL:(NSURL *) URL;
```

## Parameters

- `URL`: The URL that you need the user-agent string for.

<a id="return-value"></a>

## Return Value

The user-agent string for a given URL. The user-agent string is used by websites to identify the client browser.

## See Also

### Getting and Setting User-agent Strings

- [applicationNameForUserAgent](applicationnameforuseragent.md): Deprecated. The receiver’s application name that is used in the user-agent string.
- [customUserAgent](customuseragent.md): Deprecated. The receiver’s custom user-agent string.
