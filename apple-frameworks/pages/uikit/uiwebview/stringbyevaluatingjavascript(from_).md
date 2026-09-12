> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/stringbyevaluatingjavascript(from:)](https://developer.apple.com/documentation/uikit/uiwebview/stringbyevaluatingjavascript(from:))

# stringByEvaluatingJavaScript(from:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0)

Returns the result of running a JavaScript script.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```swift
func stringByEvaluatingJavaScript(from script: String) -> String?
```

## Parameters

- `script`: The JavaScript script to run.

<a id="return-value"></a>

## Return Value

The result of running the JavaScript script passed in the `script` parameter, or `nil` if the script fails.

<a id="Discussion"></a>

## Discussion

New apps should instead use the [evaluateJavaScript(\_:completionHandler:)](https://developer.apple.com/documentation/webkit/wkwebview/evaluatejavascript%28_:completionhandler:%29) method from the [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) class. Legacy apps should adopt that method if possible.

> **Important**

>  The [stringByEvaluatingJavaScript(from:)](stringbyevaluatingjavascript%28from_%29.md) method waits synchronously for JavaScript evaluation to complete. If you load web content whose JavaScript code you have not vetted, invoking this method could hang your app. Best practice is to adopt the [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) class and use its [evaluateJavaScript(\_:completionHandler:)](https://developer.apple.com/documentation/webkit/wkwebview/evaluatejavascript%28_:completionhandler:%29) method instead.

# stringByEvaluatingJavaScriptFromString: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0)

Returns the result of running a JavaScript script.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```objectivec
- (NSString *) stringByEvaluatingJavaScriptFromString:(NSString *) script;
```

## Parameters

- `script`: The JavaScript script to run.

<a id="return-value"></a>

## Return Value

The result of running the JavaScript script passed in the `script` parameter, or `nil` if the script fails.

<a id="Discussion"></a>

## Discussion

New apps should instead use the [evaluateJavaScript:completionHandler:](https://developer.apple.com/documentation/webkit/wkwebview/evaluatejavascript%28_:completionhandler:%29) method from the [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) class. Legacy apps should adopt that method if possible.

> **Important**

>  The [stringByEvaluatingJavaScriptFromString:](stringbyevaluatingjavascript%28from_%29.md) method waits synchronously for JavaScript evaluation to complete. If you load web content whose JavaScript code you have not vetted, invoking this method could hang your app. Best practice is to adopt the [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) class and use its [evaluateJavaScript:completionHandler:](https://developer.apple.com/documentation/webkit/wkwebview/evaluatejavascript%28_:completionhandler:%29) method instead.
