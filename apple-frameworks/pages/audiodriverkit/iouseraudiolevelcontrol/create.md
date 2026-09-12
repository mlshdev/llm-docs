> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiolevelcontrol/create](https://developer.apple.com/documentation/audiodriverkit/iouseraudiolevelcontrol/create)

# Create

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 21.0+

Allocates and initializes an instance of the level control class.

## Declaration

```objectivec
static OSSharedPtr<IOUserAudioLevelControl> Create(IOUserAudioDriver *in_driver, bool in_is_settable, float in_decibel_value, IOUserAudioLevelControlRange in_decibel_range, IOUserAudioObjectPropertyElement in_control_element, IOUserAudioObjectPropertyScope in_control_scope, IOUserAudioClassID in_control_class_id);
```

## Parameters

- `in_driver`: The [IOUserAudioDriver](../iouseraudiodriver.md) that owns this object.
- `in_is_settable`: A Boolean value that indicates if the control can be set.
- `in_decibel_value`: A floating-point value that represents the level control’s current value in decibels.
- `in_decibel_range`: A [IOUserAudioLevelControlRange](../iouseraudiolevelcontrolrange.md) that describes the minimum and maximum values of the level control.
- `in_control_element`: An [IOUserAudioObjectPropertyElement](../audiodriverkit/iouseraudioobjectpropertyelement.md) to identify the control.
- `in_control_scope`: A [IOUserAudioObjectPropertyScope](../audiodriverkit/iouseraudioobjectpropertyscope.md) indicating the control’s scope: input, output, global, or play-through.
- `in_control_class_id`: The [IOUserAudioClassID](../audiodriverkit/iouseraudioclassid.md) of the control.

<a id="return-value"></a>

## Return Value

A poiner to an [IOUserAudioLevelControl](../iouseraudiolevelcontrol.md), if allocation and initialization succeeded.

<a id="Discussion"></a>

## Discussion

If you subclass [IOUserAudioLevelControl](../iouseraudiolevelcontrol.md) to override this class’ behavior, don’t use [Create](../iouseraudioslidercontrol/create.md) to allocate and initialize the custom subclass.

## See Also

### Creating a Level Control

- [init](init.md): Initializes an instance of a level control.
- [IOUserAudioDriver](../iouseraudiodriver.md): A DriverKit provider object that manages communications with an audio device.
- [IOUserAudioLevelControlRange](../iouseraudiolevelcontrolrange.md): A type that indicates minimum and maximum values for level controls.
- [IOUserAudioObjectPropertyElement](../audiodriverkit/iouseraudioobjectpropertyelement.md): A four character code which, along with the selector and scope, identify a specific piece of information about an audio object.
- [IOUserAudioObjectPropertyScope](../audiodriverkit/iouseraudioobjectpropertyscope.md): A four character code which, along with the selector and element, identify a specific piece of information about an audio object.
