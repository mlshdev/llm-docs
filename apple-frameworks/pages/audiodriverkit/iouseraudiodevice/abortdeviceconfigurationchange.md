> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodevice/abortdeviceconfigurationchange](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodevice/abortdeviceconfigurationchange)

# AbortDeviceConfigurationChange

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Tells the device to stop handling a configuration change.

## Declaration

```objectivec
virtual kern_return_t AbortDeviceConfigurationChange(uint64_t in_change_action, OSObject *in_change_info);
```

## Parameters

- `in_change_action`: A `uint64_t` indicating the action that the device object takes. This is the same value previously passed to `RequestDeviceConfigurationChange`. This value is purely for the clock device’s usage; the host doesn’t look at this value.
- `in_change_info`: A pointer to an [OSObject](../../driverkit/osobject.md) about the configuration change. This is the same value previously passed to `RequestDeviceConfigurationChange`. This value is purely for the clock device’s usage; the host doesn’t look at this value. Retain and release this object reference as needed.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

The host calls this method to tell the driver not to perform a configuration change previously requested by the host method `RequestDeviceConfigurationChange`. Subclass and override this method to abort the change, then call the superclass to update the I/O state.

## See Also

### Supporting Device Configuration Changes

- [PerformDeviceConfigurationChange](performdeviceconfigurationchange.md): Tells the device to handle a configuration change.
