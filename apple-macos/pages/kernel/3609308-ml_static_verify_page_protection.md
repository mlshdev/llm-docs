> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3609308-ml_static_verify_page_protection](https://developer.apple.com/documentation/kernel/3609308-ml_static_verify_page_protection)

# ml_static_verify_page_protections

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
kern_return_t ml_static_verify_page_protections(uint64_t base, uint64_t size, vm_prot_t prot);
```
