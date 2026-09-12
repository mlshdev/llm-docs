> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoslidercontrol/create](https://developer.apple.com/documentation/videodriverkit/iouservideoslidercontrol/create)

# Create

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 27.0+

A static factory method that allocates and initializes an slider control.

## Declaration

```objectivec
static OSSharedPtr<IOUserVideoSliderControl> Create(IOUserVideoDriver *in_driver, bool in_is_settable, uint32_t in_control_value, IOUserVideoSliderRange in_range, IOUserVideoObjectPropertyElement in_control_element, IOUserVideoObjectPropertyScope in_control_scope, IOUserVideoClassID in_control_class_id);
```

## Parameters

- `in_driver`: The IOUserVideoDriver that owns this object.
- `in_is_settable`: A Boolean value indicating if the control value can be set
- `in_control_value`: A uint32_t for the control’s current slider value
- `in_range`: The IOUserVideoSliderRange for control
- `in_control_element`: The IOUserVideoObjectPropertyElement for the control
- `in_control_scope`: The IOUserVideoObjectPropertyScope for the control
- `in_control_class_id`: The IOUserVideoClassID of the control

<a id="return-value"></a>

## Return Value

OSSharedPtr to an IOUserVideoSliderControl if it was successfully allocated and initialized

<a id="discussion"></a>

## Discussion

If IOUserVideoSliderControl is subclassed to override behavior, don’t use this method to allocate or initialize the custom subclass.

## See Also

### Creating a slider control

- [init](init.md): Initializes a slider control.
- [IOUserVideoDriver](../iouservideodriver.md): A video driver.
- [IOUserVideoObjectPropertyElement](../videodriverkit/iouservideoobjectpropertyelement.md): An integer that identifies, along with the property selector and scope, a specific piece of information about a video object.
- [IOUserVideoObjectPropertyScope](../videodriverkit/iouservideoobjectpropertyscope.md): A four character code which, along with the selector and element, identifies a specific piece of information about a video object.
