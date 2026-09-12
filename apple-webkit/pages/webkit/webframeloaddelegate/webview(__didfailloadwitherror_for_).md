> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeloaddelegate/webview(_:didfailloadwitherror:for:)](https://developer.apple.com/documentation/webkit/webframeloaddelegate/webview(_:didfailloadwitherror:for:))

# webView(\_:didFailLoadWithError:for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when an error occurs loading a committed data source.

## Declaration

```swift
optional func webView(_ sender: WebView!, didFailLoadWithError error: (any Error)!, for frame: WebFrame!)
```

## Parameters

- `sender`: The web view containing the frame.
- `error`: The type of error that occurred during the load.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

This method is called after the data source has been committed but resulted in an error.

# webView:didFailLoadWithError:forFrame: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when an error occurs loading a committed data source.

## Declaration

```objectivec
- (void) webView:(WebView *) sender didFailLoadWithError:(NSError *) error forFrame:(WebFrame *) frame;
```

## Parameters

- `sender`: The web view containing the frame.
- `error`: The type of error that occurred during the load.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

This method is called after the data source has been committed but resulted in an error.
