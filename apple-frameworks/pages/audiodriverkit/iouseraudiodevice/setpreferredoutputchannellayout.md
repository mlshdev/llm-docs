> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodevice/setpreferredoutputchannellayout](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodevice/setpreferredoutputchannellayout)

# SetPreferredOutputChannelLayout

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets the output channel layout, using an array of audio channel label values.

## Declaration

```objectivec
kern_return_t SetPreferredOutputChannelLayout(IOUserAudioChannelLabel *in_channel_labels, size_t in_num_channels);
```

## Parameters

- `in_channel_labels`: An array of [IOUserAudioChannelLabel](../audiodriverkit/iouseraudiochannellabel.md) values.
- `in_num_channels`: The number of items in the `in_channel_labels` array.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

## See Also

### Working with Channel Layouts

- [SetPreferredChannelsForStereo](setpreferredchannelsforstereo.md): Sets the channel indices for the prefered stereo pair.
- [GetPreferredChannelsForStereo](getpreferredchannelsforstereo.md): Returns the channel indices for the prefered stereo pair.
- [SetPreferredInputChannelLayout](setpreferredinputchannellayout.md): Sets the input channel layout, using an array of audio channel label values.
- [IOUserAudioChannelLabel](../audiodriverkit/iouseraudiochannellabel.md): Constants to set the preferred channel layout on an audio device.
