> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoslidercontrol/init

# init

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Initializes a slider control.

## Declaration

```objectivec
virtual bool init(IOUserVideoDriver *in_driver, bool in_is_settable, uint32_t in_control_value, IOUserVideoSliderRange in_range, IOUserVideoObjectPropertyElement in_control_element, IOUserVideoObjectPropertyScope in_control_scope, IOUserVideoClassID in_control_class_id);
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

True on success.

## See Also

### Creating a slider control

- [Create](create.md): Beta. A static factory method that allocates and initializes an slider control.
- [IOUserVideoDriver](../iouservideodriver.md): Beta. A video driver.
- [IOUserVideoObjectPropertyElement](../videodriverkit/iouservideoobjectpropertyelement.md): Beta. An integer that identifies, along with the property selector and scope, a specific piece of information about a video object.
- [IOUserVideoObjectPropertyScope](../videodriverkit/iouservideoobjectpropertyscope.md): Beta. A four character code which, along with the selector and element, identifies a specific piece of information about a video object.
