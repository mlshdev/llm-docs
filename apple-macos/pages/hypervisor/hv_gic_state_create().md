> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_gic_state_create()](https://developer.apple.com/documentation/hypervisor/hv_gic_state_create())

# hv_gic_state_create() (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Create a generic interrupt controller (GIC) state object.

## Declaration

```swift
func hv_gic_state_create() -> hv_gic_state_t
```

<a id="return-value"></a>

## Return Value

A new GIC state object that represents the current GIC state.

<a id="Discussion"></a>

## Discussion

Release this object with [os_release](https://developer.apple.com/documentation/os/os_release-c.func) when it’s no longer needed.

## See Also

### Getting and setting the GIC’s state

- [hv_gic_set_state(\_:\_:)](hv_gic_set_state%28____%29.md): Sets the state of a generic interrupt controller (GIC) device.
- [hv_gic_state_get_size(\_:\_:)](hv_gic_state_get_size%28____%29.md): Gets the size of the buffer required for generic interrupt controller (GIC) state.
- [hv_gic_state_get_data(\_:\_:)](hv_gic_state_get_data%28____%29.md): Gets the state data for generic interrupt controller (GIC).
- [hv_gic_state_t](hv_gic_state_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) state’s reference type.
- [OS_hv_gic_state](os_hv_gic_state.md): Methods that provide information on the hypervisor state.

# hv_gic_state_create (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Create a generic interrupt controller (GIC) state object.

## Declaration

```objectivec
extern hv_gic_state_thv_gic_state_create();
```

<a id="return-value"></a>

## Return Value

A new GIC state object that represents the current GIC state.

<a id="Discussion"></a>

## Discussion

Release this object with [os_release](https://developer.apple.com/documentation/os/os_release-c.func) when it’s no longer needed.

## See Also

### Getting and setting the GIC’s state

- [hv_gic_set_state](hv_gic_set_state%28____%29.md): Sets the state of a generic interrupt controller (GIC) device.
- [hv_gic_state_get_size](hv_gic_state_get_size%28____%29.md): Gets the size of the buffer required for generic interrupt controller (GIC) state.
- [hv_gic_state_get_data](hv_gic_state_get_data%28____%29.md): Gets the state data for generic interrupt controller (GIC).
- [hv_gic_state_t](hv_gic_state_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) state’s reference type.
- [OS_hv_gic_state](os_hv_gic_state.md): Methods that provide information on the hypervisor state.
