> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_return_t](https://developer.apple.com/documentation/hypervisor/hv_return_t)

# hv_return_t (Swift)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

The return type of framework functions.

## Declaration

```swift
typealias hv_return_t = mach_error_t
```

## Topics

### Return Values

- [HV_SUCCESS](hv_success.md): The operation completed successfully.
- [HV_ERROR](hv_error.md): The operation was unsuccessful.
- [HV_BUSY](hv_busy.md): The operation was unsuccessful because the owning resource was busy.
- [HV_BAD_ARGUMENT](hv_bad_argument.md): The operation was unsuccessful because the function call had an invalid argument.
- [HV_NO_RESOURCES](hv_no_resources.md): The operation was unsuccessful because the host had no resources available to complete the request.
- [HV_NO_DEVICE](hv_no_device.md): The operation was unsuccessful because no VM or vCPU was available.
- [HV_UNSUPPORTED](hv_unsupported.md): The operation requested isn’t supported by the hypervisor.

## See Also

### Common data types

- [Hypervisor Errors](hypervisor-errors.md): Return codes returned by framework functions.

# hv_return_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

The return type of framework functions.

## Declaration

```objectivec
typedef mach_error_t hv_return_t;
```

## Topics

### Return Values

- [HV_SUCCESS](hv_success.md): The operation completed successfully.
- [HV_ERROR](hv_error.md): The operation was unsuccessful.
- [HV_BUSY](hv_busy.md): The operation was unsuccessful because the owning resource was busy.
- [HV_BAD_ARGUMENT](hv_bad_argument.md): The operation was unsuccessful because the function call had an invalid argument.
- [HV_NO_RESOURCES](hv_no_resources.md): The operation was unsuccessful because the host had no resources available to complete the request.
- [HV_NO_DEVICE](hv_no_device.md): The operation was unsuccessful because no VM or vCPU was available.
- [HV_UNSUPPORTED](hv_unsupported.md): The operation requested isn’t supported by the hypervisor.

## See Also

### Common data types

- [Hypervisor Errors](hypervisor-errors.md): Return codes returned by framework functions.
