> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iotimerdispatchsource/wakeattime](https://developer.apple.com/documentation/driverkit/iotimerdispatchsource/wakeattime)

# WakeAtTime

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Schedules a callback from the timer.

## Declaration

```objectivec
virtual kern_return_t WakeAtTime(uint64_t options, uint64_t deadline, uint64_t leeway);
```

## Parameters

- `options`: The timebase to use when interpreting the `deadline` and `leeway` parameters. For a list of possible values, see [Clock Types](../3242783-clock_types.md).
- `deadline`: The time at which to execute your action. The meaning of this parameter depends on the timebase you specified in the `options` parameter.
- `leeway`: The maximum amount of time beyond the scheduled `deadline` that the system may wait before executing your action. Leeway values improve the system’s power usage by letting the system schedule timers at a more advantageous time. The system guarantees the execution of the timer’s action before the combined `deadline` and `leeway` values expire.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

<a id="Discussion"></a>

## Discussion

Use this method to schedule the execution time for your timer. Call this method from a block running on the same dispatch queue you passed to the [Create](create.md) method. If a previously scheduled timer has not yet fired, calling this method replaces the old time with the new value.

## See Also

### Rescheduling the Timer

- [Clock Types](../3242783-clock_types.md): Clock types to use when configuring a timer.
