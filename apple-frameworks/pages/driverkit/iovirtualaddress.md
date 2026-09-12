> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iovirtualaddress](https://developer.apple.com/documentation/driverkit/iovirtualaddress)

# IOVirtualAddress

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

An address in the virtual memory space of the process.

## Declaration

```objectivec
typedef mach_vm_address_t IOVirtualAddress;
```

```objectivec
typedef uint64_t IOVirtualAddress;
```

## See Also

### Addresses

- [IOPhysicalAddress](iophysicaladdress.md): An address in physical memory.
- [IOPhysicalAddress32](iophysicaladdress32.md): A 32-bit address in physical memory.
- [IOPhysicalAddress64](iophysicaladdress64.md): A 64-bit address in physical memory.
- [IOPhysicalLength](iophysicallength.md): A type that represents the length of a memory block.
- [IOPhysicalLength32](iophysicallength32.md): A type that represents the length of a memory block in a 32-bit address space.
- [IOPhysicalLength64](iophysicallength64.md): A type that represents the length of a memory block in a 64-bit address space.
- [IOCacheMode](iocachemode.md): A memory-cache mode.
