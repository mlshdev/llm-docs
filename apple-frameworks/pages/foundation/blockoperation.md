> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/blockoperation](https://developer.apple.com/documentation/foundation/blockoperation)

# BlockOperation (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An operation that manages the concurrent execution of one or more blocks.

## Declaration

```swift
class BlockOperation
```

<a id="overview"></a>

## Overview

The [BlockOperation](blockoperation.md) class is a concrete subclass of [Operation](operation.md) that manages the concurrent execution of one or more blocks. You can use this object to execute several blocks at once without having to create separate operation objects for each. When executing more than one block, the operation itself is considered finished only when all blocks have finished executing.

Blocks added to a block operation are dispatched with default priority to an appropriate work queue. The blocks themselves should not make any assumptions about the configuration of their execution environment.

For more information about blocks, see [Blocks Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Blocks/Articles/00_Introduction.html#//apple_ref/doc/uid/TP40007502).

## Topics

### Managing the Blocks in the Operation

- [init(block:)](blockoperation/init%28block_%29.md): Creates and returns an `NSBlockOperation` object and adds the specified block to it.
- [addExecutionBlock(\_:)](blockoperation/addexecutionblock%28__%29.md): Adds the specified block to the receiver’s list of blocks to perform.
- [executionBlocks](blockoperation/executionblocks.md): The blocks associated with the receiver.

## Relationships

### Inherits From

- [Operation](operation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Operations

- [OperationQueue](operationqueue.md): A queue that regulates the execution of operations.
- [Operation](operation.md): An abstract class that represents the code and data associated with a single task.

# NSBlockOperation (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An operation that manages the concurrent execution of one or more blocks.

## Declaration

```objectivec
@interface NSBlockOperation : NSOperation
```

<a id="overview"></a>

## Overview

The [NSBlockOperation](blockoperation.md) class is a concrete subclass of [NSOperation](operation.md) that manages the concurrent execution of one or more blocks. You can use this object to execute several blocks at once without having to create separate operation objects for each. When executing more than one block, the operation itself is considered finished only when all blocks have finished executing.

Blocks added to a block operation are dispatched with default priority to an appropriate work queue. The blocks themselves should not make any assumptions about the configuration of their execution environment.

For more information about blocks, see [Blocks Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Blocks/Articles/00_Introduction.html#//apple_ref/doc/uid/TP40007502).

## Topics

### Managing the Blocks in the Operation

- [blockOperationWithBlock:](blockoperation/init%28block_%29.md): Creates and returns an `NSBlockOperation` object and adds the specified block to it.
- [addExecutionBlock:](blockoperation/addexecutionblock%28__%29.md): Adds the specified block to the receiver’s list of blocks to perform.
- [executionBlocks](blockoperation/executionblocks.md): The blocks associated with the receiver.

## Relationships

### Inherits From

- [NSOperation](operation.md)

## See Also

### Operations

- [NSOperationQueue](operationqueue.md): A queue that regulates the execution of operations.
- [NSOperation](operation.md): An abstract class that represents the code and data associated with a single task.
- [NSInvocationOperation](nsinvocationoperation.md): An operation that manages the execution of a single encapsulated task specified as an invocation.
