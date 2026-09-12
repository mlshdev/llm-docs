> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_denied](https://developer.apple.com/documentation/hypervisor/hv_denied)

# HV_DENIED (Swift)

**Framework:** Hypervisor  
**Kind:** Global Variable  
**Availability:** macOS

The system didn’t allow the requested operation.

## Declaration

```swift
var HV_DENIED: Int { get }
```

## See Also

### Errors

- [HV_SUCCESS](hv_success.md): The operation completed successfully.
- [HV_ERROR](hv_error.md): The operation was unsuccessful.
- [HV_BUSY](hv_busy.md): The operation was unsuccessful because the owning resource was busy.
- [HV_BAD_ARGUMENT](hv_bad_argument.md): The operation was unsuccessful because the function call had an invalid argument.
- [HV_NO_RESOURCES](hv_no_resources.md): The operation was unsuccessful because the host had no resources available to complete the request.
- [HV_NO_DEVICE](hv_no_device.md): The operation was unsuccessful because no VM or vCPU was available.
- [HV_UNSUPPORTED](hv_unsupported.md): The operation requested isn’t supported by the hypervisor.

# HV_DENIED (Objective-C)

**Framework:** Hypervisor  
**Kind:** Enumeration Case  
**Availability:** macOS

The system didn’t allow the requested operation.

## Declaration

```objectivec
HV_DENIED
```

## See Also

### Errors

- [HV_SUCCESS](hv_success.md): The operation completed successfully.
- [HV_ERROR](hv_error.md): The operation was unsuccessful.
- [HV_BUSY](hv_busy.md): The operation was unsuccessful because the owning resource was busy.
- [HV_BAD_ARGUMENT](hv_bad_argument.md): The operation was unsuccessful because the function call had an invalid argument.
- [HV_NO_RESOURCES](hv_no_resources.md): The operation was unsuccessful because the host had no resources available to complete the request.
- [HV_NO_DEVICE](hv_no_device.md): The operation was unsuccessful because no VM or vCPU was available.
- [HV_UNSUPPORTED](hv_unsupported.md): The operation requested isn’t supported by the hypervisor.
