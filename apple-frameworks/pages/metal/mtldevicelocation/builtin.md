> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevicelocation/builtin](https://developer.apple.com/documentation/metal/mtldevicelocation/builtin)

# MTLDeviceLocation.builtIn (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** macOS 10.15+ (deprecated in 27.0)

A location that indicates the GPU is permanently connected to the system internally.

> Not applicable on Apple Silicon

## Declaration

```swift
case builtIn
```

## See Also

### Determining the GPU’s location

- [MTLDeviceLocation.slot](slot.md): Deprecated. A GPU location that indicates a person connected the GPU to a system’s internal slot.
- [MTLDeviceLocation.external](external.md): Deprecated. A GPU location that indicates a person connected the GPU to the system with an external interface, such as Thunderbolt.
- [MTLDeviceLocation.unspecified](unspecified.md): Deprecated. A value that indicates the system can’t determine how the GPU connects to it.

# MTLDeviceLocationBuiltIn (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** macOS 10.15+ (deprecated in 27.0)

A location that indicates the GPU is permanently connected to the system internally.

> Not applicable on Apple Silicon

## Declaration

```objectivec
MTLDeviceLocationBuiltIn
```

## See Also

### Determining the GPU’s location

- [MTLDeviceLocationSlot](slot.md): Deprecated. A GPU location that indicates a person connected the GPU to a system’s internal slot.
- [MTLDeviceLocationExternal](external.md): Deprecated. A GPU location that indicates a person connected the GPU to the system with an external interface, such as Thunderbolt.
- [MTLDeviceLocationUnspecified](unspecified.md): Deprecated. A value that indicates the system can’t determine how the GPU connects to it.
