> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1538505-upl_abort_range](https://developer.apple.com/documentation/kernel/1538505-upl_abort_range)

# upl_abort_range

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.1+

## Declaration

```objectivec
kern_return_t upl_abort_range(upl_t upl_object, upl_offset_t offset, upl_size_t size, integer_t abort_cond, boolean_t *empty);
```
