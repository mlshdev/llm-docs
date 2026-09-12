> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/immediatescheduler/schedulertimetype/advanced(by:)](https://developer.apple.com/documentation/combine/immediatescheduler/schedulertimetype/advanced(by:))

# advanced(by:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Advances the time by the specified amount; this is meaningless in the context of an immediate scheduler.

## Declaration

```swift
func advanced(by n: ImmediateScheduler.SchedulerTimeType.Stride) -> ImmediateScheduler.SchedulerTimeType
```

## Parameters

- `n`: The amount to advance by. The `ImmediateScheduler` ignores this value.

<a id="return-value"></a>

## Return Value

An empty `SchedulerTimeType`.

## See Also

### Calculating time offsets

- [distance(to:)](distance%28to_%29.md): Returns the distance to another immediate scheduler time; this distance is always `0` in the context of an immediate scheduler.
