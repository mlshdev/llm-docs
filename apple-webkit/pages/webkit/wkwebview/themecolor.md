> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/themecolor](https://developer.apple.com/documentation/webkit/wkwebview/themecolor)

# themeColor (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The theme color that the system gets from the first valid meta tag in the webpage.

## Declaration

```swift
var themeColor: UIColor? { get }
```

```swift
var themeColor: NSColor? { get }
```

## See Also

### Inspecting the view information

- [scrollView](scrollview.md): The scroll view associated with the web view.
- [title](title.md): The page title.
- [url](url.md): The URL for the current webpage.
- [mediaType](mediatype.md): The media type for the contents of the web view.
- [customUserAgent](customuseragent.md): The custom user agent string.
- [serverTrust](servertrust.md): The trust management object you use to evaluate trust for the current webpage.
- [hasOnlySecureContent](hasonlysecurecontent.md): A Boolean value that indicates whether the web view loaded all resources on the page through securely encrypted connections.
- [underPageBackgroundColor](underpagebackgroundcolor.md): The color the web view displays behind the active page, visible when the user scrolls beyond the bounds of the page.
- [refreshController](refreshcontroller.md)

# themeColor (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The theme color that the system gets from the first valid meta tag in the webpage.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIColor * themeColor;
```

```objectivec
@property (nonatomic, readonly, nullable) NSColor * themeColor;
```

## See Also

### Inspecting the view information

- [scrollView](scrollview.md): The scroll view associated with the web view.
- [title](title.md): The page title.
- [URL](url.md): The URL for the current webpage.
- [mediaType](mediatype.md): The media type for the contents of the web view.
- [customUserAgent](customuseragent.md): The custom user agent string.
- [serverTrust](servertrust.md): The trust management object you use to evaluate trust for the current webpage.
- [hasOnlySecureContent](hasonlysecurecontent.md): A Boolean value that indicates whether the web view loaded all resources on the page through securely encrypted connections.
- [underPageBackgroundColor](underpagebackgroundcolor.md): The color the web view displays behind the active page, visible when the user scrolls beyond the bounds of the page.
- [refreshController](refreshcontroller.md)
