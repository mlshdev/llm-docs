> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiobooleancontrol/setcontrolvalue](https://developer.apple.com/documentation/audiodriverkit/iouseraudiobooleancontrol/setcontrolvalue)

# SetControlValue

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets the Boolean value of the control.

## Declaration

```objectivec
kern_return_t SetControlValue(bool in_control_value);
```

## Parameters

- `in_control_value`: The Boolean value to set.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If successful, changing the control value sends a notification to the host to update the object state.

This method synchronizes by using the work queue created by the object.

## See Also

### Accessing the Value

- [GetControlValue](getcontrolvalue.md): Gets the Boolean value of the control.
