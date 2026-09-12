> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontext/init()](https://developer.apple.com/documentation/javascriptcore/jscontext/init())

# init() (Swift)

**Framework:** JavaScriptCore  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Initializes a new JavaScript context.

## Declaration

```swift
init!()
```

<a id="return-value"></a>

## Return Value

A new JavaScript context.

<a id="Discussion"></a>

## Discussion

This initializer creates a context along with a new, independent virtual machine (a [JSVirtualMachine](../jsvirtualmachine.md) object). You cannot pass JavaScript values ([JSValue](../jsvalue.md) objects) between contexts in different virtual machines. To create contexts that share a virtual machine, use the [init(virtualMachine:)](init%28virtualmachine_%29.md) initializer.

## See Also

### Creating JavaScript contexts

- [init(virtualMachine:)](init%28virtualmachine_%29.md): Creates a new JavaScript context associated with a specific virtual machine.

# init (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Initializes a new JavaScript context.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

A new JavaScript context.

<a id="Discussion"></a>

## Discussion

This initializer creates a context along with a new, independent virtual machine (a [JSVirtualMachine](../jsvirtualmachine.md) object). You cannot pass JavaScript values ([JSValue](../jsvalue.md) objects) between contexts in different virtual machines. To create contexts that share a virtual machine, use the [initWithVirtualMachine:](init%28virtualmachine_%29.md) initializer.

## See Also

### Creating JavaScript contexts

- [initWithVirtualMachine:](init%28virtualmachine_%29.md): Creates a new JavaScript context associated with a specific virtual machine.
