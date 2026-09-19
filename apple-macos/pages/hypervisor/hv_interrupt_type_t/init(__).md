> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hypervisor/hv_interrupt_type_t/init(_:)

# init(\_:)

**Framework:** Hypervisor  
**Kind:** Initializer  
**Availability:** macOS

Creates a new interrupt instance with the value you provide.

## Declaration

```swift
init(_ rawValue: UInt32)
```

## Parameters

- `rawValue`: An unsigned 32-bit integer that represents the vCPU interrupts.

## See Also

### Initializers

- [init(rawValue:)](init%28rawvalue_%29.md): Creates a new interrupt instance with the integer value you provide.
