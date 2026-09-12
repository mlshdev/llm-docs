> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgunmapmemory](https://developer.apple.com/documentation/paravirtualizedgraphics/pgunmapmemory)

# PGUnmapMemory

**Interface language:** Objective-C

**Framework:** Paravirtualized Graphics  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+

The block signature for a routine that unmaps guest physical memory from a task.

## Declaration

```objectivec
typedef _Bool (^)(struct PGTask_s *, unsigned long long, unsigned long long) PGUnmapMemory;
```

## Parameters

- `task`: The task to unmap memory from.
- `virtualOffset`: The offset from the task’s base address where unmapping starts.
- `length`: The number of bytes to unmap.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the block successfully unmapped memory; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Memory Operations

- [mapMemory](pgdevicedescriptor/mapmemory.md): A handler that the framework calls to map memory into the virtual machine.
- [unmapMemory](pgdevicedescriptor/unmapmemory.md): A handler that the framework calls to unmap memory from the virtual machine.
- [readMemory](pgdevicedescriptor/readmemory.md): A handler that the framework calls to read data from the guest’s memory.
- [PGMapMemory](pgmapmemory.md): The block signature for a routine that maps guest physical memory into a task.
- [PGReadMemory](pgreadmemory.md): The block signature for a routine that copies data from guest physical memory into host memory.
- [PGPhysicalMemoryRange_s](pgphysicalmemoryrange_s.md): A range in the guest virtual machine’s physical memory address space.
