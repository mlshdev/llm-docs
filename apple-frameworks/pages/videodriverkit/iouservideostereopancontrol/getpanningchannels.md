> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostereopancontrol/getpanningchannels

# GetPanningChannels

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Gets the current stereo panning channels.

## Declaration

```objectivec
void GetPanningChannels(IOUserVideoObjectPropertyElement *out_left_channel, IOUserVideoObjectPropertyElement *out_right_channel);
```

## Parameters

- `out_left_channel`: IOUserVideoObjectPropertyElement for the left channel.
- `out_right_channel`: IOUserVideoObjectPropertyElement for the right channel.

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to this value.

## See Also

### Accessing the value

- [SetControlValue](setcontrolvalue.md): Beta. Sets the current control value.
- [GetControlValue](getcontrolvalue.md): Beta. Gets the current value of the control.
- [SetPanningChannels](setpanningchannels.md): Beta. Sets the current stereo panning channels.
