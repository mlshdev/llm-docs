> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_block_testcancel](https://developer.apple.com/documentation/dispatch/dispatch_block_testcancel)

# dispatch_block_testcancel

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Tests whether the given dispatch block has been canceled.

## Declaration

```objectivec
extern intptr_t dispatch_block_testcancel(dispatch_block_t block);
```

## Parameters

- `block`: The dispatch block to test cancel.

  The result of passing `NULL` or a block object not returned by the [dispatch_block_create](dispatch_block_create.md) or [dispatch_block_create_with_qos_class](dispatch_block_create_with_qos_class.md) function is undefined.

<a id="return-value"></a>

## Return Value

Returns a non-zero value if the dispatch block is canceled, otherwise zero.

## See Also

### Canceling a Work Item

- [dispatch_block_cancel](dispatch_block_cancel.md): Cancels the specified dispatch block asynchronously.
