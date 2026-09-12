> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/extensioncontext(for:)-2kr4](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/extensioncontext(for:)-2kr4)

# extensionContext(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a loaded extension context matching the specified URL.

## Declaration

```swift
func extensionContext(for URL: URL) -> WKWebExtensionContext?
```

## Parameters

- `URL`: The URL to lookup.

<a id="return-value"></a>

## Return Value

An extension context or `nil` if no match was found.

<a id="discussion"></a>

## Discussion

This method is useful for determining the extension context to use when about to navigate to an extension URL. For example, you could use this method to retrieve the appropriate extension context and then use its [webViewConfiguration](../wkwebextensioncontext/webviewconfiguration.md) property to configure a web view for loading that URL.

# extensionContextForURL: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a loaded extension context matching the specified URL.

## Declaration

```objectivec
- (WKWebExtensionContext *) extensionContextForURL:(NSURL *) URL;
```

## Parameters

- `URL`: The URL to lookup.

<a id="return-value"></a>

## Return Value

An extension context or `nil` if no match was found.

<a id="discussion"></a>

## Discussion

This method is useful for determining the extension context to use when about to navigate to an extension URL. For example, you could use this method to retrieve the appropriate extension context and then use its [webViewConfiguration](../wkwebextensioncontext/webviewconfiguration.md) property to configure a web view for loading that URL.
