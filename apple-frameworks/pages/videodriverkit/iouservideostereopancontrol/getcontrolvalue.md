> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostereopancontrol/getcontrolvalue](https://developer.apple.com/documentation/videodriverkit/iouservideostereopancontrol/getcontrolvalue)

# GetControlValue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the current value of the control.

## Declaration

```objectivec
float GetControlValue();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Accessing the value

- [SetControlValue](setcontrolvalue.md): Sets the current control value.
- [SetPanningChannels](setpanningchannels.md): Sets the current stereo panning channels.
- [GetPanningChannels](getpanningchannels.md): Gets the current stereo panning channels.
