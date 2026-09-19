> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/handlechangecurrentstreamformat

# HandleChangeCurrentStreamFormat

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [HandleChangeStreamIsActive](handlechangestreamisactive.md): Beta. The system calls this virtual method when the stream active state changes.
- [DeviceSampleRateChanged](devicesampleratechanged.md): Beta. Call to update stream formats when the owning video device changes sample rate
