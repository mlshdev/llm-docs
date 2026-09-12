> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodevice/getoutputsafetyoffset](https://developer.apple.com/documentation/videodriverkit/iouservideodevice/getoutputsafetyoffset)

# GetOutputSafetyOffset

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the output safety offset of the device.

## Declaration

```objectivec
uint32_t GetOutputSafetyOffset();
```

<a id="return-value"></a>

## Return Value

The output safety offset.

<a id="discussion"></a>

## Discussion

A uint32_t whose value indicates the number of frames ahead of the current hardware position that is safe to do IO.

## See Also

### Working with safety offset behavior

- [SetInputSafetyOffset](setinputsafetyoffset.md): Specifies the input safety offset of the device.
- [GetInputSafetyOffset](getinputsafetyoffset.md): Gets the input safety offset of the device.
- [SetOutputSafetyOffset](setoutputsafetyoffset.md): Specifies the output safety offset of the device.
