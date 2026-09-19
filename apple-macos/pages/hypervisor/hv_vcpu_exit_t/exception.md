> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hypervisor/hv_vcpu_exit_t/exception

# exception (Swift)

**Framework:** Hypervisor  
**Kind:** Instance Property  
**Availability:** macOS

Information about an exit exception from the vcpu to the host.

## Declaration

```swift
var exception: hv_vcpu_exit_exception_t
```

## See Also

### Instance Properties

- [reason](reason.md): Information about an exit from the vcpu to the host.

# exception (Objective-C)

**Framework:** Hypervisor  
**Kind:** Instance Property  
**Availability:** macOS

Information about an exit exception from the vcpu to the host.

## Declaration

```objectivec
hv_vcpu_exit_exception_t exception;
```

## See Also

### Instance Properties

- [reason](reason.md): Information about an exit from the vcpu to the host.
