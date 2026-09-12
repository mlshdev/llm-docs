> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hypervisor-functions](https://developer.apple.com/documentation/hypervisor/hypervisor-functions)

# Hypervisor Functions (Swift)

**Framework:** Hypervisor  
**Kind:** API Collection

## Topics

### Functions

- [hv_sme_config_get_max_svl_bytes(\_:)](hv_sme_config_get_max_svl_bytes%28__%29.md)
- [hv_vcpu_apic_ctrl(\_:\_:)](hv_vcpu_apic_ctrl%28____%29.md)
- [hv_vcpu_apic_get_state(\_:\_:)](hv_vcpu_apic_get_state%28____%29.md)
- [hv_vcpu_apic_lsc_enter_imm32(\_:\_:\_:\_:\_:\_:\_:)](hv_vcpu_apic_lsc_enter_imm32%28______________%29.md)
- [hv_vcpu_apic_lsc_enter_r32(\_:\_:\_:\_:\_:\_:\_:\_:)](hv_vcpu_apic_lsc_enter_r32%28________________%29.md)
- [hv_vcpu_apic_lsc_invalidate(\_:)](hv_vcpu_apic_lsc_invalidate%28__%29.md)
- [hv_vcpu_apic_put_state(\_:\_:)](hv_vcpu_apic_put_state%28____%29.md)
- [hv_vcpu_apic_read(\_:\_:\_:)](hv_vcpu_apic_read%28______%29.md)
- [hv_vcpu_apic_trigger_lvt(\_:\_:)](hv_vcpu_apic_trigger_lvt%28____%29.md)
- [hv_vcpu_apic_write(\_:\_:\_:\_:)](hv_vcpu_apic_write%28________%29.md)
- [hv_vcpu_exit_apic_access_read(\_:\_:)](hv_vcpu_exit_apic_access_read%28____%29.md)
- [hv_vcpu_exit_info(\_:\_:)](hv_vcpu_exit_info%28____%29.md)
- [hv_vcpu_exit_init_ap(\_:\_:\_:)](hv_vcpu_exit_init_ap%28______%29.md)
- [hv_vcpu_exit_inject_excp(\_:\_:\_:\_:\_:)](hv_vcpu_exit_inject_excp%28__________%29.md)
- [hv_vcpu_exit_ioapic_eoi(\_:\_:)](hv_vcpu_exit_ioapic_eoi%28____%29.md)
- [hv_vcpu_exit_startup_ap(\_:\_:\_:\_:)](hv_vcpu_exit_startup_ap%28________%29.md)
- [hv_vcpu_get_idle_time(\_:\_:)](hv_vcpu_get_idle_time%28____%29.md)
- [hv_vcpu_get_sme_p_reg(\_:\_:\_:\_:)](hv_vcpu_get_sme_p_reg%28________%29.md): Returns the value of a vCPU P predicate register in streaming Scalable Vector Extension (SVE) mode.
- [hv_vcpu_get_sme_state(\_:\_:)](hv_vcpu_get_sme_state%28____%29.md): Gets the current Scalable Matrix Extension (SME) state.
- [hv_vcpu_get_sme_z_reg(\_:\_:\_:\_:)](hv_vcpu_get_sme_z_reg%28________%29.md): Returns the value of a vCPU Z vector register in streaming Scalable Vector Extension (SVE) mode.
- [hv_vcpu_get_sme_za_reg(\_:\_:\_:)](hv_vcpu_get_sme_za_reg%28______%29.md): Returns the value of the vCPU ZA matrix register in streaming Scalable Vector Extension (SVE) mode.
- [hv_vcpu_get_sme_zt0_reg(\_:\_:)](hv_vcpu_get_sme_zt0_reg%28____%29.md): Returns the current value of the vCPU ZT0 register in streaming Scalable Vector Extension (SVE) mode.
- [hv_vcpu_inject_extint(\_:)](hv_vcpu_inject_extint%28__%29.md)
- [hv_vcpu_set_sme_p_reg(\_:\_:\_:\_:)](hv_vcpu_set_sme_p_reg%28________%29.md): Sets the value of a vCPU P predicate register in streaming Scalable Vector Extension (SVE) mode.
- [hv_vcpu_set_sme_state(\_:\_:)](hv_vcpu_set_sme_state%28____%29.md): Sets the SME state consisting of the streaming Scalable Vector Extension (SVE) mode and ZA storage enable.
- [hv_vcpu_set_sme_z_reg(\_:\_:\_:\_:)](hv_vcpu_set_sme_z_reg%28________%29.md): Sets the value of a vCPU Z vector register in streaming Scalable Vector Extension (SVE) mode.
- [hv_vcpu_set_sme_za_reg(\_:\_:\_:)](hv_vcpu_set_sme_za_reg%28______%29.md): Sets the value of the vCPU ZA matrix register in streaming Scalable Vector Extension (SVE) mode.
- [hv_vcpu_set_sme_zt0_reg(\_:\_:)](hv_vcpu_set_sme_zt0_reg%28____%29.md): Sets the value of the vCPU ZT0 register in streaming Scalable Vector Extension (SVE) mode.
- [hv_vcpu_vmx_status(\_:\_:)](hv_vcpu_vmx_status%28____%29.md)
- [hv_vm_allocate(\_:\_:\_:)](hv_vm_allocate%28______%29.md)
- [hv_vm_atpic_assert_irq(\_:)](hv_vm_atpic_assert_irq%28__%29.md)
- [hv_vm_atpic_deassert_irq(\_:)](hv_vm_atpic_deassert_irq%28__%29.md)
- [hv_vm_atpic_get_state(\_:\_:)](hv_vm_atpic_get_state%28____%29.md)
- [hv_vm_atpic_port_read(\_:\_:)](hv_vm_atpic_port_read%28____%29.md)
- [hv_vm_atpic_port_write(\_:\_:)](hv_vm_atpic_port_write%28____%29.md)
- [hv_vm_atpic_put_state(\_:\_:)](hv_vm_atpic_put_state%28____%29.md)
- [hv_vm_config_get_default_ipa_size(\_:)](hv_vm_config_get_default_ipa_size%28__%29.md)
- [hv_vm_config_get_ipa_size(\_:\_:)](hv_vm_config_get_ipa_size%28____%29.md)
- [hv_vm_config_get_max_ipa_size(\_:)](hv_vm_config_get_max_ipa_size%28__%29.md)
- [hv_vm_config_set_ipa_size(\_:\_:)](hv_vm_config_set_ipa_size%28____%29.md)
- [hv_vm_deallocate(\_:\_:)](hv_vm_deallocate%28____%29.md)
- [hv_vm_ioapic_assert_irq(\_:)](hv_vm_ioapic_assert_irq%28__%29.md)
- [hv_vm_ioapic_deassert_irq(\_:)](hv_vm_ioapic_deassert_irq%28__%29.md)
- [hv_vm_ioapic_get_state(\_:)](hv_vm_ioapic_get_state%28__%29.md)
- [hv_vm_ioapic_pulse_irq(\_:)](hv_vm_ioapic_pulse_irq%28__%29.md)
- [hv_vm_ioapic_put_state(\_:)](hv_vm_ioapic_put_state%28__%29.md)
- [hv_vm_ioapic_read(\_:\_:)](hv_vm_ioapic_read%28____%29.md)
- [hv_vm_ioapic_write(\_:\_:)](hv_vm_ioapic_write%28____%29.md)
- [hv_vm_lapic_msi(\_:\_:)](hv_vm_lapic_msi%28____%29.md)
- [hv_vm_lapic_set_intr(\_:\_:\_:)](hv_vm_lapic_set_intr%28______%29.md)
- [hv_vm_map_space(\_:\_:\_:\_:\_:)](hv_vm_map_space%28__________%29.md): Maps a region in the virtual address space of the current task into a guest physical address space of the VM.
- [hv_vm_protect_space(\_:\_:\_:\_:)](hv_vm_protect_space%28________%29.md): Modifies the permissions of a region in a guest physical address space of the VM.
- [hv_vm_send_ioapic_intr(\_:)](hv_vm_send_ioapic_intr%28__%29.md)
- [hv_vm_set_apic_bus_freq(\_:)](hv_vm_set_apic_bus_freq%28__%29.md)
- [hv_vm_space_create(\_:)](hv_vm_space_create%28__%29.md): Creates an additional guest address space for the current task.
- [hv_vm_space_destroy(\_:)](hv_vm_space_destroy%28__%29.md): Destroys the address space instance associated with the current task.
- [hv_vm_unmap_space(\_:\_:\_:)](hv_vm_unmap_space%28______%29.md): Umaps a region in a guest physical address space of the VM.
- [hv_vmx_vcpu_set_apic_address_space(\_:\_:\_:)](hv_vmx_vcpu_set_apic_address_space%28______%29.md)

## See Also

### Reference

- [Hypervisor Structures](hypervisor-structures.md)
- [Hypervisor Constants](hypervisor-constants.md)
- [Hypervisor Data Types](hypervisor-data-types.md)

# Hypervisor Functions (Objective-C)

**Framework:** Hypervisor  
**Kind:** API Collection

## Topics

### Functions

- [hv_sme_config_get_max_svl_bytes](hv_sme_config_get_max_svl_bytes%28__%29.md)
- [hv_vcpu_apic_ctrl](hv_vcpu_apic_ctrl%28____%29.md)
- [hv_vcpu_apic_get_state](hv_vcpu_apic_get_state%28____%29.md)
- [hv_vcpu_apic_lsc_enter_imm32](hv_vcpu_apic_lsc_enter_imm32%28______________%29.md)
- [hv_vcpu_apic_lsc_enter_r32](hv_vcpu_apic_lsc_enter_r32%28________________%29.md)
- [hv_vcpu_apic_lsc_invalidate](hv_vcpu_apic_lsc_invalidate%28__%29.md)
- [hv_vcpu_apic_put_state](hv_vcpu_apic_put_state%28____%29.md)
- [hv_vcpu_apic_read](hv_vcpu_apic_read%28______%29.md)
- [hv_vcpu_apic_trigger_lvt](hv_vcpu_apic_trigger_lvt%28____%29.md)
- [hv_vcpu_apic_write](hv_vcpu_apic_write%28________%29.md)
- [hv_vcpu_exit_apic_access_read](hv_vcpu_exit_apic_access_read%28____%29.md)
- [hv_vcpu_exit_info](hv_vcpu_exit_info%28____%29.md)
- [hv_vcpu_exit_init_ap](hv_vcpu_exit_init_ap%28______%29.md)
- [hv_vcpu_exit_inject_excp](hv_vcpu_exit_inject_excp%28__________%29.md)
- [hv_vcpu_exit_ioapic_eoi](hv_vcpu_exit_ioapic_eoi%28____%29.md)
- [hv_vcpu_exit_startup_ap](hv_vcpu_exit_startup_ap%28________%29.md)
- [hv_vcpu_get_idle_time](hv_vcpu_get_idle_time%28____%29.md)
- [hv_vcpu_get_sme_p_reg](hv_vcpu_get_sme_p_reg%28________%29.md): Returns the value of a vCPU P predicate register in streaming Scalable Vector Extension (SVE) mode.
- [hv_vcpu_get_sme_state](hv_vcpu_get_sme_state%28____%29.md): Gets the current Scalable Matrix Extension (SME) state.
- [hv_vcpu_get_sme_z_reg](hv_vcpu_get_sme_z_reg%28________%29.md): Returns the value of a vCPU Z vector register in streaming Scalable Vector Extension (SVE) mode.
- [hv_vcpu_get_sme_za_reg](hv_vcpu_get_sme_za_reg%28______%29.md): Returns the value of the vCPU ZA matrix register in streaming Scalable Vector Extension (SVE) mode.
- [hv_vcpu_get_sme_zt0_reg](hv_vcpu_get_sme_zt0_reg%28____%29.md): Returns the current value of the vCPU ZT0 register in streaming Scalable Vector Extension (SVE) mode.
- [hv_vcpu_inject_extint](hv_vcpu_inject_extint%28__%29.md)
- [hv_vcpu_set_sme_p_reg](hv_vcpu_set_sme_p_reg%28________%29.md): Sets the value of a vCPU P predicate register in streaming Scalable Vector Extension (SVE) mode.
- [hv_vcpu_set_sme_state](hv_vcpu_set_sme_state%28____%29.md): Sets the SME state consisting of the streaming Scalable Vector Extension (SVE) mode and ZA storage enable.
- [hv_vcpu_set_sme_z_reg](hv_vcpu_set_sme_z_reg%28________%29.md): Sets the value of a vCPU Z vector register in streaming Scalable Vector Extension (SVE) mode.
- [hv_vcpu_set_sme_za_reg](hv_vcpu_set_sme_za_reg%28______%29.md): Sets the value of the vCPU ZA matrix register in streaming Scalable Vector Extension (SVE) mode.
- [hv_vcpu_set_sme_zt0_reg](hv_vcpu_set_sme_zt0_reg%28____%29.md): Sets the value of the vCPU ZT0 register in streaming Scalable Vector Extension (SVE) mode.
- [hv_vcpu_vmx_status](hv_vcpu_vmx_status%28____%29.md)
- [hv_vm_allocate](hv_vm_allocate%28______%29.md)
- [hv_vm_atpic_assert_irq](hv_vm_atpic_assert_irq%28__%29.md)
- [hv_vm_atpic_deassert_irq](hv_vm_atpic_deassert_irq%28__%29.md)
- [hv_vm_atpic_get_state](hv_vm_atpic_get_state%28____%29.md)
- [hv_vm_atpic_port_read](hv_vm_atpic_port_read%28____%29.md)
- [hv_vm_atpic_port_write](hv_vm_atpic_port_write%28____%29.md)
- [hv_vm_atpic_put_state](hv_vm_atpic_put_state%28____%29.md)
- [hv_vm_config_get_default_ipa_size](hv_vm_config_get_default_ipa_size%28__%29.md)
- [hv_vm_config_get_ipa_size](hv_vm_config_get_ipa_size%28____%29.md)
- [hv_vm_config_get_max_ipa_size](hv_vm_config_get_max_ipa_size%28__%29.md)
- [hv_vm_config_set_ipa_size](hv_vm_config_set_ipa_size%28____%29.md)
- [hv_vm_deallocate](hv_vm_deallocate%28____%29.md)
- [hv_vm_ioapic_assert_irq](hv_vm_ioapic_assert_irq%28__%29.md)
- [hv_vm_ioapic_deassert_irq](hv_vm_ioapic_deassert_irq%28__%29.md)
- [hv_vm_ioapic_get_state](hv_vm_ioapic_get_state%28__%29.md)
- [hv_vm_ioapic_pulse_irq](hv_vm_ioapic_pulse_irq%28__%29.md)
- [hv_vm_ioapic_put_state](hv_vm_ioapic_put_state%28__%29.md)
- [hv_vm_ioapic_read](hv_vm_ioapic_read%28____%29.md)
- [hv_vm_ioapic_write](hv_vm_ioapic_write%28____%29.md)
- [hv_vm_lapic_msi](hv_vm_lapic_msi%28____%29.md)
- [hv_vm_lapic_set_intr](hv_vm_lapic_set_intr%28______%29.md)
- [hv_vm_map_space](hv_vm_map_space%28__________%29.md): Maps a region in the virtual address space of the current task into a guest physical address space of the VM.
- [hv_vm_protect_space](hv_vm_protect_space%28________%29.md): Modifies the permissions of a region in a guest physical address space of the VM.
- [hv_vm_send_ioapic_intr](hv_vm_send_ioapic_intr%28__%29.md)
- [hv_vm_set_apic_bus_freq](hv_vm_set_apic_bus_freq%28__%29.md)
- [hv_vm_space_create](hv_vm_space_create%28__%29.md): Creates an additional guest address space for the current task.
- [hv_vm_space_destroy](hv_vm_space_destroy%28__%29.md): Destroys the address space instance associated with the current task.
- [hv_vm_unmap_space](hv_vm_unmap_space%28______%29.md): Umaps a region in a guest physical address space of the VM.
- [hv_vmx_vcpu_set_apic_address_space](hv_vmx_vcpu_set_apic_address_space%28______%29.md)

## See Also

### Reference

- [Hypervisor Structures](hypervisor-structures.md)
- [Hypervisor Constants](hypervisor-constants.md)
- [Hypervisor Data Types](hypervisor-data-types.md)
