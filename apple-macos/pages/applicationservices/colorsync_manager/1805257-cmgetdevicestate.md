> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805257-cmgetdevicestate](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805257-cmgetdevicestate)

# CMGetDeviceState

**Interface language:** Objective-C

**Framework:** Application Services

Gets the state of a device.

## Declaration

```objectivec
CMError CMGetDeviceState (
   CMDeviceClass deviceClass,
   CMDeviceID deviceID,
   CMDeviceState *deviceState
);
```

## Parameters

- `deviceClass`: A device class to query. See [CMDeviceClass](../cmdeviceclass.md) for a list of the constants you can supply.
- `deviceID`: A device ID to query. You can pass `cmDefaultDeviceID`.
- `deviceState`: On output, points to the device state. See [Device States](../1560516-device_states.md) for the values that can be returned.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

## See Also

### Accessing Device State and Information

- [CMSetDeviceState](1805258-cmsetdevicestate.md): Sets the state of a device.
- [CMGetDeviceInfo](1805260-cmgetdeviceinfo.md): Gets information about a specified device.
