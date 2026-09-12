> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vm_sync_tsc(_:)](https://developer.apple.com/documentation/hypervisor/hv_vm_sync_tsc(_:))

# hv_vm_sync_tsc(\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.10+

Synchronizes guest timestamp counters (TSC) across all vCPUs.

## Declaration

```swift
func hv_vm_sync_tsc(_ tsc: UInt64) -> hv_return_t
```

## Parameters

- `tsc`: The value of the guest TSC.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

# hv_vm_sync_tsc (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.10+

Synchronizes guest timestamp counters (TSC) across all vCPUs.

## Declaration

```objectivec
extern hv_return_t hv_vm_sync_tsc(uint64_t tsc);
```

## Parameters

- `tsc`: The value of the guest TSC.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).
