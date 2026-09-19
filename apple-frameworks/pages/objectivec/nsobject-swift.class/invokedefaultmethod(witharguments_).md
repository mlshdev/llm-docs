> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/nsobject-swift.class/invokedefaultmethod(witharguments:)

# invokeDefaultMethod(withArguments:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Executes when a script attempts to invoke a method on an exposed object directly.

## Declaration

```swift
func invokeDefaultMethod(withArguments arguments: [Any]!) -> Any!
```

## Parameters

- `arguments`: The arguments to be passed to the default method.

<a id="return-value"></a>

## Return Value

The result of invoking the default method.

## See Also

### Invoking methods

- [invokeUndefinedMethod(fromWebScript:withArguments:)](invokeundefinedmethod%28fromwebscript_witharguments_%29.md): Handles undefined method invocation from the scripting environment.

# invokeDefaultMethodWithArguments: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Executes when a script attempts to invoke a method on an exposed object directly.

## Declaration

```objectivec
- (id) invokeDefaultMethodWithArguments:(NSArray *) arguments;
```

## Parameters

- `arguments`: The arguments to be passed to the default method.

<a id="return-value"></a>

## Return Value

The result of invoking the default method.

## See Also

### Invoking methods

- [invokeUndefinedMethodFromWebScript:withArguments:](invokeundefinedmethod%28fromwebscript_witharguments_%29.md): Handles undefined method invocation from the scripting environment.
