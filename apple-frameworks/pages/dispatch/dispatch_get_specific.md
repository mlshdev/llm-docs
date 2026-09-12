> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_get_specific](https://developer.apple.com/documentation/dispatch/dispatch_get_specific)

# dispatch_get_specific

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the value for the key associated with the current dispatch queue.

## Declaration

```objectivec
extern void *dispatch_get_specific(const void *key);
```

## Parameters

- `key`: The key associated with the dispatch queue on which the current block is executing. Keys are only compared as pointers and never dereferenced. Passing a string constant directly is not recommended.

<a id="return-value"></a>

## Return Value

The context value for the specified key; otherwise `NULL` if the key was not set for the queue (or its target queue) or the queue is a global concurrent queue.

<a id="Discussion"></a>

## Discussion

This function is intended to be called from a block executing in a dispatch queue. You use it to obtain context data associated with the queue. Calling this method from code not running in a dispatch queue returns `NULL` because there is no queue to provide context.

## See Also

### Getting and Setting Contextual Data

- [dispatch_queue_set_specific](dispatch_queue_set_specific.md): Sets the key/value data for the specified dispatch queue.
- [dispatch_queue_get_specific](dispatch_queue_get_specific.md): Gets the value for the key associated with the specified dispatch queue.
