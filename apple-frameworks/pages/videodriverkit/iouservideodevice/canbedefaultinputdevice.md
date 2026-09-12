> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodevice/canbedefaultinputdevice](https://developer.apple.com/documentation/videodriverkit/iouservideodevice/canbedefaultinputdevice)

# CanBeDefaultInputDevice

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Returns a Boolean value indicating if device can be used for default input.

## Declaration

```objectivec
uint32_t CanBeDefaultInputDevice();
```

<a id="return-value"></a>

## Return Value

True if device can be used for default input.

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Working with default device behavior

- [SetCanBeDefaultInputDevice](setcanbedefaultinputdevice.md): Specify if device can be used as default input device.
- [SetCanBeDefaultOutputDevice](setcanbedefaultoutputdevice.md): Specifies if device can be used as default output device.
- [CanBeDefaultOutputDevice](canbedefaultoutputdevice.md): Returns a Boolean value indicating if device can be used for default output.
- [SetCanBeDefaultSystemOutputDevice](setcanbedefaultsystemoutputdevice.md): Specifies if device can be used as default system output device
- [CanBeDefaultSystemOutputDevice](canbedefaultsystemoutputdevice.md): Returns a Boolean value indicating if device can be used for default system output.
