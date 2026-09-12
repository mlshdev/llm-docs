> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodevice/getinputsafetyoffset](https://developer.apple.com/documentation/videodriverkit/iouservideodevice/getinputsafetyoffset)

# GetInputSafetyOffset

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

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

- [SetInputSafetyOffset](setinputsafetyoffset.md): Specifies the input safety offset of the device.
- [SetOutputSafetyOffset](setoutputsafetyoffset.md): Specifies the output safety offset of the device.
- [GetOutputSafetyOffset](getoutputsafetyoffset.md): Gets the output safety offset of the device.
