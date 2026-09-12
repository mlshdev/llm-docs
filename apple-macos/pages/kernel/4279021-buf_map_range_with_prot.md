> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/4279021-buf_map_range_with_prot](https://developer.apple.com/documentation/kernel/4279021-buf_map_range_with_prot)

# buf_map_range_with_prot

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 14.0+

## Declaration

```objectivec
errno_t buf_map_range_with_prot(buf_t bp, caddr_t *io_addr, vm_prot_t prot);
```
