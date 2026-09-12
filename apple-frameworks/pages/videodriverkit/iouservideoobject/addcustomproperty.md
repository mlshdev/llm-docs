> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoobject/addcustomproperty](https://developer.apple.com/documentation/videodriverkit/iouservideoobject/addcustomproperty)

# AddCustomProperty

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Adds an custom property object to this object.

## Declaration

```objectivec
virtual kern_return_t AddCustomProperty(IOUserVideoCustomProperty *in_custom_property);
```

## Parameters

- `in_custom_property`: A IOUserVideoCustomProperty object that should be added to the IOUserVideoObject

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success

## See Also

### Using custom properties

- [RemoveCustomProperty](removecustomproperty.md): Removes a custom property from the video object.
- [IOUserVideoCustomProperty](../iouservideocustomproperty.md): A custom property object that can be added to or associated with video objects.
