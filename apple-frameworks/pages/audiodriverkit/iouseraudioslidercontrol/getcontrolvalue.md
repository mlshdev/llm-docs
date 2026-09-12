> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioslidercontrol/getcontrolvalue](https://developer.apple.com/documentation/audiodriverkit/iouseraudioslidercontrol/getcontrolvalue)

# GetControlValue

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the value of the slider control.

## Declaration

```objectivec
uint32_t GetControlValue();
```

<a id="return-value"></a>

## Return Value

The value of the slider.

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Accessing the Value

- [SetControlValue](setcontrolvalue.md): Sets the value of the slider control.
- [SetRange](setrange.md): Sets the range of possible values for the slider.
- [GetRange](getrange.md): Gets the range of possible values for the slider.
- [IOUserAudioSliderRange](../iouseraudiosliderrange.md): A type that indicates minimum and maximum values for slider controls.
