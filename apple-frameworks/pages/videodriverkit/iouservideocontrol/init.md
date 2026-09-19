> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideocontrol/init

# init

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Initializes a video control.

## Declaration

```objectivec
virtual bool init(IOUserVideoDriver *in_driver, bool in_is_settable, IOUserVideoObjectPropertyElement in_control_element, IOUserVideoObjectPropertyScope in_control_scope);
```

## Parameters

- `in_driver`: The IOUserVideoDriver that owns this object.
- `in_is_settable`: A Boolean value indicating if the control value can be set
- `in_control_element`: A IOUserVideoObjectPropertyElement for the control
- `in_control_scope`: A IOUserVideoObjectPropertyScope for the control

<a id="return-value"></a>

## Return Value

True on success.

## See Also

### Creating a control

- [IOUserVideoDriver](../iouservideodriver.md): Beta. A video driver.
- [IOUserVideoObjectPropertyElement](../videodriverkit/iouservideoobjectpropertyelement.md): Beta. An integer that identifies, along with the property selector and scope, a specific piece of information about a video object.
- [IOUserVideoObjectPropertyScope](../videodriverkit/iouservideoobjectpropertyscope.md): Beta. A four character code which, along with the selector and element, identifies a specific piece of information about a video object.
