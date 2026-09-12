> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3753657-mach_port_get_service_port_info](https://developer.apple.com/documentation/kernel/3753657-mach_port_get_service_port_info)

# mach_port_get_service_port_info

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
kern_return_t mach_port_get_service_port_info(ipc_space_read_t task, mach_port_name_t name, mach_service_port_info_data_t *sp_info_out);
```
