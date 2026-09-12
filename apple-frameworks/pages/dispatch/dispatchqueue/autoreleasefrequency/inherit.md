> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/autoreleasefrequency/inherit](https://developer.apple.com/documentation/dispatch/dispatchqueue/autoreleasefrequency/inherit)

# DispatchQueue.AutoreleaseFrequency.inherit

**Framework:** Dispatch  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The queue inherits its autorelease frequency from its target queue.

## Declaration

```swift
case inherit
```

<a id="Discussion"></a>

## Discussion

This option is the default behavior for queues you create.

## See Also

### Autorelease Frequencies

- [DispatchQueue.AutoreleaseFrequency.workItem](workitem.md): The queue configures an autorelease pool before the execution of a block, and releases the objects in that pool after the block finishes executing.
- [DispatchQueue.AutoreleaseFrequency.never](never.md): The queue does not set up an autorelease pool around executed blocks.
