> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodevice/canbedefaultsystemoutputdevice](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodevice/canbedefaultsystemoutputdevice)

# CanBeDefaultSystemOutputDevice

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Returns a Boolean value that indicates if this device can be the system’s default output device.

## Declaration

```objectivec
uint32_t CanBeDefaultSystemOutputDevice();
```

<a id="return-value"></a>

## Return Value

`true` if the system can use this device as the default output device.

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Working with Default Device Behavior

- [SetCanBeDefaultInputDevice](setcanbedefaultinputdevice.md): Sets a Boolean value that indicates if this device can be the host’s default input device.
- [CanBeDefaultInputDevice](canbedefaultinputdevice.md): Returns a Boolean value that indicates if this device can be the host’s default input device.
- [SetCanBeDefaultOutputDevice](setcanbedefaultoutputdevice.md): Sets a Boolean value that indicates if this device can be the host’s default output device.
- [CanBeDefaultOutputDevice](canbedefaultoutputdevice.md): Returns a Boolean value that indicates if this device can be the host’s default output device.
- [SetCanBeDefaultSystemOutputDevice](setcanbedefaultsystemoutputdevice.md): Sets a Boolean value that indicates if this device can be the system’s default output device.
