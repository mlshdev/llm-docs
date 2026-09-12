> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/1469442-interrupt_request_irq_codes-enum](https://developer.apple.com/documentation/hypervisor/1469442-interrupt_request_irq_codes-enum)

# Interrupt request (IRQ) codes

**Interface languages:** Swift, Objective-C

**Framework:** Hypervisor  
**Kind:** API Collection

An enumeration that describes available interrupt codes.

## Topics

### IRQ codes

- [IRQ_INFO_EXT_IRQ](irq_info_ext_irq.md): The value that represents an external interrupt.
- [IRQ_INFO_NMI](irq_info_nmi.md): The value that represents a non-maskable-interrupt.
- [IRQ_INFO_HARD_EXC](irq_info_hard_exc.md): The value that represents a hardware exception.
- [IRQ_INFO_SOFT_IRQ](irq_info_soft_irq.md): The value that represents a software interrupt.
- [IRQ_INFO_PRIV_SOFT_EXC](irq_info_priv_soft_exc.md): The value that represents a privileged software exception.
- [IRQ_INFO_SOFT_EXC](irq_info_soft_exc.md): The value that represents a software exception interrupt.
- [IRQ_INFO_ERROR_VALID](irq_info_error_valid.md): The value that indicates the error associated with the interrupt is valid and is readable from the VMCS.
- [IRQ_INFO_VALID](irq_info_valid.md): The value that represents the interrupt is valid.
- [IRQ_INFO_TYPE_MASK](irq_info_type_mask.md): The value that represents the interrupt mask.

## See Also

### Shared types

- [VMX Creation Behavior](1469509-vmx_creation_behavior-enum.md): An enumeration that describes VMX creation behavior options.
- [VMX Exit Reasons](1469470-vmx-exit-reasons.md): An enumertion that describes the VMX exit reasons.
