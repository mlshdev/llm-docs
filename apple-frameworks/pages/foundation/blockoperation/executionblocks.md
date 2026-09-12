> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/blockoperation/executionblocks](https://developer.apple.com/documentation/foundation/blockoperation/executionblocks)

# executionBlocks (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The blocks associated with the receiver.

## Declaration

```swift
var executionBlocks: [@Sendable () -> Void] { get }
```

<a id="Discussion"></a>

## Discussion

The blocks in this array are copies of those originally added using the [addExecutionBlock(\_:)](addexecutionblock%28__%29.md) method.

## See Also

### Managing the Blocks in the Operation

- [init(block:)](init%28block_%29.md): Creates and returns an `NSBlockOperation` object and adds the specified block to it.
- [addExecutionBlock(\_:)](addexecutionblock%28__%29.md): Adds the specified block to the receiver’s list of blocks to perform.

# executionBlocks (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The blocks associated with the receiver.

## Declaration

```objectivec
@property (copy, readonly) NSArray<void (^)(void)> * executionBlocks;
```

<a id="Discussion"></a>

## Discussion

The blocks in this array are copies of those originally added using the [addExecutionBlock:](addexecutionblock%28__%29.md) method.

## See Also

### Managing the Blocks in the Operation

- [blockOperationWithBlock:](init%28block_%29.md): Creates and returns an `NSBlockOperation` object and adds the specified block to it.
- [addExecutionBlock:](addexecutionblock%28__%29.md): Adds the specified block to the receiver’s list of blocks to perform.
