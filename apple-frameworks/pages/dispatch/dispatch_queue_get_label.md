> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_queue_get_label](https://developer.apple.com/documentation/dispatch/dispatch_queue_get_label)

# dispatch_queue_get_label

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the label you assigned to the dispatch queue at creation time.

## Declaration

```objectivec
extern const char *dispatch_queue_get_label(dispatch_queue_t queue);
```

## Parameters

- `queue`: The dispatch queue from which to get the label. Specify [DISPATCH_CURRENT_QUEUE_LABEL](dispatch_current_queue_label.md) to retrieve the label of the current queue.

<a id="return-value"></a>

## Return Value

The label of the queue, or `NULL` if the queue was not provided a label during initialization.

## See Also

### Managing Queue Attributes

- [DISPATCH_CURRENT_QUEUE_LABEL](dispatch_current_queue_label.md): Pass this constant to the [dispatch_queue_get_label](dispatch_queue_get_label.md) function to retrieve the label of the current queue.
- [dispatch_set_target_queue](dispatchobject/settarget%28queue_%29.md): Specifies the dispatch queue on which to perform work associated with the current object.
