> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516455-set_default_component_flags](https://developer.apple.com/documentation/coreservices/1516455-set_default_component_flags)

# Set Default Component Flags

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [defaultComponentIdentical](1516455-set_default_component_flags/defaultcomponentidentical.md): Deprecated. The Component Manager places the component specified in the call to `SetDefaultComponent` in front of all other components that have the same component description.
- [defaultComponentAnyFlags](1516455-set_default_component_flags/defaultcomponentanyflags.md): Deprecated. The Component Manager ignores the value of the `componentFlags` field during the reorder operation.
- [defaultComponentAnyManufacturer](1516455-set_default_component_flags/defaultcomponentanymanufacturer.md): Deprecated. The Component Manager ignores the value of the `componentManufacturer` field during the reorder operation.
- [defaultComponentAnySubType](1516455-set_default_component_flags/defaultcomponentanysubtype.md): Deprecated. The Component Manager ignores the value of the `componentSubType` field during the reorder operation.
- [defaultComponentAnyFlagsAnyManufacturer](1516455-set_default_component_flags/defaultcomponentanyflagsanymanufacturer.md): Deprecated.
- [defaultComponentAnyFlagsAnyManufacturerAnySubType](1516455-set_default_component_flags/defaultcomponentanyflagsanymanufactureranysubtype.md): Deprecated.
