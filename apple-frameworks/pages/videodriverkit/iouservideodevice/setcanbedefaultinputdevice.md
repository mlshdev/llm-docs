> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodevice/setcanbedefaultinputdevice](https://developer.apple.com/documentation/videodriverkit/iouservideodevice/setcanbedefaultinputdevice)

# SetCanBeDefaultInputDevice

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Specify if device can be used as default input device.

## Declaration

```objectivec
kern_return_t SetCanBeDefaultInputDevice(bool in_can_be_default);
```

## Parameters

- `in_can_be_default`: True if device can be used as default input device by the host.

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Working with default device behavior

- [CanBeDefaultInputDevice](canbedefaultinputdevice.md): Returns a Boolean value indicating if device can be used for default input.
- [SetCanBeDefaultOutputDevice](setcanbedefaultoutputdevice.md): Specifies if device can be used as default output device.
- [CanBeDefaultOutputDevice](canbedefaultoutputdevice.md): Returns a Boolean value indicating if device can be used for default output.
- [SetCanBeDefaultSystemOutputDevice](setcanbedefaultsystemoutputdevice.md): Specifies if device can be used as default system output device
- [CanBeDefaultSystemOutputDevice](canbedefaultsystemoutputdevice.md): Returns a Boolean value indicating if device can be used for default system output.
