> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/startio](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/startio)

# StartIO

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Tells the clock device to start I/O.

## Declaration

```objectivec
virtual kern_return_t StartIO(IOUserAudioStartStopFlags in_flags);
```

## Parameters

- `in_flags`: A [IOUserAudioStartStopFlags](../audiodriverkit/iouseraudiostartstopflags.md) value to indicate I/O startup behavior.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

The default implementation always returns [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md).

Subclass and override this method to handle hardware-specific tasks during I/O startup, then call the superclass to update the I/O state. The framework expects this call to always succeed or fail. The hardware can take as long as it needs in this call, provided it always either succeeds or fails.

## See Also

### Performing I/O

- [StopIO](stopio.md): Tells the clock device to stop I/O.
- [IOUserAudioStartStopFlags](../audiodriverkit/iouseraudiostartstopflags.md): Values that indicate I/O starts or stops.
