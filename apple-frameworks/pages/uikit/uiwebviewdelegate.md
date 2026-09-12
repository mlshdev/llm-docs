> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebviewdelegate](https://developer.apple.com/documentation/uikit/uiwebviewdelegate)

# UIWebViewDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS

The `UIWebViewDelegate` protocol defines methods that a delegate of a [UIWebView](uiwebview.md) object can optionally implement to intervene when web content is loaded.

## Declaration

```swift
@MainActor protocol UIWebViewDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

> **Important**

>  Before releasing an instance of `UIWebView` for which you have set a delegate, you must first set the `UIWebView` delegate property to `nil` before disposing of the `UIWebView` instance. This can be done, for example, in the dealloc method where you dispose of the `UIWebView`.

## Topics

### Loading Content

- [webView(\_:shouldStartLoadWith:navigationType:)](uiwebviewdelegate/webview%28__shouldstartloadwith_navigationtype_%29.md): Deprecated. Sent before a web view begins loading a frame.
- [webViewDidStartLoad(\_:)](uiwebviewdelegate/webviewdidstartload%28__%29.md): Deprecated. Sent after a web view starts loading a frame.
- [webViewDidFinishLoad(\_:)](uiwebviewdelegate/webviewdidfinishload%28__%29.md): Deprecated. Sent after a web view finishes loading a frame.
- [webView(\_:didFailLoadWithError:)](uiwebviewdelegate/webview%28__didfailloadwitherror_%29.md): Deprecated. Sent if a web view failed to load a frame.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to web view changes

- [delegate](uiwebview/delegate.md): Deprecated. The receiver’s delegate.

# UIWebViewDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS

The `UIWebViewDelegate` protocol defines methods that a delegate of a [UIWebView](uiwebview.md) object can optionally implement to intervene when web content is loaded.

## Declaration

```objectivec
@protocol UIWebViewDelegate <NSObject>
```

<a id="overview"></a>

## Overview

> **Important**

>  Before releasing an instance of `UIWebView` for which you have set a delegate, you must first set the `UIWebView` delegate property to `nil` before disposing of the `UIWebView` instance. This can be done, for example, in the dealloc method where you dispose of the `UIWebView`.

## Topics

### Loading Content

- [webView:shouldStartLoadWithRequest:navigationType:](uiwebviewdelegate/webview%28__shouldstartloadwith_navigationtype_%29.md): Deprecated. Sent before a web view begins loading a frame.
- [webViewDidStartLoad:](uiwebviewdelegate/webviewdidstartload%28__%29.md): Deprecated. Sent after a web view starts loading a frame.
- [webViewDidFinishLoad:](uiwebviewdelegate/webviewdidfinishload%28__%29.md): Deprecated. Sent after a web view finishes loading a frame.
- [webView:didFailLoadWithError:](uiwebviewdelegate/webview%28__didfailloadwitherror_%29.md): Deprecated. Sent if a web view failed to load a frame.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to web view changes

- [delegate](uiwebview/delegate.md): Deprecated. The receiver’s delegate.
