> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_gic_get_icv_reg(_:_:_:)](https://developer.apple.com/documentation/hypervisor/hv_gic_get_icv_reg(_:_:_:))

# hv_gic_get_icv_reg(\_:\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Writes a generic interrupt controller’s (GIC) ICV system register.

## Declaration

```swift
func hv_gic_get_icv_reg(_ vcpu: hv_vcpu_t, _ reg: hv_gic_icv_reg_t, _ value: UnsafeMutablePointer<UInt64>) -> hv_return_t
```

## Parameters

- `vcpu`: The handle for the vCPU.
- `reg`: The value that represents the GIC ICV system register
- `value`: GIC ICV register value to write.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success; otherwise, an error code.

## See Also

### Getting and setting registers

- [hv_gic_get_distributor_reg(\_:\_:)](hv_gic_get_distributor_reg%28____%29.md): Reads a generic interrupt controller (GIC) distributor register.
- [hv_gic_get_msi_reg(\_:\_:)](hv_gic_get_msi_reg%28____%29.md): Reads a generic interrupt controller (GIC) distributor message signaled interrupt (MSI) register.
- [hv_gic_get_icc_reg(\_:\_:\_:)](hv_gic_get_icc_reg%28______%29.md): Reads a generic interrupt controller’s ICC CPU system register.
- [hv_gic_get_ich_reg(\_:\_:\_:)](hv_gic_get_ich_reg%28______%29.md): Reads a generic interrupt controller’s (GIC) ICH virtualization control system register.
- [hv_gic_get_redistributor_reg(\_:\_:\_:)](hv_gic_get_redistributor_reg%28______%29.md): Read a generic interrupt controller (GIC) redistributor register.
- [hv_gic_set_distributor_reg(\_:\_:)](hv_gic_set_distributor_reg%28____%29.md): Writes the provided value to a generic interrupt controller (GIC) distributor register you specify.
- [hv_gic_set_icc_reg(\_:\_:\_:)](hv_gic_set_icc_reg%28______%29.md): Writes to a generic interrupt controller (GIC) ICC cpu system register.
- [hv_gic_set_ich_reg(\_:\_:\_:)](hv_gic_set_ich_reg%28______%29.md): Writes to a generic interrupt controller (GIC) ICH virtualization control system register.
- [hv_gic_set_icv_reg(\_:\_:\_:)](hv_gic_set_icv_reg%28______%29.md): Writes to a generic interrupt controller (GIC) ICV system register.
- [hv_gic_set_msi_reg(\_:\_:)](hv_gic_set_msi_reg%28____%29.md): Writes to a generic interrupt controller distributor message signaled interrupt (MSI) register.
- [hv_gic_set_redistributor_reg(\_:\_:\_:)](hv_gic_set_redistributor_reg%28______%29.md): Writes to a GIC redistributor register.

# hv_gic_get_icv_reg (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Writes a generic interrupt controller’s (GIC) ICV system register.

## Declaration

```objectivec
extern hv_return_t hv_gic_get_icv_reg(hv_vcpu_t vcpu, hv_gic_icv_reg_t reg, uint64_t *value);
```

## Parameters

- `vcpu`: The handle for the vCPU.
- `reg`: The value that represents the GIC ICV system register
- `value`: GIC ICV register value to write.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success; otherwise, an error code.

## See Also

### Getting and setting registers

- [hv_gic_get_distributor_reg](hv_gic_get_distributor_reg%28____%29.md): Reads a generic interrupt controller (GIC) distributor register.
- [hv_gic_get_msi_reg](hv_gic_get_msi_reg%28____%29.md): Reads a generic interrupt controller (GIC) distributor message signaled interrupt (MSI) register.
- [hv_gic_get_icc_reg](hv_gic_get_icc_reg%28______%29.md): Reads a generic interrupt controller’s ICC CPU system register.
- [hv_gic_get_ich_reg](hv_gic_get_ich_reg%28______%29.md): Reads a generic interrupt controller’s (GIC) ICH virtualization control system register.
- [hv_gic_get_redistributor_reg](hv_gic_get_redistributor_reg%28______%29.md): Read a generic interrupt controller (GIC) redistributor register.
- [hv_gic_set_distributor_reg](hv_gic_set_distributor_reg%28____%29.md): Writes the provided value to a generic interrupt controller (GIC) distributor register you specify.
- [hv_gic_set_icc_reg](hv_gic_set_icc_reg%28______%29.md): Writes to a generic interrupt controller (GIC) ICC cpu system register.
- [hv_gic_set_ich_reg](hv_gic_set_ich_reg%28______%29.md): Writes to a generic interrupt controller (GIC) ICH virtualization control system register.
- [hv_gic_set_icv_reg](hv_gic_set_icv_reg%28______%29.md): Writes to a generic interrupt controller (GIC) ICV system register.
- [hv_gic_set_msi_reg](hv_gic_set_msi_reg%28____%29.md): Writes to a generic interrupt controller distributor message signaled interrupt (MSI) register.
- [hv_gic_set_redistributor_reg](hv_gic_set_redistributor_reg%28______%29.md): Writes to a GIC redistributor register.
