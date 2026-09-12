> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472336-mmu_type_selectors](https://developer.apple.com/documentation/coreservices/1472336-mmu_type_selectors)

# MMU Type Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify information about the type of MMU installed.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltMMUType](1472336-mmu_type_selectors/gestaltmmutype.md): The selector you pass to the `Gestalt` function to determine the type of MMU currently installed.
- [gestaltNoMMU](1472336-mmu_type_selectors/gestaltnommu.md)
- [gestaltAMU](1472336-mmu_type_selectors/gestaltamu.md)
- [gestalt68851](1472336-mmu_type_selectors/gestalt68851.md)
- [gestalt68030MMU](1472336-mmu_type_selectors/gestalt68030mmu.md)
- [gestalt68040MMU](1472336-mmu_type_selectors/gestalt68040mmu.md)
- [gestaltEMMU1](1472336-mmu_type_selectors/gestaltemmu1.md)
