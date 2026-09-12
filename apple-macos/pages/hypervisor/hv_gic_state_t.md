> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_gic_state_t](https://developer.apple.com/documentation/hypervisor/hv_gic_state_t)

# hv_gic_state_t (Swift)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) state’s reference type.

## Declaration

```swift
typealias hv_gic_state_t = any OS_hv_gic_state
```

## See Also

### Getting and setting the GIC’s state

- [hv_gic_state_create()](hv_gic_state_create%28%29.md): Create a generic interrupt controller (GIC) state object.
- [hv_gic_set_state(\_:\_:)](hv_gic_set_state%28____%29.md): Sets the state of a generic interrupt controller (GIC) device.
- [hv_gic_state_get_size(\_:\_:)](hv_gic_state_get_size%28____%29.md): Gets the size of the buffer required for generic interrupt controller (GIC) state.
- [hv_gic_state_get_data(\_:\_:)](hv_gic_state_get_data%28____%29.md): Gets the state data for generic interrupt controller (GIC).
- [OS_hv_gic_state](os_hv_gic_state.md): Methods that provide information on the hypervisor state.

# hv_gic_state_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) state’s reference type.

## Declaration

```objectivec
typedef NSObject<OS_hv_gic_state> * hv_gic_state_t;
```

## See Also

### Getting and setting the GIC’s state

- [hv_gic_state_create](hv_gic_state_create%28%29.md): Create a generic interrupt controller (GIC) state object.
- [hv_gic_set_state](hv_gic_set_state%28____%29.md): Sets the state of a generic interrupt controller (GIC) device.
- [hv_gic_state_get_size](hv_gic_state_get_size%28____%29.md): Gets the size of the buffer required for generic interrupt controller (GIC) state.
- [hv_gic_state_get_data](hv_gic_state_get_data%28____%29.md): Gets the state data for generic interrupt controller (GIC).
- [OS_hv_gic_state](os_hv_gic_state.md): Methods that provide information on the hypervisor state.
