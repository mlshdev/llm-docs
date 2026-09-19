> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/devicesampleratechanged

# DeviceSampleRateChanged

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Call to update stream formats when the owning video device changes sample rate

## Declaration

```objectivec
kern_return_t DeviceSampleRateChanged(double in_sample_rate);
```

<a id="discussion"></a>

## Discussion

Goes through all the available stream formats and selects the closet format with the matching sample rate. `HandleChangeCurrentStreamFormat()` will be called on the stream to update its format.

## See Also

### Managing stream changes

- [HandleChangeCurrentStreamFormat](handlechangecurrentstreamformat.md): Beta. The system calls this virtual method when the stream’s format changes.
- [HandleChangeStreamIsActive](handlechangestreamisactive.md): Beta. The system calls this virtual method when the stream active state changes.
