> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/getclockisstable](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/getclockisstable)

# GetClockIsStable

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets a Boolean value that represents the clock’s stability.

## Declaration

```objectivec
bool GetClockIsStable();
```

<a id="return-value"></a>

## Return Value

`true` if the clock is stable; `false` otherwise.

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Working with Clock Device Behavior

- [SetClockAlgorithm](setclockalgorithm.md): Sets the clock algorithm of the clock device.
- [GetClockAlgorithm](getclockalgorithm.md): Gets the clock algorithm of the clock device.
- [IOUserAudioClockAlgorithm](../audiodriverkit/iouseraudioclockalgorithm.md): Values that describe clock-smoothing algorithms.
- [SetClockIsStable](setclockisstable.md): Sets a Boolean value to represent the clock’s stability.
