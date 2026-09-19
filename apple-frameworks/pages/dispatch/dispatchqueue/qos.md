> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatchqueue/qos

# qos

**Framework:** Dispatch  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS · visionOS · watchOS

The quality-of-service level assgined to the queue.

## Declaration

```swift
var qos: DispatchQoS { get }
```

## See Also

### Managing Queue Attributes

- [label](label.md): The label you assigned to the dispatch queue at creation time.
- [setTarget(queue:)](../dispatchobject/settarget%28queue_%29.md): Specifies the dispatch queue on which to perform work associated with the current object.
