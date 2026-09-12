> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodevice/getpreferredchannelsforstereo](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodevice/getpreferredchannelsforstereo)

# GetPreferredChannelsForStereo

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Returns the channel indices for the prefered stereo pair.

## Declaration

```objectivec
void GetPreferredChannelsForStereo(uint32_t *out_left_channel, uint32_t *out_right_channel);
```

## Parameters

- `out_left_channel`: On return, the channel index for the left channel.
- `out_right_channel`: On return, the channel index for the right channel.

## See Also

### Working with Channel Layouts

- [SetPreferredChannelsForStereo](setpreferredchannelsforstereo.md): Sets the channel indices for the prefered stereo pair.
- [SetPreferredInputChannelLayout](setpreferredinputchannellayout.md): Sets the input channel layout, using an array of audio channel label values.
- [SetPreferredOutputChannelLayout](setpreferredoutputchannellayout.md): Sets the output channel layout, using an array of audio channel label values.
- [IOUserAudioChannelLabel](../audiodriverkit/iouseraudiochannellabel.md): Constants to set the preferred channel layout on an audio device.
