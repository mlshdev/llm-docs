> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/setclockalgorithm](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/setclockalgorithm)

# SetClockAlgorithm

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the algorithm for the video clock device.

## Declaration

```objectivec
kern_return_t SetClockAlgorithm(IOUserVideoClockAlgorithm in_clock_algorithm);
```

## Parameters

- `in_clock_algorithm`: The IOUserVideoClockAlgorithm value to set.

<a id="return-value"></a>

## Return Value

A kern_return_t value indicating success or failure.

<a id="discussion"></a>

## Discussion

Drivers can change the clock algorithm of the clock device dynamically. If successful, the clock device sends a notification to the host to update the object state.

## See Also

### Working with clock device behavior

- [GetClockAlgorithm](getclockalgorithm.md): Gets the clock algorithm of the clock device.
- [IOUserVideoClockAlgorithm](../videodriverkit/iouservideoclockalgorithm.md): Clock smoothing algorithm selectors.
- [SetClockIsStable](setclockisstable.md): Sets the clock stability of the clock device.
- [GetClockIsStable](getclockisstable.md): Gets a Boolean value for clock stability of the clock device.
