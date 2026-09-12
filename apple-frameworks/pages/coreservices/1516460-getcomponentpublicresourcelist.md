> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516460-getcomponentpublicresourcelist](https://developer.apple.com/documentation/coreservices/1516460-getcomponentpublicresourcelist)

# GetComponentPublicResourceList

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr GetComponentPublicResourceList(OSType resourceType, SInt16 resourceID, SInt32 flags, ComponentDescription *cd, GetMissingComponentResourceUPP missingProc, void *refCon, void *atomContainerPtr);
```

## Parameters

- `resourceType`:
- `cd`:
- `missingProc`:

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/component_manager.md#1668759).

## See Also

### Getting Information About Components

- [GetComponentInfo](1516438-getcomponentinfo.md): Deprecated. Returns to your application the registration information for a component.
- [GetComponentPublicIndString](1516516-getcomponentpublicindstring.md): Deprecated.
- [GetComponentPublicResource](1516336-getcomponentpublicresource.md): Deprecated.
