> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/dylib_module/1525476-ninit_nterm](https://developer.apple.com/documentation/kernel/dylib_module/1525476-ninit_nterm)

# ninit_nterm

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Contains both the number of pointers in the module initialization (the low 16 bits) and the number of pointers in the module termination section (the high 16 bits) for this module.

## Declaration

```objectivec
uint32_t ninit_nterm;
```
