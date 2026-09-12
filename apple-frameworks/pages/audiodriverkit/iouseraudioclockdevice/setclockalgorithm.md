> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/setclockalgorithm](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/setclockalgorithm)

# SetClockAlgorithm

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets the clock algorithm of the clock device.

## Declaration

```objectivec
kern_return_t SetClockAlgorithm(IOUserAudioClockAlgorithm in_clock_algorithm);
```

## Parameters

- `in_clock_algorithm`: The clock algorithm to set.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Drivers can change the transport type of the clock device dynamically. If successful, changing the transport type sends a notification to the host to update the object state.

## See Also

### Working with Clock Device Behavior

- [GetClockAlgorithm](getclockalgorithm.md): Gets the clock algorithm of the clock device.
- [IOUserAudioClockAlgorithm](../audiodriverkit/iouseraudioclockalgorithm.md): Values that describe clock-smoothing algorithms.
- [SetClockIsStable](setclockisstable.md): Sets a Boolean value to represent the clock’s stability.
- [GetClockIsStable](getclockisstable.md): Gets a Boolean value that represents the clock’s stability.
