> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscheckscriptsyntax(_:_:_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jscheckscriptsyntax(_:_:_:_:_:))

# JSCheckScriptSyntax(\_:\_:\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Checks for syntax errors in a string of JavaScript.

## Declaration

```swift
func JSCheckScriptSyntax(_ ctx: JSContextRef!, _ script: JSStringRef!, _ sourceURL: JSStringRef!, _ startingLineNumber: Int32, _ exception: UnsafeMutablePointer<JSValueRef?>!) -> Bool
```

## Parameters

- `ctx`: The execution context to use.
- `script`: A [JSStringRef](jsstringref.md) that contains the script to check for syntax errors.
- `sourceURL`: A [JSStringRef](jsstringref.md) that contains a URL for the script’s source file. The system only uses this when reporting exceptions. Pass `NULL` to omit source file information in exceptions.
- `startingLineNumber`: An integer value that specifies the script’s starting line number in the file at `sourceURL`. The system only uses this when reporting exceptions.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store a syntax error exception in, if any. Pass `NULL` to ignore any syntax error exception.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the script is syntactically correct; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Script Evaluation

- [JSEvaluateScript(\_:\_:\_:\_:\_:\_:)](jsevaluatescript%28____________%29.md): Evaluates a string of JavaScript.
- [JSGarbageCollect(\_:)](jsgarbagecollect%28__%29.md): Performs a JavaScript garbage collection.

# JSCheckScriptSyntax (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Checks for syntax errors in a string of JavaScript.

## Declaration

```objectivec
bool JSCheckScriptSyntax(JSContextRef ctx, JSStringRef script, JSStringRef sourceURL, int startingLineNumber, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `script`: A [JSStringRef](jsstringref.md) that contains the script to check for syntax errors.
- `sourceURL`: A [JSStringRef](jsstringref.md) that contains a URL for the script’s source file. The system only uses this when reporting exceptions. Pass `NULL` to omit source file information in exceptions.
- `startingLineNumber`: An integer value that specifies the script’s starting line number in the file at `sourceURL`. The system only uses this when reporting exceptions.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store a syntax error exception in, if any. Pass `NULL` to ignore any syntax error exception.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the script is syntactically correct; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Script Evaluation

- [JSEvaluateScript](jsevaluatescript%28____________%29.md): Evaluates a string of JavaScript.
- [JSGarbageCollect](jsgarbagecollect%28__%29.md): Performs a JavaScript garbage collection.
