> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiostream/stopio](https://developer.apple.com/documentation/audiodriverkit/iouseraudiostream/stopio)

# StopIO

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Tells the stream to stop I/O.

## Declaration

```objectivec
virtual kern_return_t StopIO(IOUserAudioStartStopFlags in_flags);
```

## Parameters

- `in_flags`: A `IOUserAudioStartStopFlag` to indicate I/O shutdown behavior.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

The default implementation always returns [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md).

Subclass and override this method to handle hardware-specific tasks during I/O shutdown, then call the superclass to update the I/O state. The framework expects this call to always succeed or fail.

## See Also

### Performing I/O

- [StartIO](startio.md): Tells the stream to start I/O.
- [IOUserAudioStartStopFlags](../audiodriverkit/iouseraudiostartstopflags.md): Values that indicate I/O starts or stops.
