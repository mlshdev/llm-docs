> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiolevelcontrol/setdecibelvalue](https://developer.apple.com/documentation/audiodriverkit/iouseraudiolevelcontrol/setdecibelvalue)

# SetDecibelValue

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets the decibel value of the level control.

## Declaration

```objectivec
kern_return_t SetDecibelValue(float in_decibel_value);
```

## Parameters

- `in_decibel_value`: The decibel value to set.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If successful, changing the scalar value sends a notification to the host to update the object state.

This method synchronizes by using the work queue created by the object.

## See Also

### Accessing the Value

- [SetScalarValue](setscalarvalue.md): Sets the scalar value of the level control.
- [GetScalarValue](getscalarvalue.md): Gets the scalar value of the level control.
- [GetDecibelValue](getdecibelvalue.md): Gets the decibel value of the level control.
