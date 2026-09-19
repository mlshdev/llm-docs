> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodevice/setinputsafetyoffset

# SetInputSafetyOffset

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Specifies the input safety offset of the device.

## Declaration

```objectivec
kern_return_t SetInputSafetyOffset(uint32_t in_safety_offset);
```

## Parameters

- `in_safety_offset`: uint32_t input safety offset value.

<a id="discussion"></a>

## Discussion

A uint32_t whose value indicates the number for frames behind the current hardware position that is safe to do IO.

## See Also

### Working with safety offset behavior

- [GetInputSafetyOffset](getinputsafetyoffset.md): Beta. Gets the input safety offset of the device.
- [SetOutputSafetyOffset](setoutputsafetyoffset.md): Beta. Specifies the output safety offset of the device.
- [GetOutputSafetyOffset](getoutputsafetyoffset.md): Beta. Gets the output safety offset of the device.
