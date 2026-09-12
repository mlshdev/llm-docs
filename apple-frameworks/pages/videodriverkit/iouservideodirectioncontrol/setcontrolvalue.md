> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodirectioncontrol/setcontrolvalue](https://developer.apple.com/documentation/videodriverkit/iouservideodirectioncontrol/setcontrolvalue)

# SetControlValue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the current control value.

## Declaration

```objectivec
kern_return_t SetControlValue(bool in_control_value);
```

## Parameters

- `in_control_value`: Bool control value.

<a id="discussion"></a>

## Discussion

Changing the control value will send a notification to the host to update the object state if successful. The object’s work queue synchronizes access to the value.

## See Also

### Accessing the value

- [GetControlValue](getcontrolvalue.md): Gets the current value of the control.
