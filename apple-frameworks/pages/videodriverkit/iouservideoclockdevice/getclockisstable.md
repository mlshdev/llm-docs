> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getclockisstable

# GetClockIsStable

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [SetClockAlgorithm](setclockalgorithm.md): Beta. Sets the algorithm for the video clock device.
- [GetClockAlgorithm](getclockalgorithm.md): Beta. Gets the clock algorithm of the clock device.
- [IOUserVideoClockAlgorithm](../videodriverkit/iouservideoclockalgorithm.md): Beta. Clock smoothing algorithm selectors.
- [SetClockIsStable](setclockisstable.md): Beta. Sets the clock stability of the clock device.
