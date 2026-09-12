> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operation/name](https://developer.apple.com/documentation/foundation/operation/name)

# name (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the operation.

## Declaration

```swift
var name: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Assign a name to the operation object to help identify it during debugging.

## See Also

### Getting the Operation Status

- [isCancelled](iscancelled.md): A Boolean value indicating whether the operation has been cancelled
- [isExecuting](isexecuting.md): A Boolean value indicating whether the operation is currently executing.
- [isFinished](isfinished.md): A Boolean value indicating whether the operation has finished executing its task.
- [isConcurrent](isconcurrent.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [isAsynchronous](isasynchronous.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [isReady](isready.md): A Boolean value indicating whether the operation can be performed now.

# name (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the operation.

## Declaration

```objectivec
@property (copy, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

Assign a name to the operation object to help identify it during debugging.

## See Also

### Getting the Operation Status

- [cancelled](iscancelled.md): A Boolean value indicating whether the operation has been cancelled
- [executing](isexecuting.md): A Boolean value indicating whether the operation is currently executing.
- [finished](isfinished.md): A Boolean value indicating whether the operation has finished executing its task.
- [concurrent](isconcurrent.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [asynchronous](isasynchronous.md): A Boolean value indicating whether the operation executes its task asynchronously.
- [ready](isready.md): A Boolean value indicating whether the operation can be performed now.
