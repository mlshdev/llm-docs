> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodevice/setoutputsafetyoffset](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodevice/setoutputsafetyoffset)

# SetOutputSafetyOffset

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Specifies the output safety offset of the device.

## Declaration

```objectivec
kern_return_t SetOutputSafetyOffset(uint32_t in_safety_offset);
```

## Parameters

- `in_safety_offset`: The output safety offset value, as a [uint32_t](https://developer.apple.com/documentation/kernel/uint32_t).

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

The safety offset indicates the number for frames ahead of the current hardware position that’s safe to perform output I/O.

## See Also

### Working with Safety Offset Behvaior

- [SetInputSafetyOffset](setinputsafetyoffset.md): Specifies the input safety offset of the device.
- [GetInputSafetyOffset](getinputsafetyoffset.md): Returns the input safety offset of the device.
- [GetOutputSafetyOffset](getoutputsafetyoffset.md): Returns the output safety offset of the device.
