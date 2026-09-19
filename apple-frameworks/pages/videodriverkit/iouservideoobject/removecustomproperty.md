> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoobject/removecustomproperty

# RemoveCustomProperty

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [AddCustomProperty](addcustomproperty.md): Beta. Adds an custom property object to this object.
- [IOUserVideoCustomProperty](../iouservideocustomproperty.md): Beta. A custom property object that can be added to or associated with video objects.
