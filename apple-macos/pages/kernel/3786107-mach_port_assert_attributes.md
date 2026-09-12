> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3786107-mach_port_assert_attributes](https://developer.apple.com/documentation/kernel/3786107-mach_port_assert_attributes)

# mach_port_assert_attributes

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
kern_return_t mach_port_assert_attributes(ipc_space_t task, mach_port_name_t name, mach_port_flavor_t flavor, mach_port_info_t info, mach_msg_type_number_t infoCnt);
```
