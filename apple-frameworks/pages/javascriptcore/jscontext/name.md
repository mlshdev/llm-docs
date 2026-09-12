> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontext/name](https://developer.apple.com/documentation/javascriptcore/jscontext/name)

# name (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A descriptive name for the context.

## Declaration

```swift
var name: String! { get set }
```

<a id="Discussion"></a>

## Discussion

This name appears when using remote debugging to examine the context.

## See Also

### Working with JavaScript global state

- [globalObject](globalobject.md): The JavaScript global object associated with the context.
- [exception](exception.md): A JavaScript exception to be thrown in evaluation of the script.
- [exceptionHandler](exceptionhandler.md): A block to be invoked should evaluating a script result in a JavaScript exception being thrown.
- [virtualMachine](virtualmachine.md): The JavaScript virtual machine to which the context belongs.

# name (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A descriptive name for the context.

## Declaration

```objectivec
@property (copy) NSString * name;
```

<a id="Discussion"></a>

## Discussion

This name appears when using remote debugging to examine the context.

## See Also

### Working with JavaScript global state

- [globalObject](globalobject.md): The JavaScript global object associated with the context.
- [exception](exception.md): A JavaScript exception to be thrown in evaluation of the script.
- [exceptionHandler](exceptionhandler.md): A block to be invoked should evaluating a script result in a JavaScript exception being thrown.
- [virtualMachine](virtualmachine.md): The JavaScript virtual machine to which the context belongs.
