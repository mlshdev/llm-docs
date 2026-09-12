> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodriver/stopdevice](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodriver/stopdevice)

# StopDevice

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Tells the driver to stop I/O on an audio device or audio clock device.

## Declaration

```objectivec
virtual kern_return_t StopDevice(IOUserAudioObjectID in_object_id, IOUserAudioStartStopFlags in_flags);
```

## Parameters

- `in_object_id`: The identifier of the device on which to stop I/O.
- `in_flags`: A flag that indicates how to perform the I/O stop operation.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

The default implementation always returns [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md). Subclass and override this method to handle hardware-specific stopping, then call the superclass to update the I/O state.

This call results in a call to [StopIO](../iouseraudiodevice/stopio.md) on the device.

## See Also

### Starting and Stopping the Driver

- [StartDevice](startdevice.md): Tells the driver to start I/O on an audio device or audio clock device.
- [IOUserAudioObjectID](../audiodriverkit/iouseraudioobjectid.md): An identifier that provides a handle on a specific audio object.
- [IOUserAudioStartStopFlags](../audiodriverkit/iouseraudiostartstopflags.md): Values that indicate I/O starts or stops.
