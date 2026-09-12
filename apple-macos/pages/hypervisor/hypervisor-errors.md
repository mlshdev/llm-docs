> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hypervisor-errors](https://developer.apple.com/documentation/hypervisor/hypervisor-errors)

# Hypervisor Errors

**Interface languages:** Swift, Objective-C

**Framework:** Hypervisor  
**Kind:** API Collection

Return codes returned by framework functions.

## Topics

### Errors

- [HV_SUCCESS](hv_success.md): The operation completed successfully.
- [HV_ERROR](hv_error.md): The operation was unsuccessful.
- [HV_BUSY](hv_busy.md): The operation was unsuccessful because the owning resource was busy.
- [HV_BAD_ARGUMENT](hv_bad_argument.md): The operation was unsuccessful because the function call had an invalid argument.
- [HV_NO_RESOURCES](hv_no_resources.md): The operation was unsuccessful because the host had no resources available to complete the request.
- [HV_NO_DEVICE](hv_no_device.md): The operation was unsuccessful because no VM or vCPU was available.
- [HV_UNSUPPORTED](hv_unsupported.md): The operation requested isn’t supported by the hypervisor.
- [HV_DENIED](hv_denied.md): The system didn’t allow the requested operation.

## See Also

### Common data types

- [hv_return_t](hv_return_t.md): The return type of framework functions.
