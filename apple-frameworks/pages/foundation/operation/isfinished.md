> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operation/isfinished](https://developer.apple.com/documentation/foundation/operation/isfinished)

# isFinished (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the operation has finished executing its task.

## Declaration

```swift
var isFinished: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the operation has finished its main task or [false](https://developer.apple.com/documentation/swift/false) if it is executing that task or has not yet started it.

When implementing a concurrent operation object, you must override the implementation of this property so that you can return the finished state of your operation. In your custom implementation, you must generate KVO notifications for the `isFinished` key path whenever the finished state of your operation object changes. For more information about manually generating KVO notifications, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

You do not need to reimplement this property for nonconcurrent operations.

## See Also

### Getting the Operation Status

- [isCancelled](iscancelled.md): A Boolean value indicating whether the operation has been cancelled
- [isExecuting](isexecuting.md): A Boolean value indicating whether the operation is currently executing.
- [isConcurrent](isconcurrent.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [isAsynchronous](isasynchronous.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [isReady](isready.md): A Boolean value indicating whether the operation can be performed now.
- [name](name.md): The name of the operation.

# finished (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the operation has finished executing its task.

## Declaration

```objectivec
@property (readonly, getter=isFinished) BOOL finished;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the operation has finished its main task or [false](https://developer.apple.com/documentation/swift/false) if it is executing that task or has not yet started it.

When implementing a concurrent operation object, you must override the implementation of this property so that you can return the finished state of your operation. In your custom implementation, you must generate KVO notifications for the `isFinished` key path whenever the finished state of your operation object changes. For more information about manually generating KVO notifications, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

You do not need to reimplement this property for nonconcurrent operations.

## See Also

### Getting the Operation Status

- [cancelled](iscancelled.md): A Boolean value indicating whether the operation has been cancelled
- [executing](isexecuting.md): A Boolean value indicating whether the operation is currently executing.
- [concurrent](isconcurrent.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [asynchronous](isasynchronous.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [ready](isready.md): A Boolean value indicating whether the operation can be performed now.
- [name](name.md): The name of the operation.
