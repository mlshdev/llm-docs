> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_interrupt_type_t](https://developer.apple.com/documentation/hypervisor/hv_interrupt_type_t)

# hv_interrupt_type_t (Swift)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS

The type that defines the vCPU’s interrupts.

## Declaration

```swift
struct hv_interrupt_type_t
```

<a id="overview"></a>

## Overview

To raise interrupts on a vCPU, call [hv_vcpu_set_pending_interrupt(\_:\_:\_:)](hv_vcpu_set_pending_interrupt%28______%29.md) prior to calling [hv_vcpu_run(\_:)](hv_vcpu_run%28__%29.md).

## Topics

### Instance properties

- [rawValue](hv_interrupt_type_t/rawvalue.md): An unisgned 32-bit integer that describes the interrupts.

### Initializers

- [init(\_:)](hv_interrupt_type_t/init%28__%29.md): Creates a new interrupt instance with the value you provide.
- [init(rawValue:)](hv_interrupt_type_t/init%28rawvalue_%29.md): Creates a new interrupt instance with the integer value you provide.

### Interrupt levels

- [HV_INTERRUPT_TYPE_FIQ](hv_interrupt_type_fiq.md): ARM Fast Interrupt Request.
- [HV_INTERRUPT_TYPE_IRQ](hv_interrupt_type_irq.md): ARM Interrupt Request.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Runtime

- [hv_vcpu_run(\_:)](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.
- [hv_vcpus_exit(\_:\_:)](hv_vcpus_exit%28____%29.md): Forces an immediate exit of a set of vCPUs of the VM.
- [hv_vcpu_get_pending_interrupt(\_:\_:\_:)](hv_vcpu_get_pending_interrupt%28______%29.md): Gets pending interrupts for a vCPU.
- [hv_vcpu_set_pending_interrupt(\_:\_:\_:)](hv_vcpu_set_pending_interrupt%28______%29.md): Sets pending interrupts for a vCPU.
- [hv_vcpu_get_exec_time(\_:\_:)](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [Exits](exits.md): Describe virtual machine exit conditions.

# hv_interrupt_type_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Enumeration  
**Availability:** macOS

The type that defines the vCPU’s interrupts.

## Declaration

```objectivec
typedef enum { ... } hv_interrupt_type_t;
```

<a id="overview"></a>

## Overview

To raise interrupts on a vCPU, call [hv_vcpu_set_pending_interrupt](hv_vcpu_set_pending_interrupt%28______%29.md) prior to calling [hv_vcpu_run](hv_vcpu_run%28__%29.md).

## Topics

### Interrupt levels

- [HV_INTERRUPT_TYPE_FIQ](hv_interrupt_type_fiq.md): ARM Fast Interrupt Request.
- [HV_INTERRUPT_TYPE_IRQ](hv_interrupt_type_irq.md): ARM Interrupt Request.

## See Also

### Runtime

- [hv_vcpu_run](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.
- [hv_vcpus_exit](hv_vcpus_exit%28____%29.md): Forces an immediate exit of a set of vCPUs of the VM.
- [hv_vcpu_get_pending_interrupt](hv_vcpu_get_pending_interrupt%28______%29.md): Gets pending interrupts for a vCPU.
- [hv_vcpu_set_pending_interrupt](hv_vcpu_set_pending_interrupt%28______%29.md): Sets pending interrupts for a vCPU.
- [hv_vcpu_get_exec_time](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [Exits](exits.md): Describe virtual machine exit conditions.
