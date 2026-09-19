> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostereopancontrol/getcontrolvalue

# GetControlValue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [SetControlValue](setcontrolvalue.md): Beta. Sets the current control value.
- [SetPanningChannels](setpanningchannels.md): Beta. Sets the current stereo panning channels.
- [GetPanningChannels](getpanningchannels.md): Beta. Gets the current stereo panning channels.
