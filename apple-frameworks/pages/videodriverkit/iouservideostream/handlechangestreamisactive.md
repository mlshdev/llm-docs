> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/handlechangestreamisactive

# HandleChangeStreamIsActive

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

The system calls this virtual method when the stream active state changes.

## Declaration

```objectivec
virtual kern_return_t HandleChangeStreamIsActive(bool in_is_active);
```

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success. Upon success the stream’s active state should be changed.

<a id="discussion"></a>

## Discussion

The default implementation calls `SetStreamIsActive()` and returns `kIOReturnSuccess`. Subclass and override this method to handle changing stream active state and return `kIOReturnSuccess` upon success.

## See Also

### Managing stream changes

- [HandleChangeCurrentStreamFormat](handlechangecurrentstreamformat.md): Beta. The system calls this virtual method when the stream’s format changes.
- [DeviceSampleRateChanged](devicesampleratechanged.md): Beta. Call to update stream formats when the owning video device changes sample rate
