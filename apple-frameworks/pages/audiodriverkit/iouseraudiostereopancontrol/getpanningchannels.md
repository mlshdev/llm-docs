> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiostereopancontrol/getpanningchannels](https://developer.apple.com/documentation/audiodriverkit/iouseraudiostereopancontrol/getpanningchannels)

# GetPanningChannels

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the current stereo panning channels.

## Declaration

```objectivec
void GetPanningChannels(IOUserAudioObjectPropertyElement *out_left_channel, IOUserAudioObjectPropertyElement *out_right_channel);
```

## Parameters

- `out_left_channel`: On return, the [IOUserAudioObjectPropertyElement](../audiodriverkit/iouseraudioobjectpropertyelement.md) for the left channel.
- `out_right_channel`: On return, the [IOUserAudioObjectPropertyElement](../audiodriverkit/iouseraudioobjectpropertyelement.md) for the right channel.

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Accessing the Value

- [SetControlValue](setcontrolvalue.md): Sets the stereo pan value of the control.
- [GetControlValue](getcontrolvalue.md): Gets the floating-point stereo pan value of the control.
- [SetPanningChannels](setpanningchannels.md): Sets the current stereo panning channels.
