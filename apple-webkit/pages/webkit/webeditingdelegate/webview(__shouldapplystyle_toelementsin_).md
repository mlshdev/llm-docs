> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webeditingdelegate/webview(_:shouldapplystyle:toelementsin:)](https://developer.apple.com/documentation/webkit/webeditingdelegate/webview(_:shouldapplystyle:toelementsin:))

# webView(\_:shouldApplyStyle:toElementsIn:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the user should be allowed to apply a style to a range of content.

## Declaration

```swift
optional func webView(_ webView: WebView!, shouldApplyStyle style: DOMCSSStyleDeclaration!, toElementsIn range: DOMRange!) -> Bool
```

## Parameters

- `webView`: The web view that the user is editing.
- `style`: The style to apply.
- `range`: The range of the content.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user should be allowed to apply the style to the content range; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

# webView:shouldApplyStyle:toElementsInDOMRange: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the user should be allowed to apply a style to a range of content.

## Declaration

```objectivec
- (BOOL) webView:(WebView *) webView shouldApplyStyle:(DOMCSSStyleDeclaration *) style toElementsInDOMRange:(DOMRange *) range;
```

## Parameters

- `webView`: The web view that the user is editing.
- `style`: The style to apply.
- `range`: The range of the content.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user should be allowed to apply the style to the content range; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)
