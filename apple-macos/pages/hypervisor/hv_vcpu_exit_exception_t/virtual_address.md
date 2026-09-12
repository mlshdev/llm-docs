> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_exit_exception_t/virtual_address](https://developer.apple.com/documentation/hypervisor/hv_vcpu_exit_exception_t/virtual_address)

# virtual_address (Swift)

**Framework:** Hypervisor  
**Kind:** Instance Property  
**Availability:** macOS

The vCPU virtual address of the exception.

## Declaration

```swift
var virtual_address: hv_exception_address_t
```

## See Also

### Instance Properties

- [physical_address](physical_address.md): The intermediate physical address of the exception in the client.
- [syndrome](syndrome.md): The vCPU exception syndrome causing the exception.

# virtual_address (Objective-C)

**Framework:** Hypervisor  
**Kind:** Instance Property  
**Availability:** macOS

The vCPU virtual address of the exception.

## Declaration

```objectivec
hv_exception_address_t virtual_address;
```

## See Also

### Instance Properties

- [physical_address](physical_address.md): The intermediate physical address of the exception in the client.
- [syndrome](syndrome.md): The vCPU exception syndrome causing the exception.
