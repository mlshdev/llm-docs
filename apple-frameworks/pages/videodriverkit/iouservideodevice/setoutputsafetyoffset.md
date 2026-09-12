> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodevice/setoutputsafetyoffset](https://developer.apple.com/documentation/videodriverkit/iouservideodevice/setoutputsafetyoffset)

# SetOutputSafetyOffset

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Specifies the output safety offset of the device.

## Declaration

```objectivec
kern_return_t SetOutputSafetyOffset(uint32_t in_safety_offset);
```

## Parameters

- `in_safety_offset`: uint32_t output safety offset value.

<a id="discussion"></a>

## Discussion

A uint32_t whose value indicates the number for frames ahead the current hardware position that is safe to do IO.

## See Also

### Working with safety offset behavior

- [SetInputSafetyOffset](setinputsafetyoffset.md): Specifies the input safety offset of the device.
- [GetInputSafetyOffset](getinputsafetyoffset.md): Gets the input safety offset of the device.
- [GetOutputSafetyOffset](getoutputsafetyoffset.md): Gets the output safety offset of the device.
