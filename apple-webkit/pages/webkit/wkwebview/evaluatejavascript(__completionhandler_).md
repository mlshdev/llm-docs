> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/evaluatejavascript(_:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebview/evaluatejavascript(_:completionhandler:))

# evaluateJavaScript(\_:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Evaluates the specified JavaScript string.

## Declaration

```swift
func evaluateJavaScript(_ javaScriptString: String, completionHandler: (@MainActor @Sendable (Any?, (any Error)?) -> Void)? = nil)
```

```swift
func evaluateJavaScript(_ javaScriptString: String) async throws -> Any?
```

## Parameters

- `javaScriptString`: The JavaScript string to evaluate.
- `completionHandler`: A handler block to execute when script evaluation finishes. The method calls your block whether script evaluation completes successfully or fails. The block has no return value and takes the following parameters:

  - **object**: The result of the script evaluation, or `nil` if an error occurred.
  - **error**: `nil` on success, or an error object with information about the problem.

<a id="Discussion"></a>

## Discussion

After evaluating the script, this method executes the completion handler block with either the result of the script evaluation or an error. The completion handler always runs on the app’s main thread.

## See Also

### Executing JavaScript

- [evaluateJavaScript(\_:in:in:completionHandler:)](evaluatejavascript%28__in_in_completionhandler_%29.md): Evaluates a JavaScript string in the context of the specified frame and content world.
- [evaluateJavaScript(\_:in:contentWorld:)](evaluatejavascript%28__in_contentworld_%29.md): Evaluates a JavaScript string in the context of the specified frame and content world.
- [callAsyncJavaScript(\_:arguments:in:in:completionHandler:)](callasyncjavascript%28__arguments_in_in_completionhandler_%29.md): Executes the specified string as an asynchronous JavaScript function.
- [callAsyncJavaScript(\_:arguments:in:contentWorld:)](callasyncjavascript%28__arguments_in_contentworld_%29.md): Executes the specified string as an asynchronous JavaScript function.

# evaluateJavaScript:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Evaluates the specified JavaScript string.

## Declaration

```objectivec
- (void) evaluateJavaScript:(NSString *) javaScriptString completionHandler:(void (^)(id, NSError *)) completionHandler;
```

## Parameters

- `javaScriptString`: The JavaScript string to evaluate.
- `completionHandler`: A handler block to execute when script evaluation finishes. The method calls your block whether script evaluation completes successfully or fails. The block has no return value and takes the following parameters:

  - **object**: The result of the script evaluation, or `nil` if an error occurred.
  - **error**: `nil` on success, or an error object with information about the problem.

<a id="Discussion"></a>

## Discussion

After evaluating the script, this method executes the completion handler block with either the result of the script evaluation or an error. The completion handler always runs on the app’s main thread.

## See Also

### Executing JavaScript

- [evaluateJavaScript:inFrame:inContentWorld:completionHandler:](evaluatejavascript_inframe_incontentworld_completionhandler_.md): Evaluates the specified JavaScript string in the specified frame and content world.
- [callAsyncJavaScript:arguments:inFrame:inContentWorld:completionHandler:](callasyncjavascript_arguments_inframe_incontentworld_completionhandler_.md): Executes the specified string as an asynchronous JavaScript function.
