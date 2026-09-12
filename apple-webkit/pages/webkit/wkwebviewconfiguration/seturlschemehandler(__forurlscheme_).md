> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebviewconfiguration/seturlschemehandler(_:forurlscheme:)](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/seturlschemehandler(_:forurlscheme:))

# setURLSchemeHandler(\_:forURLScheme:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Registers an object to load resources associated with the specified URL scheme.

## Declaration

```swift
func setURLSchemeHandler(_ urlSchemeHandler: (any WKURLSchemeHandler)?, forURLScheme urlScheme: String)
```

## Parameters

- `urlSchemeHandler`: The object to handle the URL scheme. This object must adopt the [WKURLSchemeHandler](../wkurlschemehandler.md) protocol.
- `urlScheme`: The URL scheme to handle. Scheme names are case sensitive, must start with an ASCII letter, and may contain only ASCII letters, numbers, the “`+`” character, the “`-`” character, and the “`.`” character. This method raises an [invalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception) if the scheme name is an empty string or contains any other characters.

  It is a programmer error to register a handler for a scheme WebKit already handles, such as `https`, and this method raises an [invalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception) if you try to do so. To determine whether WebKit handles a specific scheme, call the [handlesURLScheme(\_:)](../wkwebview/handlesurlscheme%28__%29.md) class method of [WKWebView](../wkwebview.md).

<a id="Discussion"></a>

## Discussion

Use this method to register any custom resource types that your web content uses. For example, you might register a custom URL scheme for resources that you provide programmatically from your app.

It is a programmer error to call this method more than once for the same scheme.

> **Tip**

>  To prevent future conflicts with WebKit, include the name of your app or company in any custom scheme names.

## See Also

### Adding handlers for custom URL schemes

- [urlSchemeHandler(forURLScheme:)](urlschemehandler%28forurlscheme_%29.md): Returns the currently registered handler object for the specified URL scheme.

# setURLSchemeHandler:forURLScheme: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Registers an object to load resources associated with the specified URL scheme.

## Declaration

```objectivec
- (void) setURLSchemeHandler:(id<WKURLSchemeHandler>) urlSchemeHandler forURLScheme:(NSString *) urlScheme;
```

## Parameters

- `urlSchemeHandler`: The object to handle the URL scheme. This object must adopt the [WKURLSchemeHandler](../wkurlschemehandler.md) protocol.
- `urlScheme`: The URL scheme to handle. Scheme names are case sensitive, must start with an ASCII letter, and may contain only ASCII letters, numbers, the “`+`” character, the “`-`” character, and the “`.`” character. This method raises an [NSInvalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception) if the scheme name is an empty string or contains any other characters.

  It is a programmer error to register a handler for a scheme WebKit already handles, such as `https`, and this method raises an [NSInvalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception) if you try to do so. To determine whether WebKit handles a specific scheme, call the [handlesURLScheme:](../wkwebview/handlesurlscheme%28__%29.md) class method of [WKWebView](../wkwebview.md).

<a id="Discussion"></a>

## Discussion

Use this method to register any custom resource types that your web content uses. For example, you might register a custom URL scheme for resources that you provide programmatically from your app.

It is a programmer error to call this method more than once for the same scheme.

> **Tip**

>  To prevent future conflicts with WebKit, include the name of your app or company in any custom scheme names.

## See Also

### Adding handlers for custom URL schemes

- [urlSchemeHandlerForURLScheme:](urlschemehandler%28forurlscheme_%29.md): Returns the currently registered handler object for the specified URL scheme.
