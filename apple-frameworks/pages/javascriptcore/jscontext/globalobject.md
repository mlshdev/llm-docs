> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontext/globalobject](https://developer.apple.com/documentation/javascriptcore/jscontext/globalobject)

# globalObject (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The JavaScript global object associated with the context.

## Declaration

```swift
var globalObject: JSValue! { get }
```

<a id="Discussion"></a>

## Discussion

In a web browser, the global object of a JavaScript context is the browser window (the `window` object in JavaScript). Outside of web-browser use, a context’s global object serves a similar role, separating the JavaScript namespaces of different contexts. Global variables within a script appear as fields or subscripts in the global object—you can access them either through this [JSValue](../jsvalue.md) object or through the methods listed in the Accessing JavaScript global state with subscripts section in [JSContext](../jscontext.md).

> **Note**

>  For [JSContext](../jscontext.md) instances originating in WebKit, this method returns a reference to the `WindowProxy` object.

## See Also

### Working with JavaScript global state

- [exception](exception.md): A JavaScript exception to be thrown in evaluation of the script.
- [exceptionHandler](exceptionhandler.md): A block to be invoked should evaluating a script result in a JavaScript exception being thrown.
- [virtualMachine](virtualmachine.md): The JavaScript virtual machine to which the context belongs.
- [name](name.md): A descriptive name for the context.

# globalObject (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The JavaScript global object associated with the context.

## Declaration

```objectivec
@property (strong, readonly) JSValue * globalObject;
```

<a id="Discussion"></a>

## Discussion

In a web browser, the global object of a JavaScript context is the browser window (the `window` object in JavaScript). Outside of web-browser use, a context’s global object serves a similar role, separating the JavaScript namespaces of different contexts. Global variables within a script appear as fields or subscripts in the global object—you can access them either through this [JSValue](../jsvalue.md) object or through the methods listed in the Accessing JavaScript global state with subscripts section in [JSContext](../jscontext.md).

> **Note**

>  For [JSContext](../jscontext.md) instances originating in WebKit, this method returns a reference to the `WindowProxy` object.

## See Also

### Working with JavaScript global state

- [exception](exception.md): A JavaScript exception to be thrown in evaluation of the script.
- [exceptionHandler](exceptionhandler.md): A block to be invoked should evaluating a script result in a JavaScript exception being thrown.
- [virtualMachine](virtualmachine.md): The JavaScript virtual machine to which the context belongs.
- [name](name.md): A descriptive name for the context.
