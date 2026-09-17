> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/webview-swift.class/customuseragent

# customUserAgent (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s custom user-agent string.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
var customUserAgent: String! { get set }
```

<a id="Discussion"></a>

## Discussion

The custom user-agent string is used for all URLs. If `nil`, then the receiver constructs a user-agent string that produces the best rendering results for each URL.

## See Also

### Getting and Setting User-agent Strings

- [userAgent(for:)](useragent%28for_%29.md): Deprecated. Returns the appropriate user-agent string for a given URL.
- [applicationNameForUserAgent](applicationnameforuseragent.md): Deprecated. The receiver’s application name that is used in the user-agent string.

# customUserAgent (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s custom user-agent string.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * customUserAgent;
```

<a id="Discussion"></a>

## Discussion

The custom user-agent string is used for all URLs. If `nil`, then the receiver constructs a user-agent string that produces the best rendering results for each URL.

## See Also

### Getting and Setting User-agent Strings

- [userAgentForURL:](useragent%28for_%29.md): Deprecated. Returns the appropriate user-agent string for a given URL.
- [applicationNameForUserAgent](applicationnameforuseragent.md): Deprecated. The receiver’s application name that is used in the user-agent string.
