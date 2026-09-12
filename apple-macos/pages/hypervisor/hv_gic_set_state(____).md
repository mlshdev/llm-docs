> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_gic_set_state(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_gic_set_state(_:_:))

# hv_gic_set_state(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Sets the state of a generic interrupt controller (GIC) device.

## Declaration

```swift
func hv_gic_set_state(_ gic_state_data: UnsafeRawPointer, _ gic_state_size: Int) -> hv_return_t
```

## Parameters

- `gic_state_data`: A pointer to the state buffer to use to set the GIC.
- `gic_state_size`: Size of GIC state buffer, in bytes.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success; otherwise, an error code.

<a id="Discussion"></a>

## Discussion

Use this method to restore the state of a GIC. You can only restore a GIC’s state after creating a GIC device and vCPUs and before the vCPUs are running. Restore the rest of the virtual machine including GIC CPU registers with values that are compatible with the [hv_gic_state_t](hv_gic_state_t.md).

In some cases this method can fail if a software update has changed the host in a way that would be incompatible with the previous format.

## See Also

### Getting and setting the GIC’s state

- [hv_gic_state_create()](hv_gic_state_create%28%29.md): Create a generic interrupt controller (GIC) state object.
- [hv_gic_state_get_size(\_:\_:)](hv_gic_state_get_size%28____%29.md): Gets the size of the buffer required for generic interrupt controller (GIC) state.
- [hv_gic_state_get_data(\_:\_:)](hv_gic_state_get_data%28____%29.md): Gets the state data for generic interrupt controller (GIC).
- [hv_gic_state_t](hv_gic_state_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) state’s reference type.
- [OS_hv_gic_state](os_hv_gic_state.md): Methods that provide information on the hypervisor state.

# hv_gic_set_state (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Sets the state of a generic interrupt controller (GIC) device.

## Declaration

```objectivec
extern hv_return_t hv_gic_set_state(const void *gic_state_data, size_t gic_state_size);
```

## Parameters

- `gic_state_data`: A pointer to the state buffer to use to set the GIC.
- `gic_state_size`: Size of GIC state buffer, in bytes.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success; otherwise, an error code.

<a id="Discussion"></a>

## Discussion

Use this method to restore the state of a GIC. You can only restore a GIC’s state after creating a GIC device and vCPUs and before the vCPUs are running. Restore the rest of the virtual machine including GIC CPU registers with values that are compatible with the [hv_gic_state_t](hv_gic_state_t.md).

In some cases this method can fail if a software update has changed the host in a way that would be incompatible with the previous format.

## See Also

### Getting and setting the GIC’s state

- [hv_gic_state_create](hv_gic_state_create%28%29.md): Create a generic interrupt controller (GIC) state object.
- [hv_gic_state_get_size](hv_gic_state_get_size%28____%29.md): Gets the size of the buffer required for generic interrupt controller (GIC) state.
- [hv_gic_state_get_data](hv_gic_state_get_data%28____%29.md): Gets the state data for generic interrupt controller (GIC).
- [hv_gic_state_t](hv_gic_state_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) state’s reference type.
- [OS_hv_gic_state](os_hv_gic_state.md): Methods that provide information on the hypervisor state.
