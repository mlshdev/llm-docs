> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/schedulertimetype/advanced(by:)](https://developer.apple.com/documentation/foundation/runloop/schedulertimetype/advanced(by:))

# advanced(by:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a run loop scheduler time calculated by advancing this instance’s time by the given interval.

## Declaration

```swift
func advanced(by n: RunLoop.SchedulerTimeType.Stride) -> RunLoop.SchedulerTimeType
```

## Parameters

- `n`: A time interval to advance.

<a id="return-value"></a>

## Return Value

A dispatch queue time advanced by the given interval from this instance’s time.

## See Also

### Working with Scheduler Time Intervals

- [RunLoop.SchedulerTimeType.Stride](stride.md): The interval by which run loop times advance.
- [distance(to:)](distance%28to_%29.md): Returns the distance to another run loop scheduler time.
