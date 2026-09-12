> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdevicedescriptor/unmapmemory](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdevicedescriptor/unmapmemory)

# unmapMemory

**Interface language:** Objective-C

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+

A handler that the framework calls to unmap memory from the virtual machine.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) PGUnmapMemory unmapMemory;
```

## See Also

### Managing Memory Operations

- [mapMemory](mapmemory.md): A handler that the framework calls to map memory into the virtual machine.
- [readMemory](readmemory.md): A handler that the framework calls to read data from the guest’s memory.
- [PGMapMemory](../pgmapmemory.md): The block signature for a routine that maps guest physical memory into a task.
- [PGUnmapMemory](../pgunmapmemory.md): The block signature for a routine that unmaps guest physical memory from a task.
- [PGReadMemory](../pgreadmemory.md): The block signature for a routine that copies data from guest physical memory into host memory.
- [PGPhysicalMemoryRange_s](../pgphysicalmemoryrange_s.md): A range in the guest virtual machine’s physical memory address space.
