> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webscriptobject/callwebscriptmethod(_:witharguments:)](https://developer.apple.com/documentation/webkit/webscriptobject/callwebscriptmethod(_:witharguments:))

# callWebScriptMethod(\_:withArguments:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the result of executing a method in the scripting environment.

## Declaration

```swift
func callWebScriptMethod(_ name: String!, withArguments arguments: [Any]!) -> Any!
```

## Parameters

- `name`: The name of the method to invoke.
- `arguments`: The values to pass to the method.

<a id="return-value"></a>

## Return Value

The return value of the method. Returns [WebUndefined](../webundefined.md) if an exception is thrown in the JavaScript environment or the method has no return value.

## See Also

### Executing scripts

- [evaluateWebScript(\_:)](evaluatewebscript%28__%29.md): Deprecated. Returns the result of evaluating a script in the scripting environment.

# callWebScriptMethod:withArguments: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the result of executing a method in the scripting environment.

## Declaration

```objectivec
- (id) callWebScriptMethod:(NSString *) name withArguments:(NSArray *) arguments;
```

## Parameters

- `name`: The name of the method to invoke.
- `arguments`: The values to pass to the method.

<a id="return-value"></a>

## Return Value

The return value of the method. Returns [WebUndefined](../webundefined.md) if an exception is thrown in the JavaScript environment or the method has no return value.

## See Also

### Executing scripts

- [evaluateWebScript:](evaluatewebscript%28__%29.md): Deprecated. Returns the result of evaluating a script in the scripting environment.
