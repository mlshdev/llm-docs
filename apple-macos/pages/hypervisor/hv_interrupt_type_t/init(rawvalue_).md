> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hypervisor/hv_interrupt_type_t/init(rawvalue:)

# init(rawValue:)

**Framework:** Hypervisor  
**Kind:** Initializer  
**Availability:** macOS

Creates a new interrupt instance with the integer value you provide.

## Declaration

```swift
init(rawValue: UInt32)
```

## Parameters

- `rawValue`: An unsigned 32-bit integer that represents the vCPU interrupts.

## See Also

### Initializers

- [init(\_:)](init%28__%29.md): Creates a new interrupt instance with the value you provide.
