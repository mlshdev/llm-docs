> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodevice/setpreferredchannelsforstereo](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodevice/setpreferredchannelsforstereo)

# SetPreferredChannelsForStereo

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets the channel indices for the prefered stereo pair.

## Declaration

```objectivec
kern_return_t SetPreferredChannelsForStereo(uint32_t in_left_channel, uint32_t in_right_channel);
```

## Parameters

- `in_left_channel`: The channel index for the left channel.
- `in_right_channel`: The channel index for the right channel.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

## See Also

### Working with Channel Layouts

- [GetPreferredChannelsForStereo](getpreferredchannelsforstereo.md): Returns the channel indices for the prefered stereo pair.
- [SetPreferredInputChannelLayout](setpreferredinputchannellayout.md): Sets the input channel layout, using an array of audio channel label values.
- [SetPreferredOutputChannelLayout](setpreferredoutputchannellayout.md): Sets the output channel layout, using an array of audio channel label values.
- [IOUserAudioChannelLabel](../audiodriverkit/iouseraudiochannellabel.md): Constants to set the preferred channel layout on an audio device.
