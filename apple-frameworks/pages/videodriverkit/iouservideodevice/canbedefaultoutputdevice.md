> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodevice/canbedefaultoutputdevice

# CanBeDefaultOutputDevice

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Returns a Boolean value indicating if device can be used for default output.

## Declaration

```objectivec
uint32_t CanBeDefaultOutputDevice();
```

<a id="return-value"></a>

## Return Value

True if device can be used for default output.

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Working with default device behavior

- [SetCanBeDefaultInputDevice](setcanbedefaultinputdevice.md): Beta. Specify if device can be used as default input device.
- [CanBeDefaultInputDevice](canbedefaultinputdevice.md): Beta. Returns a Boolean value indicating if device can be used for default input.
- [SetCanBeDefaultOutputDevice](setcanbedefaultoutputdevice.md): Beta. Specifies if device can be used as default output device.
- [SetCanBeDefaultSystemOutputDevice](setcanbedefaultsystemoutputdevice.md): Beta. Specifies if device can be used as default system output device
- [CanBeDefaultSystemOutputDevice](canbedefaultsystemoutputdevice.md): Beta. Returns a Boolean value indicating if device can be used for default system output.
