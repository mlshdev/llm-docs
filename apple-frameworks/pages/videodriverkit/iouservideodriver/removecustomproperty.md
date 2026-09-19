> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodriver/removecustomproperty

# RemoveCustomProperty

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Removes a custom property object from the video driver.

## Declaration

```objectivec
kern_return_t RemoveCustomProperty(IOUserVideoCustomProperty *in_custom_property);
```

## Parameters

- `in_custom_property`: An IOUserVideoCustomProperty object to remove from the IOUserVideoDriver.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success.

## See Also

### Working with custom properties

- [AddCustomProperty](addcustomproperty.md): Beta. Adds a custom property object to the video driver.
- [IOUserVideoCustomProperty](../iouservideocustomproperty.md): Beta. A custom property object that can be added to or associated with video objects.
