> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_gic_int_maintenance](https://developer.apple.com/documentation/hypervisor/hv_gic_int_maintenance)

# HV_GIC_INT_MAINTENANCE (Swift)

**Framework:** Hypervisor  
**Kind:** Global Variable  
**Availability:** macOS

A register Hypervisor uses to signal virtual Interrupts (vIRQs) that the framework sends to guests running at exception level 2 (EL2).

## Declaration

```swift
var HV_GIC_INT_MAINTENANCE: hv_gic_intid_t { get }
```

<a id="Discussion"></a>

## Discussion

For more information on maintenance interrupts, see *maintenance interrupts* in the [ARM Generic Interrupt Controller (GIC) v3](https://developer.arm.com/documentation/ihi0069/latest/) specification.

## See Also

### Reserved interrupt identifiers

- [hv_gic_get_intid(\_:\_:)](hv_gic_get_intid%28____%29.md): Gets the interrupt ID for reserved interrupts.
- [HV_GIC_INT_PERFORMANCE_MONITOR](hv_gic_int_performance_monitor.md): A register the framework uses to count GIC related events.
- [HV_GIC_INT_EL1_PHYSICAL_TIMER](hv_gic_int_el1_physical_timer.md)
- [HV_GIC_INT_EL2_PHYSICAL_TIMER](hv_gic_int_el2_physical_timer.md)
- [HV_GIC_INT_EL1_VIRTUAL_TIMER](hv_gic_int_el1_virtual_timer.md)

# HV_GIC_INT_MAINTENANCE (Objective-C)

**Framework:** Hypervisor  
**Kind:** Enumeration Case  
**Availability:** macOS

A register Hypervisor uses to signal virtual Interrupts (vIRQs) that the framework sends to guests running at exception level 2 (EL2).

## Declaration

```objectivec
HV_GIC_INT_MAINTENANCE
```

<a id="Discussion"></a>

## Discussion

For more information on maintenance interrupts, see *maintenance interrupts* in the [ARM Generic Interrupt Controller (GIC) v3](https://developer.arm.com/documentation/ihi0069/latest/) specification.

## See Also

### Reserved interrupt identifiers

- [hv_gic_get_intid](hv_gic_get_intid%28____%29.md): Gets the interrupt ID for reserved interrupts.
- [HV_GIC_INT_PERFORMANCE_MONITOR](hv_gic_int_performance_monitor.md): A register the framework uses to count GIC related events.
- [HV_GIC_INT_EL1_PHYSICAL_TIMER](hv_gic_int_el1_physical_timer.md)
- [HV_GIC_INT_EL2_PHYSICAL_TIMER](hv_gic_int_el2_physical_timer.md)
- [HV_GIC_INT_EL1_VIRTUAL_TIMER](hv_gic_int_el1_virtual_timer.md)
