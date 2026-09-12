> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/getclockalgorithm](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getclockalgorithm)

# GetClockAlgorithm

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the clock algorithm of the clock device.

## Declaration

```objectivec
IOUserVideoClockAlgorithm GetClockAlgorithm();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Working with clock device behavior

- [SetClockAlgorithm](setclockalgorithm.md): Sets the algorithm for the video clock device.
- [IOUserVideoClockAlgorithm](../videodriverkit/iouservideoclockalgorithm.md): Clock smoothing algorithm selectors.
- [SetClockIsStable](setclockisstable.md): Sets the clock stability of the clock device.
- [GetClockIsStable](getclockisstable.md): Gets a Boolean value for clock stability of the clock device.
