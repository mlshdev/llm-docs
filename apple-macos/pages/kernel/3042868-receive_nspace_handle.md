> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3042868-receive_nspace_handle](https://developer.apple.com/documentation/kernel/3042868-receive_nspace_handle)

# receive_nspace_handle

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.15+

## Declaration

```objectivec
kern_return_t receive_nspace_handle(mach_port_t nspace_handler_port, uint32_t pid, vfs_path_t path, int *handler_error);
```
