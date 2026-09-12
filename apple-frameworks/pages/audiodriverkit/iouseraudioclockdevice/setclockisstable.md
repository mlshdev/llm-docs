> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/setclockisstable](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/setclockisstable)

# SetClockIsStable

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets a Boolean value to represent the clock’s stability.

## Declaration

```objectivec
kern_return_t SetClockIsStable(bool in_clock_is_stable);
```

## Parameters

- `in_clock_is_stable`: `true` if the clock is stable; otherwise, `false`.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Working with Clock Device Behavior

- [SetClockAlgorithm](setclockalgorithm.md): Sets the clock algorithm of the clock device.
- [GetClockAlgorithm](getclockalgorithm.md): Gets the clock algorithm of the clock device.
- [IOUserAudioClockAlgorithm](../audiodriverkit/iouseraudioclockalgorithm.md): Values that describe clock-smoothing algorithms.
- [GetClockIsStable](getclockisstable.md): Gets a Boolean value that represents the clock’s stability.
