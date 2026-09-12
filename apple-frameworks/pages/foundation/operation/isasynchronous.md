> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operation/isasynchronous](https://developer.apple.com/documentation/foundation/operation/isasynchronous)

# isAsynchronous (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the operation executes its task asynchronously.

## Declaration

```swift
var isAsynchronous: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) for operations that run asynchronously with respect to the current thread or [false](https://developer.apple.com/documentation/swift/false) for operations that run synchronously on the current thread. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

When implementing an asynchronous operation object, you must implement this property and return [true](https://developer.apple.com/documentation/swift/true). For more information about how to implement an asynchronous operation, see [Asynchronous Versus Synchronous Operations](../operation.md#Asynchronous-Versus-Synchronous-Operations).

## See Also

### Getting the Operation Status

- [isCancelled](iscancelled.md): A Boolean value indicating whether the operation has been cancelled
- [isExecuting](isexecuting.md): A Boolean value indicating whether the operation is currently executing.
- [isFinished](isfinished.md): A Boolean value indicating whether the operation has finished executing its task.
- [isConcurrent](isconcurrent.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [isReady](isready.md): A Boolean value indicating whether the operation can be performed now.
- [name](name.md): The name of the operation.

# asynchronous (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the operation executes its task asynchronously.

## Declaration

```objectivec
@property (readonly, getter=isAsynchronous) BOOL asynchronous;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) for operations that run asynchronously with respect to the current thread or [false](https://developer.apple.com/documentation/swift/false) for operations that run synchronously on the current thread. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

When implementing an asynchronous operation object, you must implement this property and return [true](https://developer.apple.com/documentation/swift/true). For more information about how to implement an asynchronous operation, see [Asynchronous Versus Synchronous Operations](../operation.md#Asynchronous-Versus-Synchronous-Operations).

## See Also

### Getting the Operation Status

- [cancelled](iscancelled.md): A Boolean value indicating whether the operation has been cancelled
- [executing](isexecuting.md): A Boolean value indicating whether the operation is currently executing.
- [finished](isfinished.md): A Boolean value indicating whether the operation has finished executing its task.
- [concurrent](isconcurrent.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [ready](isready.md): A Boolean value indicating whether the operation can be performed now.
- [name](name.md): The name of the operation.
