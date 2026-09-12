> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_block_perform](https://developer.apple.com/documentation/dispatch/dispatch_block_perform)

# dispatch_block_perform

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates, synchronously executes, and releases a dispatch block from the specified block and flags.

## Declaration

```objectivec
extern void dispatch_block_perform(dispatch_block_flags_t flags, dispatch_block_t block);
```

## Parameters

- `flags`: Configuration flags for the block object. For possible values, see [dispatch_block_flags_t](dispatch_block_flags_t.md).

  Passing a value that is not a bitwise OR of valid flags results in `NULL` being returned.
- `block`: The block to create the dispatch block from.

<a id="Discussion"></a>

## Discussion

This function is equivalent to the following code:

```objc
dispatch_block_t b = dispatch_block_create(flags, block);
b();
Block_release(b);
```

This functionality may be implemented more efficiently internally by not requiring a copy to the heap of the specified block or the allocation of a new block object.
