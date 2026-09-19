> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodevice/getinputsafetyoffset

# GetInputSafetyOffset

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Gets the input safety offset of the device.

## Declaration

```objectivec
uint32_t GetInputSafetyOffset();
```

<a id="return-value"></a>

## Return Value

The input safety offset.

<a id="discussion"></a>

## Discussion

A uint32_t whose value indicates the number for frames behind the current hardware position that is safe to do IO.

## See Also

### Working with safety offset behavior

- [SetInputSafetyOffset](setinputsafetyoffset.md): Beta. Specifies the input safety offset of the device.
- [SetOutputSafetyOffset](setoutputsafetyoffset.md): Beta. Specifies the output safety offset of the device.
- [GetOutputSafetyOffset](getoutputsafetyoffset.md): Beta. Gets the output safety offset of the device.
