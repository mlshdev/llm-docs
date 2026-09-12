> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevicelocation/unspecified](https://developer.apple.com/documentation/metal/mtldevicelocation/unspecified)

# MTLDeviceLocation.unspecified (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** macOS 10.15+ (deprecated in 27.0)

A value that indicates the system can’t determine how the GPU connects to it.

> Not applicable on Apple Silicon

## Declaration

```swift
case unspecified
```

## See Also

### Determining the GPU’s location

- [MTLDeviceLocation.builtIn](builtin.md): Deprecated. A location that indicates the GPU is permanently connected to the system internally.
- [MTLDeviceLocation.slot](slot.md): Deprecated. A GPU location that indicates a person connected the GPU to a system’s internal slot.
- [MTLDeviceLocation.external](external.md): Deprecated. A GPU location that indicates a person connected the GPU to the system with an external interface, such as Thunderbolt.

# MTLDeviceLocationUnspecified (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** macOS 10.15+ (deprecated in 27.0)

A value that indicates the system can’t determine how the GPU connects to it.

> Not applicable on Apple Silicon

## Declaration

```objectivec
MTLDeviceLocationUnspecified
```

## See Also

### Determining the GPU’s location

- [MTLDeviceLocationBuiltIn](builtin.md): Deprecated. A location that indicates the GPU is permanently connected to the system internally.
- [MTLDeviceLocationSlot](slot.md): Deprecated. A GPU location that indicates a person connected the GPU to a system’s internal slot.
- [MTLDeviceLocationExternal](external.md): Deprecated. A GPU location that indicates a person connected the GPU to the system with an external interface, such as Thunderbolt.
