> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodevice/getinputsafetyoffset](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodevice/getinputsafetyoffset)

# GetInputSafetyOffset

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Returns the input safety offset of the device.

## Declaration

```objectivec
uint32_t GetInputSafetyOffset();
```

<a id="return-value"></a>

## Return Value

The input safety offset value, as a [uint32_t](https://developer.apple.com/documentation/kernel/uint32_t).

<a id="Discussion"></a>

## Discussion

The safety offset indicates the number for frames behind the current hardware position that’s safe to perform input I/O.

## See Also

### Working with Safety Offset Behvaior

- [SetInputSafetyOffset](setinputsafetyoffset.md): Specifies the input safety offset of the device.
- [SetOutputSafetyOffset](setoutputsafetyoffset.md): Specifies the output safety offset of the device.
- [GetOutputSafetyOffset](getoutputsafetyoffset.md): Returns the output safety offset of the device.
