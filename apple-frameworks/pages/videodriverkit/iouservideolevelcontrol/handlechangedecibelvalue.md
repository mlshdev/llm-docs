> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideolevelcontrol/handlechangedecibelvalue](https://developer.apple.com/documentation/videodriverkit/iouservideolevelcontrol/handlechangedecibelvalue)

# HandleChangeDecibelValue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

The system calls this virtual method when the control’s value changes.

## Declaration

```objectivec
virtual kern_return_t HandleChangeDecibelValue(float in_decibel_value);
```

## Parameters

- `in_decibel_value`: The float decibel level value attempting to be set on the control.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success. Upon success the control’s value should be updated.

<a id="discussion"></a>

## Discussion

The default implementation calls SetDecibelValue() and returns `kIOReturnSuccess`. Subclass and override this method to handle changes to this control value and return `kIOReturnSuccess` upon success.

## See Also

### Supporting value changes

- [HandleChangeScalarValue](handlechangescalarvalue.md): The system calls this virtual method when the control’s value changes.
