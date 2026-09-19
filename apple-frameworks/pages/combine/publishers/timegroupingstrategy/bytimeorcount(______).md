> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/timegroupingstrategy/bytimeorcount(_:_:_:)

# Publishers.TimeGroupingStrategy.byTimeOrCount(\_:\_:\_:)

**Framework:** Combine  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A grouping that collects and publishes items periodically or when a buffer reaches a maximum size.

## Declaration

```swift
case byTimeOrCount(Context, Context.SchedulerTimeType.Stride, Int)
```

## See Also

### Time groupings

- [Publishers.TimeGroupingStrategy.byTime(\_:\_:)](bytime%28____%29.md): A grouping that collects and periodically publishes items.
