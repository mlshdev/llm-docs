> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontext/exceptionhandler](https://developer.apple.com/documentation/javascriptcore/jscontext/exceptionhandler)

# exceptionHandler (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A block to be invoked should evaluating a script result in a JavaScript exception being thrown.

## Declaration

```swift
var exceptionHandler: ((JSContext?, JSValue?) -> Void)! { get set }
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- **context**: The context in which the exception originates.
- **exception**: The JavaScript exception thrown.

The default value exception handler block stores its `exception` parameter value into the context’s [exception](exception.md) property. As a consequence, the default behavior is that unhandled exceptions occurring within a callback from JavaScript to native code are thrown again upon return. Setting this value to `nil` results in all uncaught exceptions being silently consumed.

## See Also

### Working with JavaScript global state

- [globalObject](globalobject.md): The JavaScript global object associated with the context.
- [exception](exception.md): A JavaScript exception to be thrown in evaluation of the script.
- [virtualMachine](virtualmachine.md): The JavaScript virtual machine to which the context belongs.
- [name](name.md): A descriptive name for the context.

# exceptionHandler (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A block to be invoked should evaluating a script result in a JavaScript exception being thrown.

## Declaration

```objectivec
@property (copy) void (^exceptionHandler)(JSContext *context, JSValue *exception);
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- **context**: The context in which the exception originates.
- **exception**: The JavaScript exception thrown.

The default value exception handler block stores its `exception` parameter value into the context’s [exception](exception.md) property. As a consequence, the default behavior is that unhandled exceptions occurring within a callback from JavaScript to native code are thrown again upon return. Setting this value to `nil` results in all uncaught exceptions being silently consumed.

## See Also

### Working with JavaScript global state

- [globalObject](globalobject.md): The JavaScript global object associated with the context.
- [exception](exception.md): A JavaScript exception to be thrown in evaluation of the script.
- [virtualMachine](virtualmachine.md): The JavaScript virtual machine to which the context belongs.
- [name](name.md): A descriptive name for the context.
