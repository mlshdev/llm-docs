> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1532978-iomapperiovmfree](https://developer.apple.com/documentation/kernel/1532978-iomapperiovmfree)

# IOMapperIOVMFree

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.2+

## Declaration

```objectivec
void IOMapperIOVMFree(ppnum_t addr, unsigned int pages);
```

## See Also

### Mapped Memory

- [IOMapper](iomapper.md)
- [IOMemoryMap](iomemorymap.md): A class defining common methods for describing a memory mapping.
- [IOMappedRead16](1575322-iomappedread16.md): Read two bytes from the desired "Physical" IOSpace address.
- [IOMappedRead32](1575311-iomappedread32.md): Read four bytes from the desired "Physical" IOSpace address.
- [IOMappedRead64](1575301-iomappedread64.md): Read eight bytes from the desired "Physical" IOSpace address.
- [IOMappedRead8](1575317-iomappedread8.md): Read one byte from the desired "Physical" IOSpace address.
- [IOMappedWrite16](1575315-iomappedwrite16.md): Write two bytes to the desired "Physical" IOSpace address.
- [IOMappedWrite32](1575310-iomappedwrite32.md): Write four bytes to the desired "Physical" IOSpace address.
- [IOMappedWrite64](1575313-iomappedwrite64.md): Write eight bytes to the desired "Physical" IOSpace address.
- [IOMappedWrite8](1575318-iomappedwrite8.md): Write one byte to the desired "Physical" IOSpace address.
- [IOMapperIOVMAlloc](1532986-iomapperiovmalloc.md)
- [IOMapperInsertPage](1532970-iomapperinsertpage.md)
- [IOFlushProcessorCache](1575308-ioflushprocessorcache.md): Flushes the processor cache for mapped memory.
