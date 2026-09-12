> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodevice/getpreferredchannelsforstereo](https://developer.apple.com/documentation/videodriverkit/iouservideodevice/getpreferredchannelsforstereo)

# GetPreferredChannelsForStereo

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

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

- [SetPreferredChannelsForStereo](setpreferredchannelsforstereo.md): Sets the channel indices for the preferred stereo pair
- [SetPreferredInputChannelLayout](setpreferredinputchannellayout.md): Sets the input channel layout with IOUserVideoChannelLabel values
- [SetPreferredOutputChannelLayout](setpreferredoutputchannellayout.md): Sets the output channel layout.
- [IOUserVideoChannelLabel](../videodriverkit/iouservideochannellabel.md): These constants are to set the preferred channel layout on video device.
