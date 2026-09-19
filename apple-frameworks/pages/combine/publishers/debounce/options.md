> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/debounce/options

# options

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Scheduler options that customize this publisher’s delivery of elements.

## Declaration

```swift
let options: Context.SchedulerOptions?
```

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives elements.
- [dueTime](duetime.md): The amount of time the publisher should wait before publishing an element.
- [scheduler](scheduler.md): The scheduler on which this publisher delivers elements.
