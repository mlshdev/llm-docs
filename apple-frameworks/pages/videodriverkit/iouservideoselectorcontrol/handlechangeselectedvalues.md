> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoselectorcontrol/handlechangeselectedvalues](https://developer.apple.com/documentation/videodriverkit/iouservideoselectorcontrol/handlechangeselectedvalues)

# HandleChangeSelectedValues

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

The system calls this virtual method when the control’s selected values change.

## Declaration

```objectivec
virtual kern_return_t HandleChangeSelectedValues(const IOUserVideoSelectorValue *in_control_values, size_t in_num_values);
```

## Parameters

- `in_control_values`: Pointer to an array of IOUserVideoSelectorValues to set on the control.
- `in_num_values`: The number of IOUserVideoSelectorValues in in_control_values.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success. Upon success, the control’s value should be updated.

<a id="discussion"></a>

## Discussion

The default implementation calls SetCurrentSelectedValues() and returns `kIOReturnSuccess`. Subclass and override this method to handle changes to this control and return `kIOReturnSuccess` upon success.
