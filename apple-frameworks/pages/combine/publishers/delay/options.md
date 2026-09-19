> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/delay/options

# options

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Options relevant to the scheduler’s behavior.

## Declaration

```swift
let options: Context.SchedulerOptions?
```

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives its elements.
- [interval](interval.md): The amount of time to delay.
- [tolerance](tolerance.md): The allowed tolerance in firing delayed events.
- [scheduler](scheduler.md): The scheduler to deliver the delayed events.
