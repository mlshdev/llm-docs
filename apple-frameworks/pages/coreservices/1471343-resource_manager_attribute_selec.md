> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1471343-resource_manager_attribute_selec

# Resource Manager Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for the Resource Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltResourceMgrAttr](1471343-resource_manager_attribute_selec/gestaltresourcemgrattr.md): The `Gestalt` selector you pass to determine which Resource Manager attributes are present.
- [gestaltPartialRsrcs](1471343-resource_manager_attribute_selec/gestaltpartialrsrcs.md): If `true`, partial resources exist.
- [gestaltHasResourceOverrides](1471343-resource_manager_attribute_selec/gestalthasresourceoverrides.md)
