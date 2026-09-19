> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideobooleancontrol/handlechangecontrolvalue

# HandleChangeControlValue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

The system calls this virtual method when the control’s value changes.

## Declaration

```objectivec
virtual kern_return_t HandleChangeControlValue(bool in_control_value);
```

## Parameters

- `in_control_value`: The Boolean value to set on the control.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success. Upon success, the control’s value should be updated.

<a id="discussion"></a>

## Discussion

The default implementation calls SetControlValue() and returns `kIOReturnSuccess`. Subclass and override this method to handle changes to this control value and return `kIOReturnSuccess` upon success.
