> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/evaluatejavascript(_:in:contentworld:)](https://developer.apple.com/documentation/webkit/wkwebview/evaluatejavascript(_:in:contentworld:))

# evaluateJavaScript(\_:in:contentWorld:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS

Evaluates a JavaScript string in the context of the specified frame and content world.

## Declaration

```swift
@MainActor @preconcurrency func evaluateJavaScript(_ javaScript: String, in frame: WKFrameInfo? = nil, contentWorld: WKContentWorld) async throws -> Any?
```

## Parameters

- `javaScript`: The JavaScript string to evaluate.
- `frame`: The frame in which to evaluate the JavaScript code. Specify `nil` to target the main frame. If this frame is no longer valid when script evaluation begins, this method returns a [WKError.Code.javaScriptInvalidFrameTarget](../wkerror/code/javascriptinvalidframetarget.md) error.
- `contentWorld`: The namespace in which to evaluate the JavaScript code. This parameter doesn’t apply to changes you make to the underlying web content, such as the document’s DOM structure. Those changes remain visible to all scripts, regardless of which content world you specify. For more information about content worlds, see [WKContentWorld](../wkcontentworld.md).

<a id="return-value"></a>

## Return Value

The result of the script evaluation, or an error object that contains information about the problem that occurred. If your function body doesn’t return an explicit value, WebKit returns `nil` on success. If your function explicitly returns `null`, WebKit returns that value as an [NSNull](https://developer.apple.com/documentation/foundation/nsnull) object.

## See Also

### Executing JavaScript

- [evaluateJavaScript(\_:completionHandler:)](evaluatejavascript%28__completionhandler_%29.md): Evaluates the specified JavaScript string.
- [evaluateJavaScript(\_:in:in:completionHandler:)](evaluatejavascript%28__in_in_completionhandler_%29.md): Evaluates a JavaScript string in the context of the specified frame and content world.
- [callAsyncJavaScript(\_:arguments:in:in:completionHandler:)](callasyncjavascript%28__arguments_in_in_completionhandler_%29.md): Executes the specified string as an asynchronous JavaScript function.
- [callAsyncJavaScript(\_:arguments:in:contentWorld:)](callasyncjavascript%28__arguments_in_contentworld_%29.md): Executes the specified string as an asynchronous JavaScript function.
