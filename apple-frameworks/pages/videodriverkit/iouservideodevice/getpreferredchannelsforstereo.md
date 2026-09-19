> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodevice/getpreferredchannelsforstereo

# GetPreferredChannelsForStereo

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Gets the channel indices for the preferred stereo pair.

## Declaration

```objectivec
void GetPreferredChannelsForStereo(uint32_t *out_left_channel, uint32_t *out_right_channel);
```

## Parameters

- `out_left_channel`: Pointer to a uint32_t channel index for the preferred stereo left channel.
- `out_right_channel`: Pointer to a uint32_t channel index for the preferred stereo right channel.

## See Also

### Working with channel layouts

- [SetPreferredChannelsForStereo](setpreferredchannelsforstereo.md): Beta. Sets the channel indices for the preferred stereo pair
- [SetPreferredInputChannelLayout](setpreferredinputchannellayout.md): Beta. Sets the input channel layout with IOUserVideoChannelLabel values
- [SetPreferredOutputChannelLayout](setpreferredoutputchannellayout.md): Beta. Sets the output channel layout.
- [IOUserVideoChannelLabel](../videodriverkit/iouservideochannellabel.md): Beta. These constants are to set the preferred channel layout on video device.
