> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_exit_exception_t/physical_address](https://developer.apple.com/documentation/hypervisor/hv_vcpu_exit_exception_t/physical_address)

# physical_address (Swift)

**Framework:** Hypervisor  
**Kind:** Instance Property  
**Availability:** macOS

The intermediate physical address of the exception in the client.

## Declaration

```swift
var physical_address: hv_ipa_t
```

## See Also

### Instance Properties

- [syndrome](syndrome.md): The vCPU exception syndrome causing the exception.
- [virtual_address](virtual_address.md): The vCPU virtual address of the exception.

# physical_address (Objective-C)

**Framework:** Hypervisor  
**Kind:** Instance Property  
**Availability:** macOS

The intermediate physical address of the exception in the client.

## Declaration

```objectivec
hv_ipa_t physical_address;
```

## See Also

### Instance Properties

- [syndrome](syndrome.md): The vCPU exception syndrome causing the exception.
- [virtual_address](virtual_address.md): The vCPU virtual address of the exception.
