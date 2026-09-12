> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/immediatescheduler/schedulertimetype/distance(to:)](https://developer.apple.com/documentation/combine/immediatescheduler/schedulertimetype/distance(to:))

# distance(to:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the distance to another immediate scheduler time; this distance is always `0` in the context of an immediate scheduler.

## Declaration

```swift
func distance(to other: ImmediateScheduler.SchedulerTimeType) -> ImmediateScheduler.SchedulerTimeType.Stride
```

## Parameters

- `other`: The other scheduler time.

<a id="return-value"></a>

## Return Value

`0`, as a `Stride`.

## See Also

### Calculating time offsets

- [advanced(by:)](advanced%28by_%29.md): Advances the time by the specified amount; this is meaningless in the context of an immediate scheduler.
