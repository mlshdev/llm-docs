> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/mediatype](https://developer.apple.com/documentation/webkit/wkwebview/mediatype)

# mediaType (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The media type for the contents of the web view.

## Declaration

```swift
var mediaType: String? { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is `nil`, the web view derives the current media type from the CSS media property of its content. If you assign a value other than `nil` to this property, the web view uses the value you provide instead. The default value of this property is `nil`.

## See Also

### Inspecting the view information

- [scrollView](scrollview.md): The scroll view associated with the web view.
- [title](title.md): The page title.
- [url](url.md): The URL for the current webpage.
- [customUserAgent](customuseragent.md): The custom user agent string.
- [serverTrust](servertrust.md): The trust management object you use to evaluate trust for the current webpage.
- [hasOnlySecureContent](hasonlysecurecontent.md): A Boolean value that indicates whether the web view loaded all resources on the page through securely encrypted connections.
- [themeColor](themecolor.md): The theme color that the system gets from the first valid meta tag in the webpage.
- [underPageBackgroundColor](underpagebackgroundcolor.md): The color the web view displays behind the active page, visible when the user scrolls beyond the bounds of the page.
- [refreshController](refreshcontroller.md)

# mediaType (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The media type for the contents of the web view.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * mediaType;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is `nil`, the web view derives the current media type from the CSS media property of its content. If you assign a value other than `nil` to this property, the web view uses the value you provide instead. The default value of this property is `nil`.

## See Also

### Inspecting the view information

- [scrollView](scrollview.md): The scroll view associated with the web view.
- [title](title.md): The page title.
- [URL](url.md): The URL for the current webpage.
- [customUserAgent](customuseragent.md): The custom user agent string.
- [serverTrust](servertrust.md): The trust management object you use to evaluate trust for the current webpage.
- [hasOnlySecureContent](hasonlysecurecontent.md): A Boolean value that indicates whether the web view loaded all resources on the page through securely encrypted connections.
- [themeColor](themecolor.md): The theme color that the system gets from the first valid meta tag in the webpage.
- [underPageBackgroundColor](underpagebackgroundcolor.md): The color the web view displays behind the active page, visible when the user scrolls beyond the bounds of the page.
- [refreshController](refreshcontroller.md)
