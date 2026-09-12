> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/blockoperation/init(block:)](https://developer.apple.com/documentation/foundation/blockoperation/init(block:))

# init(block:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an `NSBlockOperation` object and adds the specified block to it.

## Declaration

```swift
convenience init(block: @escaping @Sendable () -> Void)
```

## Parameters

- `block`: The block to add to the new block operation object’s list. The block should take no parameters and have no return value.

<a id="return-value"></a>

## Return Value

A new block operation object.

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)

### Managing the Blocks in the Operation

- [addExecutionBlock(\_:)](addexecutionblock%28__%29.md): Adds the specified block to the receiver’s list of blocks to perform.
- [executionBlocks](executionblocks.md): The blocks associated with the receiver.

# blockOperationWithBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an `NSBlockOperation` object and adds the specified block to it.

## Declaration

```objectivec
+ (instancetype) blockOperationWithBlock:(void (^)()) block;
```

## Parameters

- `block`: The block to add to the new block operation object’s list. The block should take no parameters and have no return value.

<a id="return-value"></a>

## Return Value

A new block operation object.

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)

### Managing the Blocks in the Operation

- [addExecutionBlock:](addexecutionblock%28__%29.md): Adds the specified block to the receiver’s list of blocks to perform.
- [executionBlocks](executionblocks.md): The blocks associated with the receiver.
