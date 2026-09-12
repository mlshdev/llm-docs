> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodevice/getoutputsafetyoffset](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodevice/getoutputsafetyoffset)

# GetOutputSafetyOffset

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Returns the output safety offset of the device.

## Declaration

```objectivec
uint32_t GetOutputSafetyOffset();
```

<a id="return-value"></a>

## Return Value

The output safety offset value, as a [uint32_t](https://developer.apple.com/documentation/kernel/uint32_t).

<a id="Discussion"></a>

## Discussion

The safety offset indicates the number for frames ahead of the current hardware position that’s safe to perform output I/O.

## See Also

### Working with Safety Offset Behvaior

- [SetInputSafetyOffset](setinputsafetyoffset.md): Specifies the input safety offset of the device.
- [GetInputSafetyOffset](getinputsafetyoffset.md): Returns the input safety offset of the device.
- [SetOutputSafetyOffset](setoutputsafetyoffset.md): Specifies the output safety offset of the device.
