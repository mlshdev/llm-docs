> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/apple-silicon](https://developer.apple.com/documentation/hypervisor/apple-silicon)

# Apple Silicon (Swift)

**Framework:** Hypervisor  
**Kind:** API Collection

Create and run virtual machines on Apple silicon.

## Topics

### Virtual machine management

- [hv_vm_config_create()](hv_vm_config_create%28%29.md): Creates a virtual machine configuration object.
- [hv_vm_create(\_:)](hv_vm_create%28__%29.md): Creates a VM instance for the current process.
- [hv_vm_destroy()](hv_vm_destroy%28%29.md): Destroys the VM instance associated with the current process.
- [OS_hv_vm_config](os_hv_vm_config.md): Creates a virtual machine configuration object.
- [hv_vm_config_t](hv_vm_config_t.md): The type that defines a virtual-machine configuration.

### Resource management

- [vCPU Management](vcpu-management.md): Create and run virtual CPUs, and manage CPU-specific registers and features.
- [Memory management](memory-management.md): Map memory into the physical address space of the virtual machine.

### Timer functions

- [hv_vcpu_get_vtimer_mask(\_:\_:)](hv_vcpu_get_vtimer_mask%28____%29.md): Gets the virtual timer mask.
- [hv_vcpu_set_vtimer_mask(\_:\_:)](hv_vcpu_set_vtimer_mask%28____%29.md): Sets or clears the virtual timer mask.
- [hv_vcpu_get_vtimer_offset(\_:\_:)](hv_vcpu_get_vtimer_offset%28____%29.md): Returns the vTimer offset for the vCPU ID you specify.
- [hv_vcpu_set_vtimer_offset(\_:\_:)](hv_vcpu_set_vtimer_offset%28____%29.md): Sets the vTimer offset to a value that you provide.

### Common data types

- [hv_return_t](hv_return_t.md): The return type of framework functions.
- [Hypervisor Errors](hypervisor-errors.md): Return codes returned by framework functions.

### Nested virtualization

- [hv_vm_config_get_el2_supported(\_:)](hv_vm_config_get_el2_supported%28__%29.md): Returns a status value that indicates whether the current platform supports Exception Level 2 (EL2).
- [hv_vm_config_get_el2_enabled(\_:\_:)](hv_vm_config_get_el2_enabled%28____%29.md): Return a status value that indicates whether the VM configuration enables support for Exception Level 2 (EL2).
- [hv_vm_config_set_el2_enabled(\_:\_:)](hv_vm_config_set_el2_enabled%28____%29.md): Sets whether the specified VM configuration enables support for Exception Level 2 (EL2).

### Generic interrupt controllers (GICs)

- [GIC functions](gic-functions.md): These functions and registers support the creation and operation of a generic interrupt controller.
- [GIC registers](gic-registers.md): These registers support the operation of a generic interrupt controller and its interface with the Hypervisor and virtual CPUs.

## See Also

### Platforms

- [Intel-based Mac](intel-based-mac.md): Create and run virtual machines on Intel-based Mac computers.

# Apple Silicon (Objective-C)

**Framework:** Hypervisor  
**Kind:** API Collection

Create and run virtual machines on Apple silicon.

## Topics

### Virtual machine management

- [hv_vm_config_create](hv_vm_config_create%28%29.md): Creates a virtual machine configuration object.
- [hv_vm_create](hv_vm_create%28__%29.md): Creates a VM instance for the current process.
- [hv_vm_destroy](hv_vm_destroy%28%29.md): Destroys the VM instance associated with the current process.
- [OS_hv_vm_config](os_hv_vm_config.md): Creates a virtual machine configuration object.
- [hv_vm_config_t](hv_vm_config_t.md): The type that defines a virtual-machine configuration.

### Resource management

- [vCPU Management](vcpu-management.md): Create and run virtual CPUs, and manage CPU-specific registers and features.
- [Memory management](memory-management.md): Map memory into the physical address space of the virtual machine.

### Timer functions

- [hv_vcpu_get_vtimer_mask](hv_vcpu_get_vtimer_mask%28____%29.md): Gets the virtual timer mask.
- [hv_vcpu_set_vtimer_mask](hv_vcpu_set_vtimer_mask%28____%29.md): Sets or clears the virtual timer mask.
- [hv_vcpu_get_vtimer_offset](hv_vcpu_get_vtimer_offset%28____%29.md): Returns the vTimer offset for the vCPU ID you specify.
- [hv_vcpu_set_vtimer_offset](hv_vcpu_set_vtimer_offset%28____%29.md): Sets the vTimer offset to a value that you provide.

### Common data types

- [hv_return_t](hv_return_t.md): The return type of framework functions.
- [Hypervisor Errors](hypervisor-errors.md): Return codes returned by framework functions.

### Nested virtualization

- [hv_vm_config_get_el2_supported](hv_vm_config_get_el2_supported%28__%29.md): Returns a status value that indicates whether the current platform supports Exception Level 2 (EL2).
- [hv_vm_config_get_el2_enabled](hv_vm_config_get_el2_enabled%28____%29.md): Return a status value that indicates whether the VM configuration enables support for Exception Level 2 (EL2).
- [hv_vm_config_set_el2_enabled](hv_vm_config_set_el2_enabled%28____%29.md): Sets whether the specified VM configuration enables support for Exception Level 2 (EL2).

### Generic interrupt controllers (GICs)

- [GIC functions](gic-functions.md): These functions and registers support the creation and operation of a generic interrupt controller.
- [GIC registers](gic-registers.md): These registers support the operation of a generic interrupt controller and its interface with the Hypervisor and virtual CPUs.

## See Also

### Platforms

- [Intel-based Mac](intel-based-mac.md): Create and run virtual machines on Intel-based Mac computers.
