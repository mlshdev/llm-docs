> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideocustomproperty/removecustomproperty

# RemoveCustomProperty

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Always returns an error, because a custom property cannot have a custom property.

## Declaration

```objectivec
virtual kern_return_t RemoveCustomProperty(IOUserVideoCustomProperty *in_custom_property);
```

## See Also

### Working with custom properties

- [AddCustomProperty](addcustomproperty.md): Beta. Always returns `kIOReturnError` because a custom property cannot have a custom property.
