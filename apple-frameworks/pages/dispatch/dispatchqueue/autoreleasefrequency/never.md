> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/autoreleasefrequency/never](https://developer.apple.com/documentation/dispatch/dispatchqueue/autoreleasefrequency/never)

# DispatchQueue.AutoreleaseFrequency.never

**Framework:** Dispatch  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+

The queue does not set up an autorelease pool around executed blocks.

## Declaration

```swift
case never
```

<a id="Discussion"></a>

## Discussion

This option is the default behavior for the system-defined global queues.

## See Also

### Autorelease Frequencies

- [DispatchQueue.AutoreleaseFrequency.inherit](inherit.md): The queue inherits its autorelease frequency from its target queue.
- [DispatchQueue.AutoreleaseFrequency.workItem](workitem.md): The queue configures an autorelease pool before the execution of a block, and releases the objects in that pool after the block finishes executing.
