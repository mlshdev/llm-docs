> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvirtualmachine/init()](https://developer.apple.com/documentation/javascriptcore/jsvirtualmachine/init())

# init() (Swift)

**Framework:** JavaScriptCore  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Initializes a JavaScript virtual machine.

## Declaration

```swift
init!()
```

<a id="return-value"></a>

## Return Value

A new, independent JavaScript virtual machine.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a virtual machine for use with more than one JavaScript context. By default, creating a [JSContext](../jscontext.md) object automatically creates an independent virtual machine—to share a virtual machine between contexts, obtain a [JSVirtualMachine](../jsvirtualmachine.md) instance and then create contexts using the [init(virtualMachine:)](../jscontext/init%28virtualmachine_%29.md) initializer.

# init (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Initializes a JavaScript virtual machine.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

A new, independent JavaScript virtual machine.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a virtual machine for use with more than one JavaScript context. By default, creating a [JSContext](../jscontext.md) object automatically creates an independent virtual machine—to share a virtual machine between contexts, obtain a [JSVirtualMachine](../jsvirtualmachine.md) instance and then create contexts using the [initWithVirtualMachine:](../jscontext/init%28virtualmachine_%29.md) initializer.
