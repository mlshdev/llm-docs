> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/title](https://developer.apple.com/documentation/webkit/wkwebview/title)

# title (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The page title.

## Declaration

```swift
var title: String? { get }
```

<a id="Discussion"></a>

## Discussion

[WKWebView](../wkwebview.md) is key-value observing (KVO) compliant for this property.

## See Also

### Inspecting the view information

- [scrollView](scrollview.md): The scroll view associated with the web view.
- [url](url.md): The URL for the current webpage.
- [mediaType](mediatype.md): The media type for the contents of the web view.
- [customUserAgent](customuseragent.md): The custom user agent string.
- [serverTrust](servertrust.md): The trust management object you use to evaluate trust for the current webpage.
- [hasOnlySecureContent](hasonlysecurecontent.md): A Boolean value that indicates whether the web view loaded all resources on the page through securely encrypted connections.
- [themeColor](themecolor.md): The theme color that the system gets from the first valid meta tag in the webpage.
- [underPageBackgroundColor](underpagebackgroundcolor.md): The color the web view displays behind the active page, visible when the user scrolls beyond the bounds of the page.
- [refreshController](refreshcontroller.md)

# title (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The page title.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * title;
```

<a id="Discussion"></a>

## Discussion

[WKWebView](../wkwebview.md) is key-value observing (KVO) compliant for this property.

## See Also

### Inspecting the view information

- [scrollView](scrollview.md): The scroll view associated with the web view.
- [URL](url.md): The URL for the current webpage.
- [mediaType](mediatype.md): The media type for the contents of the web view.
- [customUserAgent](customuseragent.md): The custom user agent string.
- [serverTrust](servertrust.md): The trust management object you use to evaluate trust for the current webpage.
- [hasOnlySecureContent](hasonlysecurecontent.md): A Boolean value that indicates whether the web view loaded all resources on the page through securely encrypted connections.
- [themeColor](themecolor.md): The theme color that the system gets from the first valid meta tag in the webpage.
- [underPageBackgroundColor](underpagebackgroundcolor.md): The color the web view displays behind the active page, visible when the user scrolls beyond the bounds of the page.
- [refreshController](refreshcontroller.md)
