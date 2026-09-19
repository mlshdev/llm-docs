> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hypervisor/hv_vcpu_exit_t/reason

# reason (Swift)

**Framework:** Hypervisor  
**Kind:** Instance Property  
**Availability:** macOS

Information about an exit from the vcpu to the host.

## Declaration

```swift
var reason: hv_exit_reason_t
```

## See Also

### Instance Properties

- [exception](exception.md): Information about an exit exception from the vcpu to the host.

# reason (Objective-C)

**Framework:** Hypervisor  
**Kind:** Instance Property  
**Availability:** macOS

Information about an exit from the vcpu to the host.

## Declaration

```objectivec
hv_exit_reason_t reason;
```

## See Also

### Instance Properties

- [exception](exception.md): Information about an exit exception from the vcpu to the host.
