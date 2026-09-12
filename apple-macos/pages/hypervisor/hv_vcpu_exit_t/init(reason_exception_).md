> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_exit_t/init(reason:exception:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_exit_t/init(reason:exception:))

# init(reason:exception:)

**Framework:** Hypervisor  
**Kind:** Initializer  
**Availability:** macOS

Creates a new virtual cpu exit structure with a reason and exception that you provide.

## Declaration

```swift
init(reason: hv_exit_reason_t, exception: hv_vcpu_exit_exception_t)
```

## Parameters

- `reason`: The [hv_exit_reason_t](../hv_exit_reason_t.md) result code that describes the reason for the exception.
- `exception`: The exception struture.

## See Also

### Initializers

- [init()](init%28%29.md): Creates a new exit reason structure.
