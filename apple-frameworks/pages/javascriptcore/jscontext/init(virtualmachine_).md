> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontext/init(virtualmachine:)](https://developer.apple.com/documentation/javascriptcore/jscontext/init(virtualmachine:))

# init(virtualMachine:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates a new JavaScript context associated with a specific virtual machine.

## Declaration

```swift
init!(virtualMachine: JSVirtualMachine!)
```

## Parameters

- `virtualMachine`: The virtual machine with which to associate the new context.

<a id="return-value"></a>

## Return Value

A new JavaScript context.

<a id="Discussion"></a>

## Discussion

By default, each context has an independent virtual machine (a [JSVirtualMachine](../jsvirtualmachine.md) object). You cannot pass JavaScript values between contexts in different virtual machines. Use this initializer to create a context that shares its virtual machine with other JavaScript contexts to allow passing [JSValue](../jsvalue.md) objects between those contexts.

## See Also

### Creating JavaScript contexts

- [init()](init%28%29.md): Initializes a new JavaScript context.

# initWithVirtualMachine: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates a new JavaScript context associated with a specific virtual machine.

## Declaration

```objectivec
- (instancetype) initWithVirtualMachine:(JSVirtualMachine *) virtualMachine;
```

## Parameters

- `virtualMachine`: The virtual machine with which to associate the new context.

<a id="return-value"></a>

## Return Value

A new JavaScript context.

<a id="Discussion"></a>

## Discussion

By default, each context has an independent virtual machine (a [JSVirtualMachine](../jsvirtualmachine.md) object). You cannot pass JavaScript values between contexts in different virtual machines. Use this initializer to create a context that shares its virtual machine with other JavaScript contexts to allow passing [JSValue](../jsvalue.md) objects between those contexts.

## See Also

### Creating JavaScript contexts

- [init](init%28%29.md): Initializes a new JavaScript context.
