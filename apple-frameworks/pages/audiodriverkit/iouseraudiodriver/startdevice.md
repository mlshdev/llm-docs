> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodriver/startdevice](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodriver/startdevice)

# StartDevice

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Tells the driver to start I/O on an audio device or audio clock device.

## Declaration

```objectivec
virtual kern_return_t StartDevice(IOUserAudioObjectID in_object_id, IOUserAudioStartStopFlags in_flags);
```

## Parameters

- `in_object_id`: The identifier of the device on which to start I/O.
- `in_flags`: A flag that indicates how to perform the I/O start operation.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

The default implementation always returns [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md). Subclass and override this method to handle hardware-specific startup, then call the superclass to update the I/O state. The framework expects this call to always succeed for fail. The hardware can take as long as it needs in this call, provided it always either succeeds or fails.

This call results in a call to [StartIO](../iouseraudiodevice/startio.md) on the device.

## See Also

### Starting and Stopping the Driver

- [StopDevice](stopdevice.md): Tells the driver to stop I/O on an audio device or audio clock device.
- [IOUserAudioObjectID](../audiodriverkit/iouseraudioobjectid.md): An identifier that provides a handle on a specific audio object.
- [IOUserAudioStartStopFlags](../audiodriverkit/iouseraudiostartstopflags.md): Values that indicate I/O starts or stops.
