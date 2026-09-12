> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/schedulertimetype/distance(to:)](https://developer.apple.com/documentation/foundation/runloop/schedulertimetype/distance(to:))

# distance(to:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the distance to another run loop scheduler time.

## Declaration

```swift
func distance(to other: RunLoop.SchedulerTimeType) -> RunLoop.SchedulerTimeType.Stride
```

## Parameters

- `other`: Another run loop time.

<a id="return-value"></a>

## Return Value

The time interval between this time and the provided time.

## See Also

### Working with Scheduler Time Intervals

- [RunLoop.SchedulerTimeType.Stride](stride.md): The interval by which run loop times advance.
- [advanced(by:)](advanced%28by_%29.md): Returns a run loop scheduler time calculated by advancing this instance’s time by the given interval.
