> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodevice/performdeviceconfigurationchange](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodevice/performdeviceconfigurationchange)

# PerformDeviceConfigurationChange

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Tells the device to handle a configuration change.

## Declaration

```objectivec
virtual kern_return_t PerformDeviceConfigurationChange(uint64_t in_change_action, OSObject *in_change_info);
```

## Parameters

- `in_change_action`: A `uint64_t` that indicates the action the device object takes. This is the same value previously passed to `RequestDeviceConfigurationChange`. This value is purely for the device’s usage; the host doesn’t look at this value.
- `in_change_info`: A pointer to an [OSObject](../../driverkit/osobject.md) about the configuration change. This is the same value previously passed to `RequestDeviceConfigurationChange`. This value is purely for the clock device’s usage; the host doesn’t look at this value. Retain and release this object reference as needed.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

The host calls this method to allow the clock device to perform a configuration change. This call can result from a call to `RequestDeviceConfigurationChange` or a from change to an I/O state that requires a configuration change.

Subclass and override this method to handle any custom configuration change requests, then call the superclass to update the I/O state. The framework stops I/O prior to performing the configuration change.

## See Also

### Supporting Device Configuration Changes

- [AbortDeviceConfigurationChange](abortdeviceconfigurationchange.md): Tells the device to stop handling a configuration change.
