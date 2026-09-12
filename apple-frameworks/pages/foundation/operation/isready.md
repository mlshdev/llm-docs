> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operation/isready](https://developer.apple.com/documentation/foundation/operation/isready)

# isReady (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the operation can be performed now.

## Declaration

```swift
var isReady: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The readiness of operations is determined by their dependencies on other operations and potentially by custom conditions that you define. The `NSOperation` class manages dependencies on other operations and reports the readiness of the receiver based on those dependencies.

If you want to use custom conditions to define the readiness of your operation object, reimplement this property and return a value that accurately reflects the readiness of the receiver. If you do so, your custom implementation must get the default property value from `super` and incorporate that readiness value into the new value of the property. In your custom implementation, you must generate KVO notifications for the `isReady` key path whenever the ready state of your operation object changes. For more information about generating KVO notifications, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## See Also

### Related Documentation

- [dependencies](dependencies.md): An array of the operation objects that must finish executing before the current object can begin executing.

### Getting the Operation Status

- [isCancelled](iscancelled.md): A Boolean value indicating whether the operation has been cancelled
- [isExecuting](isexecuting.md): A Boolean value indicating whether the operation is currently executing.
- [isFinished](isfinished.md): A Boolean value indicating whether the operation has finished executing its task.
- [isConcurrent](isconcurrent.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [isAsynchronous](isasynchronous.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [name](name.md): The name of the operation.

# ready (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the operation can be performed now.

## Declaration

```objectivec
@property (readonly, getter=isReady) BOOL ready;
```

<a id="Discussion"></a>

## Discussion

The readiness of operations is determined by their dependencies on other operations and potentially by custom conditions that you define. The `NSOperation` class manages dependencies on other operations and reports the readiness of the receiver based on those dependencies.

If you want to use custom conditions to define the readiness of your operation object, reimplement this property and return a value that accurately reflects the readiness of the receiver. If you do so, your custom implementation must get the default property value from `super` and incorporate that readiness value into the new value of the property. In your custom implementation, you must generate KVO notifications for the `isReady` key path whenever the ready state of your operation object changes. For more information about generating KVO notifications, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## See Also

### Related Documentation

- [dependencies](dependencies.md): An array of the operation objects that must finish executing before the current object can begin executing.

### Getting the Operation Status

- [cancelled](iscancelled.md): A Boolean value indicating whether the operation has been cancelled
- [executing](isexecuting.md): A Boolean value indicating whether the operation is currently executing.
- [finished](isfinished.md): A Boolean value indicating whether the operation has finished executing its task.
- [concurrent](isconcurrent.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [asynchronous](isasynchronous.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [name](name.md): The name of the operation.
