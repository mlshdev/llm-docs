> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiostereopancontrol/create](https://developer.apple.com/documentation/audiodriverkit/iouseraudiostereopancontrol/create)

# Create

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 21.0+

Allocates and initializes an instance of the stereo pan control class.

## Declaration

```objectivec
static OSSharedPtr<IOUserAudioStereoPanControl> Create(IOUserAudioDriver *in_driver, bool in_is_settable, float in_control_value, IOUserAudioObjectPropertyElement in_left_channel, IOUserAudioObjectPropertyElement in_right_channel, IOUserAudioObjectPropertyElement in_control_element, IOUserAudioObjectPropertyScope in_control_scope, IOUserAudioClassID in_control_class_id);
```

## Parameters

- `in_driver`: The [IOUserAudioDriver](../iouseraudiodriver.md) that owns this object.
- `in_is_settable`: A Boolean value that indicates if the control can be set.
- `in_control_value`: A floating-point value that represents the control’s current stereo pan value.
- `in_left_channel`: The [IOUserAudioObjectPropertyElement](../audiodriverkit/iouseraudioobjectpropertyelement.md) for the left channel.
- `in_right_channel`: The `IOUserAudioObjectPropertyElement` for the right channel.
- `in_control_element`: An `IOUserAudioObjectPropertyElement` to identify the control.
- `in_control_scope`: A [IOUserAudioObjectPropertyScope](../audiodriverkit/iouseraudioobjectpropertyscope.md) indicating the control’s scope: input, output, global, or play-through.
- `in_control_class_id`: The [IOUserAudioClassID](../audiodriverkit/iouseraudioclassid.md) of the control.

<a id="return-value"></a>

## Return Value

A poiner to an [IOUserAudioStereoPanControl](../iouseraudiostereopancontrol.md), if allocation and initialization succeeded.

<a id="Discussion"></a>

## Discussion

If you subclass [IOUserAudioStereoPanControl](../iouseraudiostereopancontrol.md) to override this class’ behavior, don’t use [Create](create.md) to allocate and initialize the custom subclass.

## See Also

### Creating a Stereo Pan Control

- [init](init.md): Initializes an instance of a stereo pan control.
- [IOUserAudioDriver](../iouseraudiodriver.md): A DriverKit provider object that manages communications with an audio device.
- [IOUserAudioObjectPropertyElement](../audiodriverkit/iouseraudioobjectpropertyelement.md): A four character code which, along with the selector and scope, identify a specific piece of information about an audio object.
- [IOUserAudioObjectPropertyScope](../audiodriverkit/iouseraudioobjectpropertyscope.md): A four character code which, along with the selector and element, identify a specific piece of information about an audio object.
