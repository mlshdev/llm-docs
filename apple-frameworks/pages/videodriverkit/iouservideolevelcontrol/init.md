> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideolevelcontrol/init

# init

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Initializes an video level control.

## Declaration

```objectivec
virtual bool init(IOUserVideoDriver *in_driver, bool in_is_settable, float in_decibel_value, IOUserVideoLevelControlRange in_decibel_range, IOUserVideoObjectPropertyElement in_control_element, IOUserVideoObjectPropertyScope in_control_scope, IOUserVideoClassID in_control_class_id);
```

## Parameters

- `in_driver`: The IOUserVideoDriver that owns this object.
- `in_is_settable`: A Boolean value indicating if the control value can be set
- `in_decibel_value`: A float for the controls current decibel level value
- `in_decibel_range`: A IOUserVideoLevelControlRange for the controls decibe minimum and maximum range
- `in_control_element`: The IOUserVideoObjectPropertyElement for the control
- `in_control_scope`: The IOUserVideoObjectPropertyScope for the control
- `in_control_class_id`: The IOUserVideoClassID of the control

<a id="return-value"></a>

## Return Value

True on success.

## See Also

### Creating a level control

- [Create](create.md): Beta. A static factory method that allocates and initializes a video level control.
- [IOUserVideoDriver](../iouservideodriver.md): Beta. A video driver.
- [IOUserVideoLevelControlRange](../iouservideolevelcontrolrange.md): Beta. A control that supports a range of floating-point values.
- [IOUserVideoObjectPropertyElement](../videodriverkit/iouservideoobjectpropertyelement.md): Beta. An integer that identifies, along with the property selector and scope, a specific piece of information about a video object.
- [IOUserVideoObjectPropertyScope](../videodriverkit/iouservideoobjectpropertyscope.md): Beta. A four character code which, along with the selector and element, identifies a specific piece of information about a video object.
