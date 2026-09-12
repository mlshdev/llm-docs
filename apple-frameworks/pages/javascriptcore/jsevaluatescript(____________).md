> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsevaluatescript(_:_:_:_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsevaluatescript(_:_:_:_:_:_:))

# JSEvaluateScript(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Evaluates a string of JavaScript.

## Declaration

```swift
func JSEvaluateScript(_ ctx: JSContextRef!, _ script: JSStringRef!, _ thisObject: JSObjectRef!, _ sourceURL: JSStringRef!, _ startingLineNumber: Int32, _ exception: UnsafeMutablePointer<JSValueRef?>!) -> JSValueRef!
```

## Parameters

- `ctx`: The execution context to use.
- `script`: A [JSStringRef](jsstringref.md) that contains the script to evaluate.
- `thisObject`: The object to use as `this` or `NULL` to use the global object as `this`.
- `sourceURL`: A [JSStringRef](jsstringref.md) that contains a URL for the script’s source file. The system only uses this when reporting exceptions. Pass `NULL` to omit source file information in exceptions.
- `startingLineNumber`: An integer value that specifies the script’s starting line number in the file at `sourceURL`. The system only uses this when reporting exceptions.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

The value that results from evaluating `script`, or `NULL` if the system throws an exception.

## See Also

### Script Evaluation

- [JSCheckScriptSyntax(\_:\_:\_:\_:\_:)](jscheckscriptsyntax%28__________%29.md): Checks for syntax errors in a string of JavaScript.
- [JSGarbageCollect(\_:)](jsgarbagecollect%28__%29.md): Performs a JavaScript garbage collection.

# JSEvaluateScript (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Evaluates a string of JavaScript.

## Declaration

```objectivec
JSValueRefJSEvaluateScript(JSContextRef ctx, JSStringRef script, JSObjectRef thisObject, JSStringRef sourceURL, int startingLineNumber, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `script`: A [JSStringRef](jsstringref.md) that contains the script to evaluate.
- `thisObject`: The object to use as `this` or `NULL` to use the global object as `this`.
- `sourceURL`: A [JSStringRef](jsstringref.md) that contains a URL for the script’s source file. The system only uses this when reporting exceptions. Pass `NULL` to omit source file information in exceptions.
- `startingLineNumber`: An integer value that specifies the script’s starting line number in the file at `sourceURL`. The system only uses this when reporting exceptions.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

The value that results from evaluating `script`, or `NULL` if the system throws an exception.

## See Also

### Script Evaluation

- [JSCheckScriptSyntax](jscheckscriptsyntax%28__________%29.md): Checks for syntax errors in a string of JavaScript.
- [JSGarbageCollect](jsgarbagecollect%28__%29.md): Performs a JavaScript garbage collection.
