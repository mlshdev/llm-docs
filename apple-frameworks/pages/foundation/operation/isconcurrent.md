> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operation/isconcurrent](https://developer.apple.com/documentation/foundation/operation/isconcurrent)

# isConcurrent (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the operation executes its task asynchronously.

## Declaration

```swift
var isConcurrent: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Use the [isAsynchronous](isasynchronous.md) property instead.

The value of this property is [true](https://developer.apple.com/documentation/swift/true) for operations that run asynchronously with respect to the current thread or [false](https://developer.apple.com/documentation/swift/false) for operations that run synchronously on the current thread. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

In macOS 10.6 and later, operation queues ignore the value in this property and always start operations on a separate thread.

## See Also

### Getting the Operation Status

- [isCancelled](iscancelled.md): A Boolean value indicating whether the operation has been cancelled
- [isExecuting](isexecuting.md): A Boolean value indicating whether the operation is currently executing.
- [isFinished](isfinished.md): A Boolean value indicating whether the operation has finished executing its task.
- [isAsynchronous](isasynchronous.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [isReady](isready.md): A Boolean value indicating whether the operation can be performed now.
- [name](name.md): The name of the operation.

# concurrent (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the operation executes its task asynchronously.

## Declaration

```objectivec
@property (readonly, getter=isConcurrent) BOOL concurrent;
```

<a id="Discussion"></a>

## Discussion

Use the [asynchronous](isasynchronous.md) property instead.

The value of this property is [true](https://developer.apple.com/documentation/swift/true) for operations that run asynchronously with respect to the current thread or [false](https://developer.apple.com/documentation/swift/false) for operations that run synchronously on the current thread. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

In macOS 10.6 and later, operation queues ignore the value in this property and always start operations on a separate thread.

## See Also

### Getting the Operation Status

- [cancelled](iscancelled.md): A Boolean value indicating whether the operation has been cancelled
- [executing](isexecuting.md): A Boolean value indicating whether the operation is currently executing.
- [finished](isfinished.md): A Boolean value indicating whether the operation has finished executing its task.
- [asynchronous](isasynchronous.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [ready](isready.md): A Boolean value indicating whether the operation can be performed now.
- [name](name.md): The name of the operation.
