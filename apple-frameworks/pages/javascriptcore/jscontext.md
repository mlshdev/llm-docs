> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontext](https://developer.apple.com/documentation/javascriptcore/jscontext)

# JSContext (Swift)

**Framework:** JavaScriptCore  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A JavaScript execution environment.

## Declaration

```swift
class JSContext
```

<a id="overview"></a>

## Overview

You create and use JavaScript contexts to evaluate JavaScript scripts from Objective-C or Swift code; to access values that JavaScript defines or calculates; and to make native objects, methods, or functions accessible to JavaScript.

## Topics

### Creating JavaScript contexts

- [init()](jscontext/init%28%29.md): Initializes a new JavaScript context.
- [init(virtualMachine:)](jscontext/init%28virtualmachine_%29.md): Creates a new JavaScript context associated with a specific virtual machine.

### Making JavaScript context inspectable

- [isInspectable](jscontext/isinspectable.md): A Boolean value that indicates whether you can inspect the JavaScript context with Safari Web Inspector.

### Evaluating scripts

- [evaluateScript(\_:)](jscontext/evaluatescript%28__%29.md): Executes the specified JavaScript code.
- [evaluateScript(\_:withSourceURL:)](jscontext/evaluatescript%28__withsourceurl_%29.md): Executes the specified JavaScript code, treating the specified URL as its source location.

### Inspecting callback state in a running context

- [current()](jscontext/current%28%29.md): Returns the context currently executing JavaScript code.
- [currentCallee()](jscontext/currentcallee%28%29.md): Returns the currently executing JavaScript function.
- [currentThis()](jscontext/currentthis%28%29.md): Returns the value of the `this` keyword in currently executing JavaScript code.
- [currentArguments()](jscontext/currentarguments%28%29.md): Returns the arguments to the current native callback from JavaScript code.

### Working with JavaScript global state

- [globalObject](jscontext/globalobject.md): The JavaScript global object associated with the context.
- [exception](jscontext/exception.md): A JavaScript exception to be thrown in evaluation of the script.
- [exceptionHandler](jscontext/exceptionhandler.md): A block to be invoked should evaluating a script result in a JavaScript exception being thrown.
- [virtualMachine](jscontext/virtualmachine.md): The JavaScript virtual machine to which the context belongs.
- [name](jscontext/name.md): A descriptive name for the context.

### Accessing JavaScript global state with subscripts

- [objectForKeyedSubscript(\_:)](jscontext/objectforkeyedsubscript%28__%29.md): Returns the value of the specified JavaScript property in the context’s global object, allowing subscript getter syntax.
- [setObject(\_:forKeyedSubscript:)](jscontext/setobject%28__forkeyedsubscript_%29.md): Sets the specified JavaScript property of the context’s global object, allowing subscript setter syntax.

### Working with the C JavaScriptCore API

- [jsGlobalContextRef](jscontext/jsglobalcontextref.md): Returns the C representation of the JavaScript context.
- [init(JSGlobalContextRef:)](jscontext/init%28jsglobalcontextref_%29-9m51.md): Creates a JavaScript context object from the equivalent C representation.

### Initializers

- [init(jsGlobalContextRef:)](jscontext/init%28jsglobalcontextref_%29-1hstm.md)

### Default Implementations

- [JSContext Implementations](jscontext/jscontext-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Execution Environment

- [JSVirtualMachine](jsvirtualmachine.md): A self-contained environment for JavaScript execution.

# JSContext (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A JavaScript execution environment.

## Declaration

```objectivec
@interface JSContext : NSObject
```

<a id="overview"></a>

## Overview

You create and use JavaScript contexts to evaluate JavaScript scripts from Objective-C or Swift code; to access values that JavaScript defines or calculates; and to make native objects, methods, or functions accessible to JavaScript.

## Topics

### Creating JavaScript contexts

- [init](jscontext/init%28%29.md): Initializes a new JavaScript context.
- [initWithVirtualMachine:](jscontext/init%28virtualmachine_%29.md): Creates a new JavaScript context associated with a specific virtual machine.

### Making JavaScript context inspectable

- [inspectable](jscontext/isinspectable.md): A Boolean value that indicates whether you can inspect the JavaScript context with Safari Web Inspector.

### Evaluating scripts

- [evaluateScript:](jscontext/evaluatescript%28__%29.md): Executes the specified JavaScript code.
- [evaluateScript:withSourceURL:](jscontext/evaluatescript%28__withsourceurl_%29.md): Executes the specified JavaScript code, treating the specified URL as its source location.

### Inspecting callback state in a running context

- [currentContext](jscontext/current%28%29.md): Returns the context currently executing JavaScript code.
- [currentCallee](jscontext/currentcallee%28%29.md): Returns the currently executing JavaScript function.
- [currentThis](jscontext/currentthis%28%29.md): Returns the value of the `this` keyword in currently executing JavaScript code.
- [currentArguments](jscontext/currentarguments%28%29.md): Returns the arguments to the current native callback from JavaScript code.

### Working with JavaScript global state

- [globalObject](jscontext/globalobject.md): The JavaScript global object associated with the context.
- [exception](jscontext/exception.md): A JavaScript exception to be thrown in evaluation of the script.
- [exceptionHandler](jscontext/exceptionhandler.md): A block to be invoked should evaluating a script result in a JavaScript exception being thrown.
- [virtualMachine](jscontext/virtualmachine.md): The JavaScript virtual machine to which the context belongs.
- [name](jscontext/name.md): A descriptive name for the context.

### Accessing JavaScript global state with subscripts

- [objectForKeyedSubscript:](jscontext/objectforkeyedsubscript%28__%29.md): Returns the value of the specified JavaScript property in the context’s global object, allowing subscript getter syntax.
- [setObject:forKeyedSubscript:](jscontext/setobject%28__forkeyedsubscript_%29.md): Sets the specified JavaScript property of the context’s global object, allowing subscript setter syntax.

### Working with the C JavaScriptCore API

- [JSGlobalContextRef](jscontext/jsglobalcontextref.md): Returns the C representation of the JavaScript context.

### Type Methods

- [contextWithJSGlobalContextRef:](jscontext/init%28jsglobalcontextref_%29-1hstm.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Execution Environment

- [JSVirtualMachine](jsvirtualmachine.md): A self-contained environment for JavaScript execution.
