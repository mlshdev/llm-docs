> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideocustomproperty/addcustomproperty](https://developer.apple.com/documentation/videodriverkit/iouservideocustomproperty/addcustomproperty)

# AddCustomProperty

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Always returns `kIOReturnError` because a custom property cannot have a custom property.

## Declaration

```objectivec
virtual kern_return_t AddCustomProperty(IOUserVideoCustomProperty *in_custom_property);
```

## See Also

### Working with custom properties

- [RemoveCustomProperty](removecustomproperty.md): Always returns an error, because a custom property cannot have a custom property.
