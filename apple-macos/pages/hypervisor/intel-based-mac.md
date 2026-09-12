> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/intel-based-mac](https://developer.apple.com/documentation/hypervisor/intel-based-mac)

# Intel-based Mac (Swift)

**Framework:** Hypervisor  
**Kind:** API Collection

Create and run virtual machines on Intel-based Mac computers.

## Topics

### Virtual machine management

- [hv_vm_create(\_:)](hv_vm_create%28__%29.md): Creates a VM instance for the current process.
- [hv_vm_destroy()](hv_vm_destroy%28%29.md): Destroys the VM instance associated with the current process.
- [hv_capability(\_:\_:)](hv_capability%28____%29.md): Gets the value of capabilities of the system.
- [hv_vm_options_t](hv_vm_options_t.md): Options you use when creating a virtual machine.
- [hv_capability_t](hv_capability_t.md): The type of system capabilities.

### Resource management

- [vCPU Management](intel-based_mac-vcpu-management.md): Create and run virtual CPUs, and manage CPU-specific registers and features.
- [Memory Management](intel-based_mac-memory-management.md): Map memory into the physical address space of the virtual machine, and allocate additional memory for the current task.
- [Virtual Machine Control Structure (VMCS)](virtual-machine-control-structure-vmcs.md): Read and write to fields of the virtual machine control structure.

### I/O notifier functions

- [hv_vm_add_pio_notifier(\_:\_:\_:\_:\_:)](hv_vm_add_pio_notifier%28__________%29.md): Generate a notification when the Hypervisor issues a matching guest port I/O.
- [hv_vm_remove_pio_notifier(\_:\_:\_:\_:\_:)](hv_vm_remove_pio_notifier%28__________%29.md): Removes an existing I/O notifier that matches the specifications you provide.
- [hv_ion_message_t](hv_ion_message_t.md): The structure that describes the Mach message that the Hypervisor sends when an I/O notifier delivers the notifications you request.
- [hv_ion_flags_t](hv_ion_flags_t.md): The bitfield that you use to set the options flags for the I/O notifier.
- [I/O Notifier Flags](3727903-i-o-notifier-flags.md): Flags that you set to choose the kind of information the I/O Notifier delivers.

### Time-stamp counter functions

- [hv_tsc_clock()](hv_tsc_clock%28%29.md): Returns the value of an abstract clock.
- [hv_vcpu_set_tsc_relative(\_:\_:)](hv_vcpu_set_tsc_relative%28____%29.md): Sets the offset of the guest timestamp-counter (TSC) relative to the Hypervisor’s TSC clock.

### Common data types

- [hv_return_t](hv_return_t.md): The return type of framework functions.
- [Hypervisor Errors](1585168-hypervisor-errors.md): Errors returned by Hypervisor functions.

## See Also

### Platforms

- [Apple Silicon](apple-silicon.md): Create and run virtual machines on Apple silicon.

# Intel-based Mac (Objective-C)

**Framework:** Hypervisor  
**Kind:** API Collection

Create and run virtual machines on Intel-based Mac computers.

## Topics

### Virtual machine management

- [hv_vm_create](hv_vm_create%28__%29.md): Creates a VM instance for the current process.
- [hv_vm_destroy](hv_vm_destroy%28%29.md): Destroys the VM instance associated with the current process.
- [hv_capability](hv_capability%28____%29.md): Gets the value of capabilities of the system.
- [hv_vm_options_t](hv_vm_options_t.md): Options you use when creating a virtual machine.
- [hv_capability_t](hv_capability_t.md): The type of system capabilities.

### Resource management

- [vCPU Management](intel-based_mac-vcpu-management.md): Create and run virtual CPUs, and manage CPU-specific registers and features.
- [Memory Management](intel-based_mac-memory-management.md): Map memory into the physical address space of the virtual machine, and allocate additional memory for the current task.
- [Virtual Machine Control Structure (VMCS)](virtual-machine-control-structure-vmcs.md): Read and write to fields of the virtual machine control structure.

### I/O notifier functions

- [hv_vm_add_pio_notifier](hv_vm_add_pio_notifier%28__________%29.md): Generate a notification when the Hypervisor issues a matching guest port I/O.
- [hv_vm_remove_pio_notifier](hv_vm_remove_pio_notifier%28__________%29.md): Removes an existing I/O notifier that matches the specifications you provide.
- [hv_ion_message_t](hv_ion_message_t.md): The structure that describes the Mach message that the Hypervisor sends when an I/O notifier delivers the notifications you request.
- [hv_ion_flags_t](hv_ion_flags_t.md): The bitfield that you use to set the options flags for the I/O notifier.
- [I/O Notifier Flags](3727903-i-o-notifier-flags.md): Flags that you set to choose the kind of information the I/O Notifier delivers.

### Time-stamp counter functions

- [hv_tsc_clock](hv_tsc_clock%28%29.md): Returns the value of an abstract clock.
- [hv_vcpu_set_tsc_relative](hv_vcpu_set_tsc_relative%28____%29.md): Sets the offset of the guest timestamp-counter (TSC) relative to the Hypervisor’s TSC clock.

### Common data types

- [hv_return_t](hv_return_t.md): The return type of framework functions.
- [Hypervisor Errors](1585168-hypervisor-errors.md): Errors returned by Hypervisor functions.

## See Also

### Platforms

- [Apple Silicon](apple-silicon.md): Create and run virtual machines on Apple silicon.
