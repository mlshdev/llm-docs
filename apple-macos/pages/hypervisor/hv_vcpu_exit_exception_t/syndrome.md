> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_exit_exception_t/syndrome](https://developer.apple.com/documentation/hypervisor/hv_vcpu_exit_exception_t/syndrome)

# syndrome (Swift)

**Framework:** Hypervisor  
**Kind:** Instance Property  
**Availability:** macOS

The vCPU exception syndrome causing the exception.

## Declaration

```swift
var syndrome: hv_exception_syndrome_t
```

## See Also

### Instance Properties

- [physical_address](physical_address.md): The intermediate physical address of the exception in the client.
- [virtual_address](virtual_address.md): The vCPU virtual address of the exception.

# syndrome (Objective-C)

**Framework:** Hypervisor  
**Kind:** Instance Property  
**Availability:** macOS

The vCPU exception syndrome causing the exception.

## Declaration

```objectivec
hv_exception_syndrome_t syndrome;
```

## See Also

### Instance Properties

- [physical_address](physical_address.md): The intermediate physical address of the exception in the client.
- [virtual_address](virtual_address.md): The vCPU virtual address of the exception.
