> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostereopancontrol/create

# Create

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 27.0+ beta

A static factory method that allocates and initializes an stereo pan control.

## Declaration

```objectivec
static OSSharedPtr<IOUserVideoStereoPanControl> Create(IOUserVideoDriver *in_driver, bool in_is_settable, float in_control_value, IOUserVideoObjectPropertyElement in_left_channel, IOUserVideoObjectPropertyElement in_right_channel, IOUserVideoObjectPropertyElement in_control_element, IOUserVideoObjectPropertyScope in_control_scope, IOUserVideoClassID in_control_class_id);
```

## Parameters

- `in_driver`: The IOUserVideoDriver that owns this object.
- `in_is_settable`: A Boolean value indicating if the control value can be set
- `in_control_value`: A float for the control’s current stereo pan value
- `in_control_element`: The IOUserVideoObjectPropertyElement for the control
- `in_control_scope`: The IOUserVideoObjectPropertyScope for the control
- `in_control_class_id`: The IOUserVideoClassID of the control

<a id="return-value"></a>

## Return Value

OSSharedPtr to an IOUserVideoStereoPanControl if it was successfully allocated and initialized

<a id="discussion"></a>

## Discussion

If IOUserVideoStereoPanControl is subclassed to override behavior, don’t use this method to allocate or initialize the custom subclass.

## See Also

### Creating a stereo pan control

- [init](init.md): Beta. Initializes an stereo pan control.
- [IOUserVideoDriver](../iouservideodriver.md): Beta. A video driver.
- [IOUserVideoObjectPropertyElement](../videodriverkit/iouservideoobjectpropertyelement.md): Beta. An integer that identifies, along with the property selector and scope, a specific piece of information about a video object.
- [IOUserVideoObjectPropertyScope](../videodriverkit/iouservideoobjectpropertyscope.md): Beta. A four character code which, along with the selector and element, identifies a specific piece of information about a video object.
