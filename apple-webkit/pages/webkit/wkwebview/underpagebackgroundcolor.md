> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/underpagebackgroundcolor](https://developer.apple.com/documentation/webkit/wkwebview/underpagebackgroundcolor)

# underPageBackgroundColor (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The color the web view displays behind the active page, visible when the user scrolls beyond the bounds of the page.

## Declaration

```swift
@NSCopying var underPageBackgroundColor: UIColor! { get set }
```

```swift
@NSCopying var underPageBackgroundColor: NSColor! { get set }
```

<a id="Discussion"></a>

## Discussion

The web view derives the default value of this property from the content of the page, using the background colors of the `<html>` and `<body>` elements with the background color of the web view. To override the default color, set this property to a new color.

## See Also

### Inspecting the view information

- [scrollView](scrollview.md): The scroll view associated with the web view.
- [title](title.md): The page title.
- [url](url.md): The URL for the current webpage.
- [mediaType](mediatype.md): The media type for the contents of the web view.
- [customUserAgent](customuseragent.md): The custom user agent string.
- [serverTrust](servertrust.md): The trust management object you use to evaluate trust for the current webpage.
- [hasOnlySecureContent](hasonlysecurecontent.md): A Boolean value that indicates whether the web view loaded all resources on the page through securely encrypted connections.
- [themeColor](themecolor.md): The theme color that the system gets from the first valid meta tag in the webpage.
- [refreshController](refreshcontroller.md)

# underPageBackgroundColor (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The color the web view displays behind the active page, visible when the user scrolls beyond the bounds of the page.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) UIColor * underPageBackgroundColor;
```

```objectivec
@property (nonatomic, copy, null_resettable) NSColor * underPageBackgroundColor;
```

<a id="Discussion"></a>

## Discussion

The web view derives the default value of this property from the content of the page, using the background colors of the `<html>` and `<body>` elements with the background color of the web view. To override the default color, set this property to a new color.

## See Also

### Inspecting the view information

- [scrollView](scrollview.md): The scroll view associated with the web view.
- [title](title.md): The page title.
- [URL](url.md): The URL for the current webpage.
- [mediaType](mediatype.md): The media type for the contents of the web view.
- [customUserAgent](customuseragent.md): The custom user agent string.
- [serverTrust](servertrust.md): The trust management object you use to evaluate trust for the current webpage.
- [hasOnlySecureContent](hasonlysecurecontent.md): A Boolean value that indicates whether the web view loaded all resources on the page through securely encrypted connections.
- [themeColor](themecolor.md): The theme color that the system gets from the first valid meta tag in the webpage.
- [refreshController](refreshcontroller.md)
