> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/os_hv_gic_state](https://developer.apple.com/documentation/hypervisor/os_hv_gic_state)

# OS_hv_gic_state (Swift)

**Framework:** Hypervisor  
**Kind:** Protocol  
**Availability:** macOS

Methods that provide information on the hypervisor state.

## Declaration

```swift
protocol OS_hv_gic_state : NSObjectProtocol
```

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Getting and setting the GIC’s state

- [hv_gic_state_create()](hv_gic_state_create%28%29.md): Create a generic interrupt controller (GIC) state object.
- [hv_gic_set_state(\_:\_:)](hv_gic_set_state%28____%29.md): Sets the state of a generic interrupt controller (GIC) device.
- [hv_gic_state_get_size(\_:\_:)](hv_gic_state_get_size%28____%29.md): Gets the size of the buffer required for generic interrupt controller (GIC) state.
- [hv_gic_state_get_data(\_:\_:)](hv_gic_state_get_data%28____%29.md): Gets the state data for generic interrupt controller (GIC).
- [hv_gic_state_t](hv_gic_state_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) state’s reference type.

# OS_hv_gic_state (Objective-C)

**Framework:** Hypervisor  
**Kind:** Protocol  
**Availability:** macOS

Methods that provide information on the hypervisor state.

## Declaration

```objectivec
@protocol OS_hv_gic_state <NSObject>
```

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Getting and setting the GIC’s state

- [hv_gic_state_create](hv_gic_state_create%28%29.md): Create a generic interrupt controller (GIC) state object.
- [hv_gic_set_state](hv_gic_set_state%28____%29.md): Sets the state of a generic interrupt controller (GIC) device.
- [hv_gic_state_get_size](hv_gic_state_get_size%28____%29.md): Gets the size of the buffer required for generic interrupt controller (GIC) state.
- [hv_gic_state_get_data](hv_gic_state_get_data%28____%29.md): Gets the state data for generic interrupt controller (GIC).
- [hv_gic_state_t](hv_gic_state_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) state’s reference type.
