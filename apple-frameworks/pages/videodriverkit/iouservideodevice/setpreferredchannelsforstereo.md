> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodevice/setpreferredchannelsforstereo

# SetPreferredChannelsForStereo

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Sets the channel indices for the preferred stereo pair

## Declaration

```objectivec
kern_return_t SetPreferredChannelsForStereo(uint32_t in_left_channel, uint32_t in_right_channel);
```

## Parameters

- `in_left_channel`: The channel index for the left channel.
- `in_right_channel`: The channel index for the right channel.

## See Also

### Working with channel layouts

- [GetPreferredChannelsForStereo](getpreferredchannelsforstereo.md): Beta. Gets the channel indices for the preferred stereo pair.
- [SetPreferredInputChannelLayout](setpreferredinputchannellayout.md): Beta. Sets the input channel layout with IOUserVideoChannelLabel values
- [SetPreferredOutputChannelLayout](setpreferredoutputchannellayout.md): Beta. Sets the output channel layout.
- [IOUserVideoChannelLabel](../videodriverkit/iouservideochannellabel.md): Beta. These constants are to set the preferred channel layout on video device.
