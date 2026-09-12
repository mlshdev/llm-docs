> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/setclockisstable](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/setclockisstable)

# SetClockIsStable

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the clock stability of the clock device.

## Declaration

```objectivec
kern_return_t SetClockIsStable(bool in_clock_is_stable);
```

## Parameters

- `in_clock_is_stable`: True if clock is stable. False if clock is unstable.

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Working with clock device behavior

- [SetClockAlgorithm](setclockalgorithm.md): Sets the algorithm for the video clock device.
- [GetClockAlgorithm](getclockalgorithm.md): Gets the clock algorithm of the clock device.
- [IOUserVideoClockAlgorithm](../videodriverkit/iouservideoclockalgorithm.md): Clock smoothing algorithm selectors.
- [GetClockIsStable](getclockisstable.md): Gets a Boolean value for clock stability of the clock device.
