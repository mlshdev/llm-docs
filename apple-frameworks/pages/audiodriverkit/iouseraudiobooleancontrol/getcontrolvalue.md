> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/iouseraudiobooleancontrol/getcontrolvalue

# GetControlValue

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the Boolean value of the control.

## Declaration

```objectivec
bool GetControlValue();
```

<a id="return-value"></a>

## Return Value

The current value of the control.

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Accessing the Value

- [SetControlValue](setcontrolvalue.md): Sets the Boolean value of the control.
