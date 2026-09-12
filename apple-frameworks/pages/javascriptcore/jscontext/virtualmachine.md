> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontext/virtualmachine](https://developer.apple.com/documentation/javascriptcore/jscontext/virtualmachine)

# virtualMachine (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The JavaScript virtual machine to which the context belongs.

## Declaration

```swift
var virtualMachine: JSVirtualMachine! { get }
```

<a id="Discussion"></a>

## Discussion

To create a context associated with a specific virtual machine, allowing JavaScript values to be passed between contexts that share the same virtual machine, use the [init(virtualMachine:)](init%28virtualmachine_%29.md) initializer.

## See Also

### Working with JavaScript global state

- [globalObject](globalobject.md): The JavaScript global object associated with the context.
- [exception](exception.md): A JavaScript exception to be thrown in evaluation of the script.
- [exceptionHandler](exceptionhandler.md): A block to be invoked should evaluating a script result in a JavaScript exception being thrown.
- [name](name.md): A descriptive name for the context.

# virtualMachine (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The JavaScript virtual machine to which the context belongs.

## Declaration

```objectivec
@property (strong, readonly) JSVirtualMachine * virtualMachine;
```

<a id="Discussion"></a>

## Discussion

To create a context associated with a specific virtual machine, allowing JavaScript values to be passed between contexts that share the same virtual machine, use the [initWithVirtualMachine:](init%28virtualmachine_%29.md) initializer.

## See Also

### Working with JavaScript global state

- [globalObject](globalobject.md): The JavaScript global object associated with the context.
- [exception](exception.md): A JavaScript exception to be thrown in evaluation of the script.
- [exceptionHandler](exceptionhandler.md): A block to be invoked should evaluating a script result in a JavaScript exception being thrown.
- [name](name.md): A descriptive name for the context.
