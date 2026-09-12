> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/blockoperation/addexecutionblock(_:)](https://developer.apple.com/documentation/foundation/blockoperation/addexecutionblock(_:))

# addExecutionBlock(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the specified block to the receiver’s list of blocks to perform.

## Declaration

```swift
func addExecutionBlock(_ block: @escaping @Sendable () -> Void)
```

## Parameters

- `block`: The block to add to the receiver’s list. The block should take no parameters and have no return value.

<a id="Discussion"></a>

## Discussion

The specified block should not make any assumptions about its execution environment.

Calling this method while the receiver is executing or has already finished causes an `NSInvalidArgumentException` exception to be thrown.

## See Also

### Managing the Blocks in the Operation

- [init(block:)](init%28block_%29.md): Creates and returns an `NSBlockOperation` object and adds the specified block to it.
- [executionBlocks](executionblocks.md): The blocks associated with the receiver.

# addExecutionBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the specified block to the receiver’s list of blocks to perform.

## Declaration

```objectivec
- (void) addExecutionBlock:(void (^)()) block;
```

## Parameters

- `block`: The block to add to the receiver’s list. The block should take no parameters and have no return value.

<a id="Discussion"></a>

## Discussion

The specified block should not make any assumptions about its execution environment.

Calling this method while the receiver is executing or has already finished causes an `NSInvalidArgumentException` exception to be thrown.

## See Also

### Managing the Blocks in the Operation

- [blockOperationWithBlock:](init%28block_%29.md): Creates and returns an `NSBlockOperation` object and adds the specified block to it.
- [executionBlocks](executionblocks.md): The blocks associated with the receiver.
