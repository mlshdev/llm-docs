> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiobox/removeclockdevice](https://developer.apple.com/documentation/audiodriverkit/iouseraudiobox/removeclockdevice)

# RemoveClockDevice

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Adds an audio clock device to the audio box.

## Declaration

```objectivec
kern_return_t RemoveClockDevice(IOUserAudioClockDevice *in_clock_device);
```

## Parameters

- `in_clock_device`: The [IOUserAudioClockDevice](../iouseraudioclockdevice.md) to disassociate from the box.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If removing the clock device succeeds, the clock device’s reference count decrements by one.

## See Also

### Managing Box Contents

- [AddDevice](adddevice.md): Adds an audio device to the audio box.
- [RemoveDevice](removedevice.md): Removes an audio device from the audio box.
- [IOUserAudioDevice](../iouseraudiodevice.md): An audio clock device object that handles the configurations for running I/O.
- [AddClockDevice](addclockdevice.md): Adds an audio clock device to the audio box.
- [IOUserAudioClockDevice](../iouseraudioclockdevice.md): An audio clock device object, used to synchronize and perform I/O.
