> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/webframeloaddelegate/webview(_:didchangelocationwithinpagefor:)

# webView(\_:didChangeLocationWithinPageFor:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when the scroll position within a frame changes.

## Declaration

```swift
optional func webView(_ sender: WebView!, didChangeLocationWithinPageFor frame: WebFrame!)
```

## Parameters

- `sender`: The web view containing the frame.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

Typically invoked when the user clicks on an anchor within a page. Additional information about the request can be obtained from the data source of `frame`.

# webView:didChangeLocationWithinPageForFrame: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when the scroll position within a frame changes.

## Declaration

```objectivec
- (void) webView:(WebView *) sender didChangeLocationWithinPageForFrame:(WebFrame *) frame;
```

## Parameters

- `sender`: The web view containing the frame.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

Typically invoked when the user clicks on an anchor within a page. Additional information about the request can be obtained from the data source of `frame`.
