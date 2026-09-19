> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getclockalgorithm

# GetClockAlgorithm

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [SetClockAlgorithm](setclockalgorithm.md): Beta. Sets the algorithm for the video clock device.
- [IOUserVideoClockAlgorithm](../videodriverkit/iouservideoclockalgorithm.md): Beta. Clock smoothing algorithm selectors.
- [SetClockIsStable](setclockisstable.md): Beta. Sets the clock stability of the clock device.
- [GetClockIsStable](getclockisstable.md): Beta. Gets a Boolean value for clock stability of the clock device.
