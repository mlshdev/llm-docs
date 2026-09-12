> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/invokeundefinedmethod(fromwebscript:witharguments:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/invokeundefinedmethod(fromwebscript:witharguments:))

# invokeUndefinedMethod(fromWebScript:withArguments:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Handles undefined method invocation from the scripting environment.

## Declaration

```swift
func invokeUndefinedMethod(fromWebScript name: String!, withArguments arguments: [Any]!) -> Any!
```

## Parameters

- `name`: The name of the undefined method.
- `arguments`: The arguments passed to the undefined method.

<a id="return-value"></a>

## Return Value

The result of invoking the undefined method.

<a id="Discussion"></a>

## Discussion

This method is invoked when a script attempts to invoke a method not directly exported to the scripting environment. You should return the result of the invocation, converted appropriately for the scripting environment.

## See Also

### Invoking methods

- [invokeDefaultMethod(withArguments:)](invokedefaultmethod%28witharguments_%29.md): Executes when a script attempts to invoke a method on an exposed object directly.

# invokeUndefinedMethodFromWebScript:withArguments: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Handles undefined method invocation from the scripting environment.

## Declaration

```objectivec
- (id) invokeUndefinedMethodFromWebScript:(NSString *) name withArguments:(NSArray *) arguments;
```

## Parameters

- `name`: The name of the undefined method.
- `arguments`: The arguments passed to the undefined method.

<a id="return-value"></a>

## Return Value

The result of invoking the undefined method.

<a id="Discussion"></a>

## Discussion

This method is invoked when a script attempts to invoke a method not directly exported to the scripting environment. You should return the result of the invocation, converted appropriately for the scripting environment.

## See Also

### Invoking methods

- [invokeDefaultMethodWithArguments:](invokedefaultmethod%28witharguments_%29.md): Executes when a script attempts to invoke a method on an exposed object directly.
