> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/applicationnameforuseragent](https://developer.apple.com/documentation/webkit/webview-swift.class/applicationnameforuseragent)

# applicationNameForUserAgent (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s application name that is used in the user-agent string.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
var applicationNameForUserAgent: String! { get set }
```

<a id="Discussion"></a>

## Discussion

The user-agent is used by websites to identify the client browser.

## See Also

### Getting and Setting User-agent Strings

- [userAgent(for:)](useragent%28for_%29.md): Deprecated. Returns the appropriate user-agent string for a given URL.
- [customUserAgent](customuseragent.md): Deprecated. The receiver’s custom user-agent string.

# applicationNameForUserAgent (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s application name that is used in the user-agent string.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * applicationNameForUserAgent;
```

<a id="Discussion"></a>

## Discussion

The user-agent is used by websites to identify the client browser.

## See Also

### Getting and Setting User-agent Strings

- [userAgentForURL:](useragent%28for_%29.md): Deprecated. Returns the appropriate user-agent string for a given URL.
- [customUserAgent](customuseragent.md): Deprecated. The receiver’s custom user-agent string.
