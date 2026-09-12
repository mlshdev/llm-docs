> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471986-fpu_type_selectors](https://developer.apple.com/documentation/coreservices/1471986-fpu_type_selectors)

# FPU Type Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify version and availability information for the type of floating-point unit installed.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltFPUType](1471986-fpu_type_selectors/gestaltfputype.md): A constant that represents the type of floating-point unit currently installed, if any.
- [gestaltNoFPU](1471986-fpu_type_selectors/gestaltnofpu.md)
- [gestalt68881](1471986-fpu_type_selectors/gestalt68881.md)
- [gestalt68882](1471986-fpu_type_selectors/gestalt68882.md)
- [gestalt68040FPU](1471986-fpu_type_selectors/gestalt68040fpu.md)
