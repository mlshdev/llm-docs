> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/getclockalgorithm](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/getclockalgorithm)

# GetClockAlgorithm

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the clock algorithm of the clock device.

## Declaration

```objectivec
IOUserAudioClockAlgorithm GetClockAlgorithm();
```

<a id="return-value"></a>

## Return Value

The clock algorithm of the clock device.

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Working with Clock Device Behavior

- [SetClockAlgorithm](setclockalgorithm.md): Sets the clock algorithm of the clock device.
- [IOUserAudioClockAlgorithm](../audiodriverkit/iouseraudioclockalgorithm.md): Values that describe clock-smoothing algorithms.
- [SetClockIsStable](setclockisstable.md): Sets a Boolean value to represent the clock’s stability.
- [GetClockIsStable](getclockisstable.md): Gets a Boolean value that represents the clock’s stability.
