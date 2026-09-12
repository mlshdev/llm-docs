> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/getclockisstable](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getclockisstable)

# GetClockIsStable

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets a Boolean value for clock stability of the clock device.

## Declaration

```objectivec
bool GetClockIsStable();
```

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the clock is stable.

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to this value.

## See Also

### Working with clock device behavior

- [SetClockAlgorithm](setclockalgorithm.md): Sets the algorithm for the video clock device.
- [GetClockAlgorithm](getclockalgorithm.md): Gets the clock algorithm of the clock device.
- [IOUserVideoClockAlgorithm](../videodriverkit/iouservideoclockalgorithm.md): Clock smoothing algorithm selectors.
- [SetClockIsStable](setclockisstable.md): Sets the clock stability of the clock device.
