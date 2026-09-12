> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiostream/handlechangecurrentstreamformat](https://developer.apple.com/documentation/audiodriverkit/iouseraudiostream/handlechangecurrentstreamformat)

# HandleChangeCurrentStreamFormat

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Tells the stream the format is changing.

## Declaration

```objectivec
virtual kern_return_t HandleChangeCurrentStreamFormat(const IOUserAudioStreamBasicDescription *in_format);
```

## Parameters

- `in_format`: The stream format to set, if possible, as an `IOUserAudioStreamBasicDescription`.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

The default implementation calls [SetCurrentStreamFormat](setcurrentstreamformat.md) and returns [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md). Subclass and override this method to handle changes to the stream format and return [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) upon success.

## See Also

### Managing Stream Changes

- [HandleChangeStreamIsActive](handlechangestreamisactive.md): Tells the stream the activity state is changing.
- [DeviceSampleRateChanged](devicesampleratechanged.md): Updates stream formats, in response to the owning audio device changing its sample rate.
