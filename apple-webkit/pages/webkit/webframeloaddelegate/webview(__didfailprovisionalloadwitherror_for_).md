> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeloaddelegate/webview(_:didfailprovisionalloadwitherror:for:)](https://developer.apple.com/documentation/webkit/webframeloaddelegate/webview(_:didfailprovisionalloadwitherror:for:))

# webView(\_:didFailProvisionalLoadWithError:for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called if an error occurs when starting to load data for a page.

## Declaration

```swift
optional func webView(_ sender: WebView!, didFailProvisionalLoadWithError error: (any Error)!, for frame: WebFrame!)
```

## Parameters

- `sender`: The web view containing the frame.
- `error`: Specifies the type of error that occurred during the load.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

The frame continues to display the committed data source if there is one.

# webView:didFailProvisionalLoadWithError:forFrame: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called if an error occurs when starting to load data for a page.

## Declaration

```objectivec
- (void) webView:(WebView *) sender didFailProvisionalLoadWithError:(NSError *) error forFrame:(WebFrame *) frame;
```

## Parameters

- `sender`: The web view containing the frame.
- `error`: Specifies the type of error that occurred during the load.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

The frame continues to display the committed data source if there is one.
