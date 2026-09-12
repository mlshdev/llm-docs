> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevicelocation/slot](https://developer.apple.com/documentation/metal/mtldevicelocation/slot)

# MTLDeviceLocation.slot (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** macOS 10.15+ (deprecated in 27.0)

A GPU location that indicates a person connected the GPU to a system’s internal slot.

> Not applicable on Apple Silicon

## Declaration

```swift
case slot
```

## See Also

### Determining the GPU’s location

- [MTLDeviceLocation.builtIn](builtin.md): Deprecated. A location that indicates the GPU is permanently connected to the system internally.
- [MTLDeviceLocation.external](external.md): Deprecated. A GPU location that indicates a person connected the GPU to the system with an external interface, such as Thunderbolt.
- [MTLDeviceLocation.unspecified](unspecified.md): Deprecated. A value that indicates the system can’t determine how the GPU connects to it.

# MTLDeviceLocationSlot (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** macOS 10.15+ (deprecated in 27.0)

A GPU location that indicates a person connected the GPU to a system’s internal slot.

> Not applicable on Apple Silicon

## Declaration

```objectivec
MTLDeviceLocationSlot
```

## See Also

### Determining the GPU’s location

- [MTLDeviceLocationBuiltIn](builtin.md): Deprecated. A location that indicates the GPU is permanently connected to the system internally.
- [MTLDeviceLocationExternal](external.md): Deprecated. A GPU location that indicates a person connected the GPU to the system with an external interface, such as Thunderbolt.
- [MTLDeviceLocationUnspecified](unspecified.md): Deprecated. A value that indicates the system can’t determine how the GPU connects to it.
