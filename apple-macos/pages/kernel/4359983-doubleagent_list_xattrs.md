> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/4359983-doubleagent_list_xattrs](https://developer.apple.com/documentation/kernel/4359983-doubleagent_list_xattrs)

# doubleagent_list_xattrs

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.0+

## Declaration

```objectivec
kern_return_t doubleagent_list_xattrs(mach_port_t server, mach_port_t file_port, int64_t file_size, int *err, listxattrs_result_t *result);
```
