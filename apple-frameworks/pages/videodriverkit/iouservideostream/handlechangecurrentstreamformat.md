> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/handlechangecurrentstreamformat](https://developer.apple.com/documentation/videodriverkit/iouservideostream/handlechangecurrentstreamformat)

# HandleChangeCurrentStreamFormat

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

The system calls this virtual method when the stream’s format changes.

## Declaration

```objectivec
virtual kern_return_t HandleChangeCurrentStreamFormat(const IOUserVideoStreamBasicDescription *in_format);
```

## Parameters

- `in_format`: Pointer to a basic description, to be set on the stream.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success. Upon success the stream’s format should be updated.

<a id="discussion"></a>

## Discussion

The default implementation calls `SetCurrentStreamFormat()` and returns `kIOReturnSuccess`. Subclass and override this method to handle changing stream format and return `kIOReturnSuccess` upon success.

## See Also

### Managing stream changes

- [HandleChangeStreamIsActive](handlechangestreamisactive.md): The system calls this virtual method when the stream active state changes.
- [DeviceSampleRateChanged](devicesampleratechanged.md): Call to update stream formats when the owning video device changes sample rate
