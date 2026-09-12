> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsgarbagecollect(_:)](https://developer.apple.com/documentation/javascriptcore/jsgarbagecollect(_:))

# JSGarbageCollect(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Performs a JavaScript garbage collection.

## Declaration

```swift
func JSGarbageCollect(_ ctx: JSContextRef!)
```

## Parameters

- `ctx`: The execution context to use.

<a id="Discussion"></a>

## Discussion

The system doesn’t collect JavaScript values that are on the machine stack, are in a register, are receiving protection from [JSValueProtect(\_:\_:)](jsvalueprotect%28____%29.md), are the global object of an execution context, or are reachable from any such value.

During JavaScript execution, you don’t have to call this function because the JavaScript engine collects garbage as necessary. The system automatically destroys JavaScript values within a context group when the last reference to the context group releases.

## See Also

### Script Evaluation

- [JSCheckScriptSyntax(\_:\_:\_:\_:\_:)](jscheckscriptsyntax%28__________%29.md): Checks for syntax errors in a string of JavaScript.
- [JSEvaluateScript(\_:\_:\_:\_:\_:\_:)](jsevaluatescript%28____________%29.md): Evaluates a string of JavaScript.

# JSGarbageCollect (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Performs a JavaScript garbage collection.

## Declaration

```objectivec
void JSGarbageCollect(JSContextRef ctx);
```

## Parameters

- `ctx`: The execution context to use.

<a id="Discussion"></a>

## Discussion

The system doesn’t collect JavaScript values that are on the machine stack, are in a register, are receiving protection from [JSValueProtect](jsvalueprotect%28____%29.md), are the global object of an execution context, or are reachable from any such value.

During JavaScript execution, you don’t have to call this function because the JavaScript engine collects garbage as necessary. The system automatically destroys JavaScript values within a context group when the last reference to the context group releases.

## See Also

### Script Evaluation

- [JSCheckScriptSyntax](jscheckscriptsyntax%28__________%29.md): Checks for syntax errors in a string of JavaScript.
- [JSEvaluateScript](jsevaluatescript%28____________%29.md): Evaluates a string of JavaScript.
