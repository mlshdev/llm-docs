> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_gic_reset()](https://developer.apple.com/documentation/hypervisor/hv_gic_reset())

# hv_gic_reset() (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Resets the generic interrupt controller (GIC) device.

## Declaration

```swift
func hv_gic_reset() -> hv_return_t
```

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success, an error code otherwise.

<a id="Discussion"></a>

## Discussion

When you’re resetting the virtual machine, call this function to reset the GIC distributor, redistributor registers and the internal state of the device.

# hv_gic_reset (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Resets the generic interrupt controller (GIC) device.

## Declaration

```objectivec
extern hv_return_t hv_gic_reset();
```

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success, an error code otherwise.

<a id="Discussion"></a>

## Discussion

When you’re resetting the virtual machine, call this function to reset the GIC distributor, redistributor registers and the internal state of the device.
