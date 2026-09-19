> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1516336-getcomponentpublicresource

# GetComponentPublicResource

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr GetComponentPublicResource(Component aComponent, OSType resourceType, SInt16 resourceID, Handle *theResource);
```

## Parameters

- `aComponent`:
- `resourceType`:
- `theResource`:

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/component_manager.md#1668759).

## See Also

### Getting Information About Components

- [GetComponentInfo](1516438-getcomponentinfo.md): Deprecated. Returns to your application the registration information for a component.
- [GetComponentPublicIndString](1516516-getcomponentpublicindstring.md): Deprecated.
- [GetComponentPublicResourceList](1516460-getcomponentpublicresourcelist.md): Deprecated.
