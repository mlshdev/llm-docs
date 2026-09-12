> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioselectorcontrol/handlechangeselectedvalues](https://developer.apple.com/documentation/audiodriverkit/iouseraudioselectorcontrol/handlechangeselectedvalues)

# HandleChangeSelectedValues

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Tells the selection control the value is changing.

## Declaration

```objectivec
virtual kern_return_t HandleChangeSelectedValues(const IOUserAudioSelectorValue *in_control_values, size_t in_num_values);
```

## Parameters

- `in_control_values`: An array of [IOUserAudioSelectorValue](../iouseraudioselectorvalue.md) values to set as the current selection of the control.
- `in_num_values`: The number of values in `in_control_values`.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

The default implementation calls [SetCurrentSelectedValues](setcurrentselectedvalues.md) and returns [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md). Subclass and override this method to handle changes to the stream format and return [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) upon success.
