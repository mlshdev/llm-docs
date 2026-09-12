> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodriver/addcustomproperty](https://developer.apple.com/documentation/videodriverkit/iouservideodriver/addcustomproperty)

# AddCustomProperty

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Adds a custom property object to the video driver.

## Declaration

```objectivec
kern_return_t AddCustomProperty(IOUserVideoCustomProperty *in_custom_property);
```

## Parameters

- `in_custom_property`: The custom property object being added.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success

## See Also

### Working with custom properties

- [RemoveCustomProperty](removecustomproperty.md): Removes a custom property object from the video driver.
- [IOUserVideoCustomProperty](../iouservideocustomproperty.md): A custom property object that can be added to or associated with video objects.
