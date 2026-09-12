> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_group_async](https://developer.apple.com/documentation/dispatch/dispatch_group_async)

# dispatch_group_async

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Schedules a block asynchronously for execution and simultaneously associates it with the specified dispatch group.

## Declaration

```objectivec
extern void dispatch_group_async(dispatch_group_t group, dispatch_queue_t queue, dispatch_block_t block);
```

## Parameters

- `group`: A dispatch group to associate the submitted block object with. The group is retained by the system until the block has run to completion. This parameter cannot be `NULL`.
- `queue`: The dispatch queue to which the block object is submitted for asynchronous invocation. The queue is retained by the system until the block has run to completion.  This parameter cannot be `NULL`.
- `block`: The block object to perform asynchronously. This function performs a `Block_copy` and `Block_release` on behalf of the caller.

<a id="Discussion"></a>

## Discussion

Submits a block to a dispatch queue and associates the block object with the given dispatch group. The dispatch group can be used to wait for the completion of the block objects it references.

## See Also

### Adding Work to the Group

- [dispatch_group_async_f](dispatch_group_async_f.md): Submits an application-defined function to a dispatch queue and associates it with the specified dispatch group.
