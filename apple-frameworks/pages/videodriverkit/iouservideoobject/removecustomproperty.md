> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoobject/removecustomproperty](https://developer.apple.com/documentation/videodriverkit/iouservideoobject/removecustomproperty)

# RemoveCustomProperty

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Removes a custom property from the video object.

## Declaration

```objectivec
virtual kern_return_t RemoveCustomProperty(IOUserVideoCustomProperty *in_custom_property);
```

## Parameters

- `in_custom_property`: A IOUserVideoCustomProperty object that should be removed from the IOUserVideoObject

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success

## See Also

### Using custom properties

- [AddCustomProperty](addcustomproperty.md): Adds an custom property object to this object.
- [IOUserVideoCustomProperty](../iouservideocustomproperty.md): A custom property object that can be added to or associated with video objects.
