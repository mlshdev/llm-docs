> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_exception_syndrome_t](https://developer.apple.com/documentation/hypervisor/hv_exception_syndrome_t)

# hv_exception_syndrome_t (Swift)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

Type of a vCPU exception syndrome.

## Declaration

```swift
typealias hv_exception_syndrome_t = UInt64
```

<a id="Discussion"></a>

## Discussion

This corresponds to Exception Syndrome Register  EL2 (ESR_EL2).

## See Also

### Exit reasons

- [hv_exit_reason_t](hv_exit_reason_t.md): The type that describes the event that triggered a guest exit to the host.
- [hv_exception_address_t](hv_exception_address_t.md): Type of a vCPU exception virtual address.

# hv_exception_syndrome_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

Type of a vCPU exception syndrome.

## Declaration

```objectivec
typedef uint64_t hv_exception_syndrome_t;
```

<a id="Discussion"></a>

## Discussion

This corresponds to Exception Syndrome Register  EL2 (ESR_EL2).

## See Also

### Exit reasons

- [hv_exit_reason_t](hv_exit_reason_t.md): The type that describes the event that triggered a guest exit to the host.
- [hv_exception_address_t](hv_exception_address_t.md): Type of a vCPU exception virtual address.
