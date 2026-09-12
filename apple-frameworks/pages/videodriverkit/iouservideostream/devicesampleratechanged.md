> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/devicesampleratechanged](https://developer.apple.com/documentation/videodriverkit/iouservideostream/devicesampleratechanged)

# DeviceSampleRateChanged

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

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

- [HandleChangeCurrentStreamFormat](handlechangecurrentstreamformat.md): The system calls this virtual method when the stream’s format changes.
- [HandleChangeStreamIsActive](handlechangestreamisactive.md): The system calls this virtual method when the stream active state changes.
