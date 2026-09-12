> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webscriptobject/evaluatewebscript(_:)](https://developer.apple.com/documentation/webkit/webscriptobject/evaluatewebscript(_:))

# evaluateWebScript(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the result of evaluating a script in the scripting environment.

## Declaration

```swift
func evaluateWebScript(_ script: String!) -> Any!
```

## Parameters

- `script`: The script to evaluate.

<a id="return-value"></a>

## Return Value

The scripting object. The format of the script is dependent on the target scripting environment. Returns [WebUndefined](../webundefined.md) if an exception is thrown in the JavaScript environment or there is no return value.

## See Also

### Executing scripts

- [callWebScriptMethod(\_:withArguments:)](callwebscriptmethod%28__witharguments_%29.md): Deprecated. Returns the result of executing a method in the scripting environment.

# evaluateWebScript: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the result of evaluating a script in the scripting environment.

## Declaration

```objectivec
- (id) evaluateWebScript:(NSString *) script;
```

## Parameters

- `script`: The script to evaluate.

<a id="return-value"></a>

## Return Value

The scripting object. The format of the script is dependent on the target scripting environment. Returns [WebUndefined](../webundefined.md) if an exception is thrown in the JavaScript environment or there is no return value.

## See Also

### Executing scripts

- [callWebScriptMethod:withArguments:](callwebscriptmethod%28__witharguments_%29.md): Deprecated. Returns the result of executing a method in the scripting environment.
