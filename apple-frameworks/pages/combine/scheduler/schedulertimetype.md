> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/scheduler/schedulertimetype

# SchedulerTimeType

**Framework:** Combine  
**Kind:** Associated Type  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Describes an instant in time for this scheduler.

## Declaration

```swift
associatedtype SchedulerTimeType : Strideable where Self.SchedulerTimeType.Stride : SchedulerTimeIntervalConvertible
```

## See Also

### Declaring scheduler timekeeping and options

- [SchedulerOptions](scheduleroptions.md): A type that defines options accepted by the scheduler.
