> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostereopancontrol/setcontrolvalue](https://developer.apple.com/documentation/videodriverkit/iouservideostereopancontrol/setcontrolvalue)

# SetControlValue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the current control value.

## Declaration

```objectivec
kern_return_t SetControlValue(float in_control_value);
```

## Parameters

- `in_control_value`: Float stereo pan value.

<a id="discussion"></a>

## Discussion

Changing the control value will send a notification to the host to update the object state if successful. The object’s work queue synchronizes access to the value.

## See Also

### Accessing the value

- [GetControlValue](getcontrolvalue.md): Gets the current value of the control.
- [SetPanningChannels](setpanningchannels.md): Sets the current stereo panning channels.
- [GetPanningChannels](getpanningchannels.md): Gets the current stereo panning channels.
