> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodevice/setinputsafetyoffset](https://developer.apple.com/documentation/videodriverkit/iouservideodevice/setinputsafetyoffset)

# SetInputSafetyOffset

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

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

- [GetInputSafetyOffset](getinputsafetyoffset.md): Gets the input safety offset of the device.
- [SetOutputSafetyOffset](setoutputsafetyoffset.md): Specifies the output safety offset of the device.
- [GetOutputSafetyOffset](getoutputsafetyoffset.md): Gets the output safety offset of the device.
