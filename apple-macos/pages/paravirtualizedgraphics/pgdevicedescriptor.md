> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdevicedescriptor](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdevicedescriptor)

# PGDeviceDescriptor (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A description of the paravirtualized graphics device to create.

## Declaration

```swift
class PGDeviceDescriptor
```

## Topics

### Specifying the GPU

- [device](pgdevicedescriptor/device.md): The Metal device object to use to back the virtual graphics device.

### Managing Memory Operations

- [PGPhysicalMemoryRange_s](pgphysicalmemoryrange_s.md): A range in the guest virtual machine’s physical memory address space.

### Handling Interrupts

- [raiseInterrupt](pgdevicedescriptor/raiseinterrupt.md): A handler that the system calls to raise an interrupt in the guest environment.
- [PGRaiseInterrupt](pgraiseinterrupt.md): The block signature for a routine that raises interrupts in the guest environment.

### Specifying Virtual Device Properties

- [mmioLength](pgdevicedescriptor/mmiolength.md): The length in bytes of the memory-mapped IO section.

### Instance Properties

- [displayPortCount](pgdevicedescriptor/displayportcount.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Devices

- [PGDevice](pgdevice.md): A paravirtualized GPU device object.

# PGDeviceDescriptor (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A description of the paravirtualized graphics device to create.

## Declaration

```objectivec
@interface PGDeviceDescriptor : NSObject
```

## Topics

### Specifying the GPU

- [device](pgdevicedescriptor/device.md): The Metal device object to use to back the virtual graphics device.

### Managing Tasks

- [createTask](pgdevicedescriptor/createtask.md): A handler that the framework calls to create a task object.
- [destroyTask](pgdevicedescriptor/destroytask.md): A handler that the framework calls to destroy a task object.
- [PGCreateTask](pgcreatetask.md): The block signature for a routine that creates a task.
- [PGDestroyTask](pgdestroytask.md): The block signature for a routine that destroys a task.
- [PGTask_t](pgtask_t.md): An opaque data pointer representing a specific virtual task.

### Managing Memory Operations

- [mapMemory](pgdevicedescriptor/mapmemory.md): A handler that the framework calls to map memory into the virtual machine.
- [unmapMemory](pgdevicedescriptor/unmapmemory.md): A handler that the framework calls to unmap memory from the virtual machine.
- [readMemory](pgdevicedescriptor/readmemory.md): A handler that the framework calls to read data from the guest’s memory.
- [PGMapMemory](pgmapmemory.md): The block signature for a routine that maps guest physical memory into a task.
- [PGUnmapMemory](pgunmapmemory.md): The block signature for a routine that unmaps guest physical memory from a task.
- [PGReadMemory](pgreadmemory.md): The block signature for a routine that copies data from guest physical memory into host memory.
- [PGPhysicalMemoryRange_s](pgphysicalmemoryrange_s.md): A range in the guest virtual machine’s physical memory address space.

### Specifying Trace Behavior

- [addTraceRange](pgdevicedescriptor/addtracerange.md): A handler that the framework calls to add a trace range.
- [removeTraceRange](pgdevicedescriptor/removetracerange.md): A handler that the framework calls to remove a trace range.
- [PGAddTraceRange](pgaddtracerange.md): The block signature for a routine that adds a trace range.
- [PGRemoveTraceRange](pgremovetracerange.md): The block signature for a routine that removes a trace range.
- [PGTraceRangeHandler](pgtracerangehandler.md): The block signature for a routine that handles trace requests.
- [PGTraceRange_t](pgtracerange_t.md): An opaque data pointer representing a specific trace.

### Handling Interrupts

- [raiseInterrupt](pgdevicedescriptor/raiseinterrupt.md): A handler that the system calls to raise an interrupt in the guest environment.
- [PGRaiseInterrupt](pgraiseinterrupt.md): The block signature for a routine that raises interrupts in the guest environment.

### Specifying Virtual Device Properties

- [mmioLength](pgdevicedescriptor/mmiolength.md): The length in bytes of the memory-mapped IO section.

### Instance Properties

- [displayPortCount](pgdevicedescriptor/displayportcount.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Devices

- [PGDevice](pgdevice.md): A paravirtualized GPU device object.
