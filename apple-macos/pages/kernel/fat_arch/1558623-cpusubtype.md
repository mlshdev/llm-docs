> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/fat_arch/1558623-cpusubtype](https://developer.apple.com/documentation/kernel/fat_arch/1558623-cpusubtype)

# cpusubtype

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

An enumeration value of type `cpu_subtype_t`. Specifies the specific member of the CPU family on which this entry may be used or a constant specifying all members.

## Declaration

```objectivec
cpu_subtype_t cpusubtype;
```

## See Also

### Fields

- [offset](1558628-offset.md): Offset to the beginning of the data for this CPU.
- [size](1558631-size.md): Size of the data for this CPU.
- [align](1558625-align.md): The power of 2 alignment for the offset of the object file for the architecture specified in `cputype` within the binary. This is required to ensure that, if this binary is changed, the contents it retains are correctly aligned for virtual memory paging and other uses.
