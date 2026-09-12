> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodevice/performdeviceconfigurationchange](https://developer.apple.com/documentation/videodriverkit/iouservideodevice/performdeviceconfigurationchange)

# PerformDeviceConfigurationChange

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

The host calls this method to allow the device to perform a configuration change it previously requested by calling RequestDeviceConfigurationChange(), or a change to an IO state that requires a configuration change.

## Declaration

```objectivec
virtual kern_return_t PerformDeviceConfigurationChange(uint64_t in_change_action, OSObject *in_change_info);
```

## Parameters

- `in_change_action`: A uint64_t indicating the action the device object wants to take. This is the same value passed to RequestDeviceConfigurationChange(). Note that this value is purely for the driver’s usage. The host does not look at this value.
- `in_change_info`: A pointer to an OSObject about the configuration change. This is the same value passed to RequestDeviceConfigurationChange(). Note that this value is purely for the driver’s usage. The host does not look at this value. Retain or release the object reference as necessary.

<a id="return-value"></a>

## Return Value

A kern_return_t value indicating success or failure.

<a id="discussion"></a>

## Discussion

Subclass and override this method to handle any custom configuration change requests. Then call the superclass implementation to update state. The driver stops IO before performing the configuration change.

## See Also

### Supporting device configuration changes

- [AbortDeviceConfigurationChange](abortdeviceconfigurationchange.md): The host calls this method to tell the driver not to perform a configuration change it requested by calling RequestDeviceConfigurationChange(). Subclass and override this method to handle any aborted custom configuration change requests. Then call the superclass implementation to update state.
