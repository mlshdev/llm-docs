> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodevice/setcanbedefaultinputdevice](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodevice/setcanbedefaultinputdevice)

# SetCanBeDefaultInputDevice

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets a Boolean value that indicates if this device can be the host’s default input device.

## Declaration

```objectivec
kern_return_t SetCanBeDefaultInputDevice(bool in_can_be_default);
```

## Parameters

- `in_can_be_default`: `true` if the host can use this device as the default input device.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Working with Default Device Behavior

- [CanBeDefaultInputDevice](canbedefaultinputdevice.md): Returns a Boolean value that indicates if this device can be the host’s default input device.
- [SetCanBeDefaultOutputDevice](setcanbedefaultoutputdevice.md): Sets a Boolean value that indicates if this device can be the host’s default output device.
- [CanBeDefaultOutputDevice](canbedefaultoutputdevice.md): Returns a Boolean value that indicates if this device can be the host’s default output device.
- [SetCanBeDefaultSystemOutputDevice](setcanbedefaultsystemoutputdevice.md): Sets a Boolean value that indicates if this device can be the system’s default output device.
- [CanBeDefaultSystemOutputDevice](canbedefaultsystemoutputdevice.md): Returns a Boolean value that indicates if this device can be the system’s default output device.
