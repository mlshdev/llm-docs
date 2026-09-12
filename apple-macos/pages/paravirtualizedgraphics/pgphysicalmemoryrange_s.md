> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgphysicalmemoryrange_s](https://developer.apple.com/documentation/paravirtualizedgraphics/pgphysicalmemoryrange_s)

# PGPhysicalMemoryRange_s (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Structure  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A range in the guest virtual machine’s physical memory address space.

## Declaration

```swift
struct PGPhysicalMemoryRange_s
```

## Topics

### Creating a Memory Range

- [init()](pgphysicalmemoryrange_s/init%28%29.md): Creates a default memory range.
- [init(physicalAddress:physicalLength:)](pgphysicalmemoryrange_s/init%28physicaladdress_physicallength_%29.md): Creates a memory range.

### Inspecting Range Properties

- [physicalAddress](pgphysicalmemoryrange_s/physicaladdress.md): The starting address of the range in physical memory.
- [physicalLength](pgphysicalmemoryrange_s/physicallength.md): The length of the range.

### Type alias

- [PGPhysicalMemoryRange_t](pgphysicalmemoryrange_t.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# PGPhysicalMemoryRange_s (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Structure  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A range in the guest virtual machine’s physical memory address space.

## Declaration

```objectivec
struct PGPhysicalMemoryRange_s;
```

## Topics

### Inspecting Range Properties

- [physicalAddress](pgphysicalmemoryrange_s/physicaladdress.md): The starting address of the range in physical memory.
- [physicalLength](pgphysicalmemoryrange_s/physicallength.md): The length of the range.

### Type alias

- [PGPhysicalMemoryRange_t](pgphysicalmemoryrange_t.md)

## See Also

### Managing Memory Operations

- [mapMemory](pgdevicedescriptor/mapmemory.md): A handler that the framework calls to map memory into the virtual machine.
- [unmapMemory](pgdevicedescriptor/unmapmemory.md): A handler that the framework calls to unmap memory from the virtual machine.
- [readMemory](pgdevicedescriptor/readmemory.md): A handler that the framework calls to read data from the guest’s memory.
- [PGMapMemory](pgmapmemory.md): The block signature for a routine that maps guest physical memory into a task.
- [PGUnmapMemory](pgunmapmemory.md): The block signature for a routine that unmaps guest physical memory from a task.
- [PGReadMemory](pgreadmemory.md): The block signature for a routine that copies data from guest physical memory into host memory.
