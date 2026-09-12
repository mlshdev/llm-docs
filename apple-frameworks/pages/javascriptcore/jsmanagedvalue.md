> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsmanagedvalue](https://developer.apple.com/documentation/javascriptcore/jsmanagedvalue)

# JSManagedValue (Swift)

**Framework:** JavaScriptCore  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A JavaScript value with conditional retain behavior to provide automatic memory management.

## Declaration

```swift
class JSManagedValue
```

<a id="overview"></a>

## Overview

The primary use case for a managed value is to store a JavaScript value in an Objective-C or Swift object that exports to JavaScript.

> **Important**

>  Don’t store a nonmanaged [JSValue](jsvalue.md) object in a native object that exports to JavaScript. Because a [JSValue](jsvalue.md) object references its enclosing [JSContext](jscontext.md) object, this action creates a retain cycle, preventing deallocation of the context.

A managed value’s *conditional retain* behavior ensures retention of its underlying JavaScript value as long as either of the following conditions is true:

- The JavaScript value is reachable through the JavaScript object graph (that is, not subject to JavaScript garbage collection).
- The [JSManagedValue](jsmanagedvalue.md) object is reachable through the Objective-C or Swift object graph, as you report to the JavaScriptCore virtual machine using the [addManagedReference(\_:withOwner:)](jsvirtualmachine/addmanagedreference%28__withowner_%29.md) method.

However, if neither of these conditions is true, the managed value sets its [value](jsmanagedvalue/value.md) property to `nil`, releasing the underlying [JSValue](jsvalue.md) object.

> **Note**

>  On its own, a [JSManagedValue](jsmanagedvalue.md) object behaves similarly to an ARC weak reference to its underlying [JSValue](jsvalue.md) object—that is, if you don’t use the [addManagedReference(\_:withOwner:)](jsvirtualmachine/addmanagedreference%28__withowner_%29.md) method to add conditional retain behavior, the managed value’s [value](jsmanagedvalue/value.md) property automatically becomes `nil` when the JavaScript garbage collector destroys the underlying JavaScript value.

## Topics

### Creating a Managed Value

- [init(value:)](jsmanagedvalue/init%28value_%29.md): Initializes a managed value with the specified JavaScript value.
- [init(value:andOwner:)](jsmanagedvalue/init%28value_andowner_%29.md): Creates a managed value and associates it with an owner.

### Accessing the Managed Value

- [value](jsmanagedvalue/value.md): The managed value’s underlying JavaScript value.

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

### JavaScript Code

- [JSValue](jsvalue.md): A JavaScript value.

# JSManagedValue (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A JavaScript value with conditional retain behavior to provide automatic memory management.

## Declaration

```objectivec
@interface JSManagedValue : NSObject
```

<a id="overview"></a>

## Overview

The primary use case for a managed value is to store a JavaScript value in an Objective-C or Swift object that exports to JavaScript.

> **Important**

>  Don’t store a nonmanaged [JSValue](jsvalue.md) object in a native object that exports to JavaScript. Because a [JSValue](jsvalue.md) object references its enclosing [JSContext](jscontext.md) object, this action creates a retain cycle, preventing deallocation of the context.

A managed value’s *conditional retain* behavior ensures retention of its underlying JavaScript value as long as either of the following conditions is true:

- The JavaScript value is reachable through the JavaScript object graph (that is, not subject to JavaScript garbage collection).
- The [JSManagedValue](jsmanagedvalue.md) object is reachable through the Objective-C or Swift object graph, as you report to the JavaScriptCore virtual machine using the [addManagedReference:withOwner:](jsvirtualmachine/addmanagedreference%28__withowner_%29.md) method.

However, if neither of these conditions is true, the managed value sets its [value](jsmanagedvalue/value.md) property to `nil`, releasing the underlying [JSValue](jsvalue.md) object.

> **Note**

>  On its own, a [JSManagedValue](jsmanagedvalue.md) object behaves similarly to an ARC weak reference to its underlying [JSValue](jsvalue.md) object—that is, if you don’t use the [addManagedReference:withOwner:](jsvirtualmachine/addmanagedreference%28__withowner_%29.md) method to add conditional retain behavior, the managed value’s [value](jsmanagedvalue/value.md) property automatically becomes `nil` when the JavaScript garbage collector destroys the underlying JavaScript value.

## Topics

### Creating a Managed Value

- [initWithValue:](jsmanagedvalue/init%28value_%29.md): Initializes a managed value with the specified JavaScript value.
- [managedValueWithValue:](jsmanagedvalue/managedvaluewithvalue_.md): Creates a managed value with the specified JavaScript value.
- [managedValueWithValue:andOwner:](jsmanagedvalue/init%28value_andowner_%29.md): Creates a managed value and associates it with an owner.

### Accessing the Managed Value

- [value](jsmanagedvalue/value.md): The managed value’s underlying JavaScript value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### JavaScript Code

- [JSValue](jsvalue.md): A JavaScript value.
