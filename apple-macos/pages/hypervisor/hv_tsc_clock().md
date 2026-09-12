> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_tsc_clock()](https://developer.apple.com/documentation/hypervisor/hv_tsc_clock())

# hv_tsc_clock() (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Returns the value of an abstract clock.

## Declaration

```swift
func hv_tsc_clock() -> UInt64
```

<a id="return-value"></a>

## Return Value

A 64-bit unsigned integer that represents the current clock value.

<a id="Discussion"></a>

## Discussion

The abstract clock ticks at the same rate as the host TSC, offset by an implementation-dependent constant. The clock value increases monotonically.

## See Also

### Time-stamp counter functions

- [hv_vcpu_set_tsc_relative(\_:\_:)](hv_vcpu_set_tsc_relative%28____%29.md): Sets the offset of the guest timestamp-counter (TSC) relative to the Hypervisor’s TSC clock.

# hv_tsc_clock (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Returns the value of an abstract clock.

## Declaration

```objectivec
extern uint64_t hv_tsc_clock();
```

<a id="return-value"></a>

## Return Value

A 64-bit unsigned integer that represents the current clock value.

<a id="Discussion"></a>

## Discussion

The abstract clock ticks at the same rate as the host TSC, offset by an implementation-dependent constant. The clock value increases monotonically.

## See Also

### Time-stamp counter functions

- [hv_vcpu_set_tsc_relative](hv_vcpu_set_tsc_relative%28____%29.md): Sets the offset of the guest timestamp-counter (TSC) relative to the Hypervisor’s TSC clock.
