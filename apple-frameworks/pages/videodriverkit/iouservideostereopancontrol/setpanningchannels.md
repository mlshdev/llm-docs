> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostereopancontrol/setpanningchannels](https://developer.apple.com/documentation/videodriverkit/iouservideostereopancontrol/setpanningchannels)

# SetPanningChannels

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the current stereo panning channels.

## Declaration

```objectivec
kern_return_t SetPanningChannels(IOUserVideoObjectPropertyElement in_left_channel, IOUserVideoObjectPropertyElement in_right_channel);
```

## Parameters

- `in_left_channel`: IOUserVideoObjectPropertyElement for the left channel
- `in_right_channel`: IOUserVideoObjectPropertyElement for the right channel

<a id="discussion"></a>

## Discussion

Changing the panning channels will send a notification to the host to update the object state if successful. The object’s work queue synchronizes access to the value.

## See Also

### Accessing the value

- [SetControlValue](setcontrolvalue.md): Sets the current control value.
- [GetControlValue](getcontrolvalue.md): Gets the current value of the control.
- [GetPanningChannels](getpanningchannels.md): Gets the current stereo panning channels.
