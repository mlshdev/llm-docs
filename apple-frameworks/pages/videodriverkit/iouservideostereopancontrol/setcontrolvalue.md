> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostereopancontrol/setcontrolvalue

# SetControlValue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [GetControlValue](getcontrolvalue.md): Beta. Gets the current value of the control.
- [SetPanningChannels](setpanningchannels.md): Beta. Sets the current stereo panning channels.
- [GetPanningChannels](getpanningchannels.md): Beta. Gets the current stereo panning channels.
