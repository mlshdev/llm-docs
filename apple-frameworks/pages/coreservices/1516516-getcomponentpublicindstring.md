> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516516-getcomponentpublicindstring](https://developer.apple.com/documentation/coreservices/1516516-getcomponentpublicindstring)

# GetComponentPublicIndString

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr GetComponentPublicIndString(Component aComponent, Str255 theString, SInt16 strListID, SInt16 index);
```

## Parameters

- `aComponent`:
- `theString`:

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/component_manager.md#1668759).

## See Also

### Getting Information About Components

- [GetComponentInfo](1516438-getcomponentinfo.md): Deprecated. Returns to your application the registration information for a component.
- [GetComponentPublicResource](1516336-getcomponentpublicresource.md): Deprecated.
- [GetComponentPublicResourceList](1516460-getcomponentpublicresourcelist.md): Deprecated.
