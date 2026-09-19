> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodevice/setpreferredoutputchannellayout

# SetPreferredOutputChannelLayout

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Sets the output channel layout.

## Declaration

```objectivec
kern_return_t SetPreferredOutputChannelLayout(IOUserVideoChannelLabel *in_channel_labels, size_t in_num_channels);
```

## Parameters

- `in_channel_labels`: An array of channel labels.
- `in_num_channels`: The number of items in the array.

## See Also

### Working with channel layouts

- [SetPreferredChannelsForStereo](setpreferredchannelsforstereo.md): Beta. Sets the channel indices for the preferred stereo pair
- [GetPreferredChannelsForStereo](getpreferredchannelsforstereo.md): Beta. Gets the channel indices for the preferred stereo pair.
- [SetPreferredInputChannelLayout](setpreferredinputchannellayout.md): Beta. Sets the input channel layout with IOUserVideoChannelLabel values
- [IOUserVideoChannelLabel](../videodriverkit/iouservideochannellabel.md): Beta. These constants are to set the preferred channel layout on video device.
