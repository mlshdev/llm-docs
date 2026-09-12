> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operation/iscancelled](https://developer.apple.com/documentation/foundation/operation/iscancelled)

# isCancelled (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the operation has been cancelled

## Declaration

```swift
var isCancelled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Calling the [cancel()](cancel%28%29.md) method of this object sets the value of this property to [true](https://developer.apple.com/documentation/swift/true). Once canceled, an operation must move to the finished state.

Canceling an operation does not actively stop the receiver’s code from executing. An operation object is responsible for calling this method periodically and stopping itself if the method returns [true](https://developer.apple.com/documentation/swift/true).

You should always check the value of this property before doing any work towards accomplishing the operation’s task, which typically means checking it at the beginning of your custom [main()](main%28%29.md) method. It is possible for an operation to be cancelled before it begins executing or at any time while it is executing. Therefore, checking the value at the beginning of your [main()](main%28%29.md) method (and periodically throughout that method) lets you exit as quickly as possible when an operation is cancelled.

## See Also

### Related Documentation

- [cancel()](cancel%28%29.md): Advises the operation object that it should stop executing its task.

### Getting the Operation Status

- [isExecuting](isexecuting.md): A Boolean value indicating whether the operation is currently executing.
- [isFinished](isfinished.md): A Boolean value indicating whether the operation has finished executing its task.
- [isConcurrent](isconcurrent.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [isAsynchronous](isasynchronous.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [isReady](isready.md): A Boolean value indicating whether the operation can be performed now.
- [name](name.md): The name of the operation.

# cancelled (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the operation has been cancelled

## Declaration

```objectivec
@property (readonly, getter=isCancelled) BOOL cancelled;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Calling the [cancel](cancel%28%29.md) method of this object sets the value of this property to [true](https://developer.apple.com/documentation/swift/true). Once canceled, an operation must move to the finished state.

Canceling an operation does not actively stop the receiver’s code from executing. An operation object is responsible for calling this method periodically and stopping itself if the method returns [true](https://developer.apple.com/documentation/swift/true).

You should always check the value of this property before doing any work towards accomplishing the operation’s task, which typically means checking it at the beginning of your custom [main](main%28%29.md) method. It is possible for an operation to be cancelled before it begins executing or at any time while it is executing. Therefore, checking the value at the beginning of your [main](main%28%29.md) method (and periodically throughout that method) lets you exit as quickly as possible when an operation is cancelled.

## See Also

### Related Documentation

- [cancel](cancel%28%29.md): Advises the operation object that it should stop executing its task.

### Getting the Operation Status

- [executing](isexecuting.md): A Boolean value indicating whether the operation is currently executing.
- [finished](isfinished.md): A Boolean value indicating whether the operation has finished executing its task.
- [concurrent](isconcurrent.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [asynchronous](isasynchronous.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [ready](isready.md): A Boolean value indicating whether the operation can be performed now.
- [name](name.md): The name of the operation.
