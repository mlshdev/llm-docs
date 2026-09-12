> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/servertrust](https://developer.apple.com/documentation/webkit/wkwebview/servertrust)

# serverTrust (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The trust management object you use to evaluate trust for the current webpage.

## Declaration

```swift
var serverTrust: SecTrust? { get }
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to validate the webpage’s certificate and associated credentials. [WKWebView](../wkwebview.md) is key-value observing (KVO) compliant for this property.

## See Also

### Inspecting the view information

- [scrollView](scrollview.md): The scroll view associated with the web view.
- [title](title.md): The page title.
- [url](url.md): The URL for the current webpage.
- [mediaType](mediatype.md): The media type for the contents of the web view.
- [customUserAgent](customuseragent.md): The custom user agent string.
- [hasOnlySecureContent](hasonlysecurecontent.md): A Boolean value that indicates whether the web view loaded all resources on the page through securely encrypted connections.
- [themeColor](themecolor.md): The theme color that the system gets from the first valid meta tag in the webpage.
- [underPageBackgroundColor](underpagebackgroundcolor.md): The color the web view displays behind the active page, visible when the user scrolls beyond the bounds of the page.
- [refreshController](refreshcontroller.md)

# serverTrust (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The trust management object you use to evaluate trust for the current webpage.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) SecTrustRef serverTrust;
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to validate the webpage’s certificate and associated credentials. [WKWebView](../wkwebview.md) is key-value observing (KVO) compliant for this property.

## See Also

### Inspecting the view information

- [scrollView](scrollview.md): The scroll view associated with the web view.
- [title](title.md): The page title.
- [URL](url.md): The URL for the current webpage.
- [mediaType](mediatype.md): The media type for the contents of the web view.
- [customUserAgent](customuseragent.md): The custom user agent string.
- [hasOnlySecureContent](hasonlysecurecontent.md): A Boolean value that indicates whether the web view loaded all resources on the page through securely encrypted connections.
- [themeColor](themecolor.md): The theme color that the system gets from the first valid meta tag in the webpage.
- [underPageBackgroundColor](underpagebackgroundcolor.md): The color the web view displays behind the active page, visible when the user scrolls beyond the bounds of the page.
- [refreshController](refreshcontroller.md)
