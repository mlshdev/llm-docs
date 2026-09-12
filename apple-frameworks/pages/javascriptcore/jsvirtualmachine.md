> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvirtualmachine](https://developer.apple.com/documentation/javascriptcore/jsvirtualmachine)

# JSVirtualMachine (Swift)

**Framework:** JavaScriptCore  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A self-contained environment for JavaScript execution.

## Declaration

```swift
class JSVirtualMachine
```

<a id="overview"></a>

## Overview

You use this class for two main purposes: to support concurrent JavaScript execution, and to manage memory for objects that bridge between JavaScript and Objective-C or Swift.

<a id="Support-Threading-and-Concurrent-JavaScript-Execution"></a>

### Support Threading and Concurrent JavaScript Execution

Each JavaScript context (a [JSContext](jscontext.md) object) belongs to a virtual machine. Each virtual machine can encompass multiple contexts, allowing values ([JSValue](jsvalue.md) objects) to pass between contexts. However, each virtual machine is distinct—you can’t pass a value that you create in one virtual machine to a context in another virtual machine.

The JavaScriptCore API is thread-safe—for example, you can create [JSValue](jsvalue.md) objects or evaluate scripts from any thread—however, all other threads attempting to use the same virtual machine must wait. To run JavaScript concurrently on multiple threads, use a separate [JSVirtualMachine](jsvirtualmachine.md) instance for each thread.

<a id="Manage-Memory-for-Exported-Objects"></a>

### Manage Memory for Exported Objects

When you export an Objective-C or Swift object to JavaScript, you must not to store JavaScript values in that object. This action creates a retain cycle—[JSValue](jsvalue.md) objects hold strong references to their enclosing JavaScript contexts, and [JSContext](jscontext.md) objects hold strong references to the native objects you export to JavaScript. Instead, use the [JSManagedValue](jsmanagedvalue.md) class to conditionally retain a JavaScript value, and report the native ownership chain for that managed value to the JavaScriptCore virtual machine. Use the [addManagedReference(\_:withOwner:)](jsvirtualmachine/addmanagedreference%28__withowner_%29.md) and [removeManagedReference(\_:withOwner:)](jsvirtualmachine/removemanagedreference%28__withowner_%29.md) methods to describe your native object graph to JavaScriptCore. After you remove the last managed reference for an object, the JavaScript garbage collector can safely destroy that object.

## Topics

### Creating a JavaScript Virtual Machine

- [init()](jsvirtualmachine/init%28%29.md): Initializes a JavaScript virtual machine.

### Managing Memory for Bridged Values

- [addManagedReference(\_:withOwner:)](jsvirtualmachine/addmanagedreference%28__withowner_%29.md): Notifies the JavaScriptCore virtual machine of an external object relationship.
- [removeManagedReference(\_:withOwner:)](jsvirtualmachine/removemanagedreference%28__withowner_%29.md): Notifies the JavaScriptCore virtual machine that a previously registered object relationship no longer exists.

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

- [JSContext](jscontext.md): A JavaScript execution environment.

# JSVirtualMachine (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A self-contained environment for JavaScript execution.

## Declaration

```objectivec
@interface JSVirtualMachine : NSObject
```

<a id="overview"></a>

## Overview

You use this class for two main purposes: to support concurrent JavaScript execution, and to manage memory for objects that bridge between JavaScript and Objective-C or Swift.

<a id="Support-Threading-and-Concurrent-JavaScript-Execution"></a>

### Support Threading and Concurrent JavaScript Execution

Each JavaScript context (a [JSContext](jscontext.md) object) belongs to a virtual machine. Each virtual machine can encompass multiple contexts, allowing values ([JSValue](jsvalue.md) objects) to pass between contexts. However, each virtual machine is distinct—you can’t pass a value that you create in one virtual machine to a context in another virtual machine.

The JavaScriptCore API is thread-safe—for example, you can create [JSValue](jsvalue.md) objects or evaluate scripts from any thread—however, all other threads attempting to use the same virtual machine must wait. To run JavaScript concurrently on multiple threads, use a separate [JSVirtualMachine](jsvirtualmachine.md) instance for each thread.

<a id="Manage-Memory-for-Exported-Objects"></a>

### Manage Memory for Exported Objects

When you export an Objective-C or Swift object to JavaScript, you must not to store JavaScript values in that object. This action creates a retain cycle—[JSValue](jsvalue.md) objects hold strong references to their enclosing JavaScript contexts, and [JSContext](jscontext.md) objects hold strong references to the native objects you export to JavaScript. Instead, use the [JSManagedValue](jsmanagedvalue.md) class to conditionally retain a JavaScript value, and report the native ownership chain for that managed value to the JavaScriptCore virtual machine. Use the [addManagedReference:withOwner:](jsvirtualmachine/addmanagedreference%28__withowner_%29.md) and [removeManagedReference:withOwner:](jsvirtualmachine/removemanagedreference%28__withowner_%29.md) methods to describe your native object graph to JavaScriptCore. After you remove the last managed reference for an object, the JavaScript garbage collector can safely destroy that object.

## Topics

### Creating a JavaScript Virtual Machine

- [init](jsvirtualmachine/init%28%29.md): Initializes a JavaScript virtual machine.

### Managing Memory for Bridged Values

- [addManagedReference:withOwner:](jsvirtualmachine/addmanagedreference%28__withowner_%29.md): Notifies the JavaScriptCore virtual machine of an external object relationship.
- [removeManagedReference:withOwner:](jsvirtualmachine/removemanagedreference%28__withowner_%29.md): Notifies the JavaScriptCore virtual machine that a previously registered object relationship no longer exists.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Execution Environment

- [JSContext](jscontext.md): A JavaScript execution environment.
