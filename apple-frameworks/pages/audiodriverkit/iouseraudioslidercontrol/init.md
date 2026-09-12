> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioslidercontrol/init](https://developer.apple.com/documentation/audiodriverkit/iouseraudioslidercontrol/init)

# init

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Initializes an instance of a slider control.

## Declaration

```objectivec
virtual bool init(IOUserAudioDriver *in_driver, bool in_is_settable, uint32_t in_control_value, IOUserAudioSliderRange in_range, IOUserAudioObjectPropertyElement in_control_element, IOUserAudioObjectPropertyScope in_control_scope, IOUserAudioClassID in_control_class_id);
```

## Parameters

- `in_driver`: The [IOUserAudioDriver](../iouseraudiodriver.md) that owns this object.
- `in_is_settable`: A Boolean value that indicates if the control can be set.
- `in_control_value`: A [uint32_t](https://developer.apple.com/documentation/kernel/uint32_t) value that represents the control’s current value.
- `in_range`: The range that defines minimum and maximum values for the slider.
- `in_control_element`: An [IOUserAudioObjectPropertyElement](../audiodriverkit/iouseraudioobjectpropertyelement.md) to identify the control.
- `in_control_scope`: A [IOUserAudioObjectPropertyScope](../audiodriverkit/iouseraudioobjectpropertyscope.md) indicating the control’s scope: input, output, global, or play-through.
- `in_control_class_id`: The [IOUserAudioClassID](../audiodriverkit/iouseraudioclassid.md) of the control.

<a id="return-value"></a>

## Return Value

`true` if initialization succeeded; `false` otherwise.

## See Also

### Creating a Slider Control

- [Create](create.md): Allocates and initializes an instance of the slider control class.
- [IOUserAudioObjectPropertyElement](../audiodriverkit/iouseraudioobjectpropertyelement.md): A four character code which, along with the selector and scope, identify a specific piece of information about an audio object.
- [IOUserAudioObjectPropertyScope](../audiodriverkit/iouseraudioobjectpropertyscope.md): A four character code which, along with the selector and element, identify a specific piece of information about an audio object.
- [IOUserAudioDriver](../iouseraudiodriver.md): A DriverKit provider object that manages communications with an audio device.
