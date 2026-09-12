> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_set_tsc_relative(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_set_tsc_relative(_:_:))

# hv_vcpu_set_tsc_relative(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Sets the offset of the guest timestamp-counter (TSC) relative to the Hypervisor’s TSC clock.

## Declaration

```swift
func hv_vcpu_set_tsc_relative(_ vcpu: hv_vcpuid_t, _ offset: Int64) -> hv_return_t
```

## Parameters

- `vcpu`: The vCPU ID.
- `offset`: The relative offset value to apply to VMCS TSC-offset field.

<a id="return-value"></a>

## Return Value

`0` on success, or an [hv_return_t](hv_return_t.md) error code.

<a id="Discussion"></a>

## Discussion

Use this function to set the TSC-offset field in the VMCS so that the TSC value in the guest is the value of [hv_tsc_clock()](hv_tsc_clock%28%29.md) plus the given offset. The examples below show simple ways to calculate and set the TSC offset:

```objc
// initialization - set guest TSC to zero
int64_t vtsc_offset = - scale * hv_tsc_clock();
hv_vcpu_tsc_relative_offset(vcpu, vtsc_offset);

// compute the guest TSC at runtime from the host
uint64_t vtsc = scale * hv_tsc_clock() + vtsc_offset;

// guest writing to the IA32_TSC MSR
vtsc_offset = newTSCvalue - scale * hv_tsc_clock();
hv_vcpu_tsc_relative_offset(vcpu, vtsc_offset);

// guest writing to the IA32_TSC_ADJUST MSR
vtsc_offset += adjustment;
hv_vcpu_tsc_relative_offset(vcpu, vtsc_offset);

// at entry to inner hypervisor
hv_vcpu_tsc_relative_offset(vcpu, vtsc_offset);

// at entry to inner guest
hv_vcpu_tsc_relative_offset(vcpu, vtsc_offset + nested_offset);
```

## See Also

### Time-stamp counter functions

- [hv_tsc_clock()](hv_tsc_clock%28%29.md): Returns the value of an abstract clock.

# hv_vcpu_set_tsc_relative (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Sets the offset of the guest timestamp-counter (TSC) relative to the Hypervisor’s TSC clock.

## Declaration

```objectivec
extern hv_return_t hv_vcpu_set_tsc_relative(hv_vcpuid_t vcpu, int64_t offset);
```

## Parameters

- `vcpu`: The vCPU ID.
- `offset`: The relative offset value to apply to VMCS TSC-offset field.

<a id="return-value"></a>

## Return Value

`0` on success, or an [hv_return_t](hv_return_t.md) error code.

<a id="Discussion"></a>

## Discussion

Use this function to set the TSC-offset field in the VMCS so that the TSC value in the guest is the value of [hv_tsc_clock](hv_tsc_clock%28%29.md) plus the given offset. The examples below show simple ways to calculate and set the TSC offset:

```objc
// initialization - set guest TSC to zero
int64_t vtsc_offset = - scale * hv_tsc_clock();
hv_vcpu_tsc_relative_offset(vcpu, vtsc_offset);

// compute the guest TSC at runtime from the host
uint64_t vtsc = scale * hv_tsc_clock() + vtsc_offset;

// guest writing to the IA32_TSC MSR
vtsc_offset = newTSCvalue - scale * hv_tsc_clock();
hv_vcpu_tsc_relative_offset(vcpu, vtsc_offset);

// guest writing to the IA32_TSC_ADJUST MSR
vtsc_offset += adjustment;
hv_vcpu_tsc_relative_offset(vcpu, vtsc_offset);

// at entry to inner hypervisor
hv_vcpu_tsc_relative_offset(vcpu, vtsc_offset);

// at entry to inner guest
hv_vcpu_tsc_relative_offset(vcpu, vtsc_offset + nested_offset);
```

## See Also

### Time-stamp counter functions

- [hv_tsc_clock](hv_tsc_clock%28%29.md): Returns the value of an abstract clock.
