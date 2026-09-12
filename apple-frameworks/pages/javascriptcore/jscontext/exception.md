> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontext/exception](https://developer.apple.com/documentation/javascriptcore/jscontext/exception)

# exception (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A JavaScript exception to be thrown in evaluation of the script.

## Declaration

```swift
var exception: JSValue! { get set }
```

<a id="Discussion"></a>

## Discussion

Before performing a callback from JavaScript to an Objective-C or Swift block or method, the context preserves the prior value of this property and then sets its value to `nil`. After the callback has completed, the context reads the new value of the [exception](exception.md) property—if this value is not nil, the context treats the value as an exception to be thrown in JavaScript as a result of the callback. After reading the property (and possibly throwing a JavaScript exception), the context restores the prior value of this property.

By default, JavaScriptCore assigns any uncaught exception to this property, so you can check this property’s value to find uncaught exceptions arising from JavaScript function calls. To change the exception handling behavior, use the [exceptionHandler](exceptionhandler.md) property.

## See Also

### Working with JavaScript global state

- [globalObject](globalobject.md): The JavaScript global object associated with the context.
- [exceptionHandler](exceptionhandler.md): A block to be invoked should evaluating a script result in a JavaScript exception being thrown.
- [virtualMachine](virtualmachine.md): The JavaScript virtual machine to which the context belongs.
- [name](name.md): A descriptive name for the context.

# exception (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A JavaScript exception to be thrown in evaluation of the script.

## Declaration

```objectivec
@property (strong) JSValue * exception;
```

<a id="Discussion"></a>

## Discussion

Before performing a callback from JavaScript to an Objective-C or Swift block or method, the context preserves the prior value of this property and then sets its value to `nil`. After the callback has completed, the context reads the new value of the [exception](exception.md) property—if this value is not nil, the context treats the value as an exception to be thrown in JavaScript as a result of the callback. After reading the property (and possibly throwing a JavaScript exception), the context restores the prior value of this property.

By default, JavaScriptCore assigns any uncaught exception to this property, so you can check this property’s value to find uncaught exceptions arising from JavaScript function calls. To change the exception handling behavior, use the [exceptionHandler](exceptionhandler.md) property.

## See Also

### Working with JavaScript global state

- [globalObject](globalobject.md): The JavaScript global object associated with the context.
- [exceptionHandler](exceptionhandler.md): A block to be invoked should evaluating a script result in a JavaScript exception being thrown.
- [virtualMachine](virtualmachine.md): The JavaScript virtual machine to which the context belongs.
- [name](name.md): A descriptive name for the context.
