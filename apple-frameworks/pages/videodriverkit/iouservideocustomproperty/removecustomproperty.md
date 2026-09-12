> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideocustomproperty/removecustomproperty](https://developer.apple.com/documentation/videodriverkit/iouservideocustomproperty/removecustomproperty)

# RemoveCustomProperty

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Always returns an error, because a custom property cannot have a custom property.

## Declaration

```objectivec
virtual kern_return_t RemoveCustomProperty(IOUserVideoCustomProperty *in_custom_property);
```

## See Also

### Working with custom properties

- [AddCustomProperty](addcustomproperty.md): Always returns `kIOReturnError` because a custom property cannot have a custom property.
