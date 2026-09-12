> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3736285-check_task_access_with_flavor](https://developer.apple.com/documentation/kernel/3736285-check_task_access_with_flavor)

# check_task_access_with_flavor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.3+

## Declaration

```objectivec
kern_return_t check_task_access_with_flavor(mach_port_t task_access_port, int32_t calling_pid, uint32_t calling_gid, int32_t target_pid, mach_task_flavor_t flavor);
```
