> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodevice/setpreferredchannelsforstereo](https://developer.apple.com/documentation/videodriverkit/iouservideodevice/setpreferredchannelsforstereo)

# SetPreferredChannelsForStereo

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

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

- [GetPreferredChannelsForStereo](getpreferredchannelsforstereo.md): Gets the channel indices for the preferred stereo pair.
- [SetPreferredInputChannelLayout](setpreferredinputchannellayout.md): Sets the input channel layout with IOUserVideoChannelLabel values
- [SetPreferredOutputChannelLayout](setpreferredoutputchannellayout.md): Sets the output channel layout.
- [IOUserVideoChannelLabel](../videodriverkit/iouservideochannellabel.md): These constants are to set the preferred channel layout on video device.
