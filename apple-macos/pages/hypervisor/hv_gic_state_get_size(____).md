> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_gic_state_get_size(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_gic_state_get_size(_:_:))

# hv_gic_state_get_size(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Gets the size of the buffer required for generic interrupt controller (GIC) state.

## Declaration

```swift
func hv_gic_state_get_size(_ state: hv_gic_state_t, _ gic_state_size: UnsafeMutablePointer<Int>) -> hv_return_t
```

## Parameters

- `state`: The GIC state object.
- `gic_state_size`: The pointer to GIC data size, that the framework writes to upon success.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success; otherwise, an error code.

## See Also

### Getting and setting the GIC’s state

- [hv_gic_state_create()](hv_gic_state_create%28%29.md): Create a generic interrupt controller (GIC) state object.
- [hv_gic_set_state(\_:\_:)](hv_gic_set_state%28____%29.md): Sets the state of a generic interrupt controller (GIC) device.
- [hv_gic_state_get_data(\_:\_:)](hv_gic_state_get_data%28____%29.md): Gets the state data for generic interrupt controller (GIC).
- [hv_gic_state_t](hv_gic_state_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) state’s reference type.
- [OS_hv_gic_state](os_hv_gic_state.md): Methods that provide information on the hypervisor state.

# hv_gic_state_get_size (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Gets the size of the buffer required for generic interrupt controller (GIC) state.

## Declaration

```objectivec
extern hv_return_t hv_gic_state_get_size(hv_gic_state_t state, size_t *gic_state_size);
```

## Parameters

- `state`: The GIC state object.
- `gic_state_size`: The pointer to GIC data size, that the framework writes to upon success.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success; otherwise, an error code.

## See Also

### Getting and setting the GIC’s state

- [hv_gic_state_create](hv_gic_state_create%28%29.md): Create a generic interrupt controller (GIC) state object.
- [hv_gic_set_state](hv_gic_set_state%28____%29.md): Sets the state of a generic interrupt controller (GIC) device.
- [hv_gic_state_get_data](hv_gic_state_get_data%28____%29.md): Gets the state data for generic interrupt controller (GIC).
- [hv_gic_state_t](hv_gic_state_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) state’s reference type.
- [OS_hv_gic_state](os_hv_gic_state.md): Methods that provide information on the hypervisor state.
