> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_gic_state_get_data(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_gic_state_get_data(_:_:))

# hv_gic_state_get_data(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Gets the state data for generic interrupt controller (GIC).

## Declaration

```swift
func hv_gic_state_get_data(_ state: hv_gic_state_t, _ gic_state_data: UnsafeMutableRawPointer) -> hv_return_t
```

## Parameters

- `state`: The GIC state object.
- `gic_state_data`: Pointer to GIC state buffer that the framework writes to upon success.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success; otherwise, an error code.

<a id="Discussion"></a>

## Discussion

The function returns an opaque data buffer that contains the complete serialized state of the device, except for the GIC CPU registers. You can write the data to a file and is stable. It’s also versioned which allows the framework to detect incompatibilities when it restores the state. The size of this GIC state buffer must be at least as large as the size returned by [hv_gic_state_get_size(\_:\_:)](hv_gic_state_get_size%28____%29.md).

You can read GIC CPU system registers separately, and save them to be able to restore the CPU state for the virtual machine.

## See Also

### Getting and setting the GIC’s state

- [hv_gic_state_create()](hv_gic_state_create%28%29.md): Create a generic interrupt controller (GIC) state object.
- [hv_gic_set_state(\_:\_:)](hv_gic_set_state%28____%29.md): Sets the state of a generic interrupt controller (GIC) device.
- [hv_gic_state_get_size(\_:\_:)](hv_gic_state_get_size%28____%29.md): Gets the size of the buffer required for generic interrupt controller (GIC) state.
- [hv_gic_state_t](hv_gic_state_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) state’s reference type.
- [OS_hv_gic_state](os_hv_gic_state.md): Methods that provide information on the hypervisor state.

# hv_gic_state_get_data (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Gets the state data for generic interrupt controller (GIC).

## Declaration

```objectivec
extern hv_return_t hv_gic_state_get_data(hv_gic_state_t state, void *gic_state_data);
```

## Parameters

- `state`: The GIC state object.
- `gic_state_data`: Pointer to GIC state buffer that the framework writes to upon success.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success; otherwise, an error code.

<a id="Discussion"></a>

## Discussion

The function returns an opaque data buffer that contains the complete serialized state of the device, except for the GIC CPU registers. You can write the data to a file and is stable. It’s also versioned which allows the framework to detect incompatibilities when it restores the state. The size of this GIC state buffer must be at least as large as the size returned by [hv_gic_state_get_size](hv_gic_state_get_size%28____%29.md).

You can read GIC CPU system registers separately, and save them to be able to restore the CPU state for the virtual machine.

## See Also

### Getting and setting the GIC’s state

- [hv_gic_state_create](hv_gic_state_create%28%29.md): Create a generic interrupt controller (GIC) state object.
- [hv_gic_set_state](hv_gic_set_state%28____%29.md): Sets the state of a generic interrupt controller (GIC) device.
- [hv_gic_state_get_size](hv_gic_state_get_size%28____%29.md): Gets the size of the buffer required for generic interrupt controller (GIC) state.
- [hv_gic_state_t](hv_gic_state_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) state’s reference type.
- [OS_hv_gic_state](os_hv_gic_state.md): Methods that provide information on the hypervisor state.
