> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodriver/removecustomproperty](https://developer.apple.com/documentation/videodriverkit/iouservideodriver/removecustomproperty)

# RemoveCustomProperty

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

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

- [AddCustomProperty](addcustomproperty.md): Adds a custom property object to the video driver.
- [IOUserVideoCustomProperty](../iouservideocustomproperty.md): A custom property object that can be added to or associated with video objects.
