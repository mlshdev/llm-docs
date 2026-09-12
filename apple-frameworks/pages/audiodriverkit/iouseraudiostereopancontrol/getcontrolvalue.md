> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiostereopancontrol/getcontrolvalue](https://developer.apple.com/documentation/audiodriverkit/iouseraudiostereopancontrol/getcontrolvalue)

# GetControlValue

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the floating-point stereo pan value of the control.

## Declaration

```objectivec
float GetControlValue();
```

<a id="return-value"></a>

## Return Value

The floating-point stereo pan value of the control.

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Accessing the Value

- [SetControlValue](setcontrolvalue.md): Sets the stereo pan value of the control.
- [SetPanningChannels](setpanningchannels.md): Sets the current stereo panning channels.
- [GetPanningChannels](getpanningchannels.md): Gets the current stereo panning channels.
