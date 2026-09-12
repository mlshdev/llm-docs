> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_invalidate_tlb(_:_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_invalidate_tlb(_:_:_:))

# hv_vcpu_invalidate_tlb(\_:\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 27.0+

## Declaration

```swift
func hv_vcpu_invalidate_tlb(_ vcpu: hv_vcpu_t, _ op: hv_tlbi_op_t, _ param: UInt64) -> hv_return_t
```

## Parameters

- `vcpu`: ID of the vCPU instance.
- `op`: TLB invalidation operation to perform.
- `param`: Parameter for the TLB operation (e.g., virtual address for VAAE1IS).

<a id="return-value"></a>

## Return Value

HV_SUCCESS on success, an error code otherwise.

<a id="discussion"></a>

## Discussion

Invalidates TLB entries for the specified vCPU.

Must be called by the owning thread. When EL2 is enabled for this VM, this function invalidates TLB entries for the guest hypervisor, not the nested guests.

# hv_vcpu_invalidate_tlb (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 27.0+

## Declaration

```objectivec
extern hv_return_t hv_vcpu_invalidate_tlb(hv_vcpu_t vcpu, hv_tlbi_op_t op, uint64_t param);
```

## Parameters

- `vcpu`: ID of the vCPU instance.
- `op`: TLB invalidation operation to perform.
- `param`: Parameter for the TLB operation (e.g., virtual address for VAAE1IS).

<a id="return-value"></a>

## Return Value

HV_SUCCESS on success, an error code otherwise.

<a id="discussion"></a>

## Discussion

Invalidates TLB entries for the specified vCPU.

Must be called by the owning thread. When EL2 is enabled for this VM, this function invalidates TLB entries for the guest hypervisor, not the nested guests.
