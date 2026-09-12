> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_current_queue_label](https://developer.apple.com/documentation/dispatch/dispatch_current_queue_label)

# DISPATCH_CURRENT_QUEUE_LABEL

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Pass this constant to the [dispatch_queue_get_label](dispatch_queue_get_label.md) function to retrieve the label of the current queue.

## Declaration

```objectivec
#define DISPATCH_CURRENT_QUEUE_LABEL
```

## See Also

### Managing Queue Attributes

- [dispatch_queue_get_label](dispatch_queue_get_label.md): Returns the label you assigned to the dispatch queue at creation time.
- [dispatch_set_target_queue](dispatchobject/settarget%28queue_%29.md): Specifies the dispatch queue on which to perform work associated with the current object.
