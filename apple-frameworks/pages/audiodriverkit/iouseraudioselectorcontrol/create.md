> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioselectorcontrol/create](https://developer.apple.com/documentation/audiodriverkit/iouseraudioselectorcontrol/create)

# Create

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 21.0+

Allocates and initializes an instance of the selector control class.

## Declaration

```objectivec
static OSSharedPtr<IOUserAudioSelectorControl> Create(IOUserAudioDriver *in_driver, bool in_is_settable, IOUserAudioObjectPropertyElement in_control_element, IOUserAudioObjectPropertyScope in_control_scope, IOUserAudioClassID in_control_class_id);
```

## Parameters

- `in_driver`: The [IOUserAudioDriver](../iouseraudiodriver.md) that owns this object.
- `in_is_settable`: A Boolean value that indicates if the control can be set.
- `in_control_element`: An [IOUserAudioObjectPropertyElement](../audiodriverkit/iouseraudioobjectpropertyelement.md) to identify the control.
- `in_control_scope`: A [IOUserAudioObjectPropertyScope](../audiodriverkit/iouseraudioobjectpropertyscope.md) indicating the control’s scope: input, output, global, or play-through.
- `in_control_class_id`: The [IOUserAudioClassID](../audiodriverkit/iouseraudioclassid.md) of the control.

<a id="return-value"></a>

## Return Value

A poiner to an [IOUserAudioSelectorControl](../iouseraudioselectorcontrol.md), if allocation and initialization succeeded.

<a id="Discussion"></a>

## Discussion

If you subclass [IOUserAudioSelectorControl](../iouseraudioselectorcontrol.md) to override this class’ behavior, don’t use [Create](create.md) to allocate and initialize the custom subclass.

## See Also

### Creating a Selector Control

- [init](init.md): Initializes an instance of a selector control.
- [IOUserAudioDriver](../iouseraudiodriver.md): A DriverKit provider object that manages communications with an audio device.
- [IOUserAudioObjectPropertyElement](../audiodriverkit/iouseraudioobjectpropertyelement.md): A four character code which, along with the selector and scope, identify a specific piece of information about an audio object.
- [IOUserAudioObjectPropertyScope](../audiodriverkit/iouseraudioobjectpropertyscope.md): A four character code which, along with the selector and element, identify a specific piece of information about an audio object.
