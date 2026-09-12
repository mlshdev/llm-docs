> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/mach_header_64/1525740-cpusubtype](https://developer.apple.com/documentation/kernel/mach_header_64/1525740-cpusubtype)

# cpusubtype

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

An integer specifying the exact model of the CPU. To run on all PowerPC processors supported by the macOS kernel, this should be set to `CPU_SUBTYPE_POWERPC_ALL`.

## Declaration

```objectivec
cpu_subtype_t cpusubtype;
```
