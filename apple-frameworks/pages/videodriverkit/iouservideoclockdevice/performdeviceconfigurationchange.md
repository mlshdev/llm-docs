> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/performdeviceconfigurationchange](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/performdeviceconfigurationchange)

# PerformDeviceConfigurationChange

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

The host calls this method to allow the clock device to perform a configuration change that had been previously requested via a call to the host via RequestDeviceConfigChange or a change to an IO state that requires a configuration change

## Declaration

```objectivec
virtual kern_return_t PerformDeviceConfigurationChange(uint64_t change_action, OSObject *in_change_info);
```

## Parameters

- `in_change_info`: A pointer to an OSObject about the configuration change. This is the same value that was passed to RequestDeviceConfigurationChange(). Note that this value is purely for the driver’s usage. The Host does not look at this value. Object reference should be retained/released as necessary.

<a id="discussion"></a>

## Discussion

Subclass and override this method to handle any custom configuration change requests, then call the superclass implementation to update state. IO will be stopped prior to the performing the configuration change.

## See Also

### Supporting device configuration changes

- [AbortDeviceConfigurationChange](abortdeviceconfigurationchange.md): The host calls this method to tell the driver not to perform a configuration change that had been requested via a call to the Host method, RequestDeviceConfigurationChange().
