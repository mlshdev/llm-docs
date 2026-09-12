> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmacommand/1547719-synchronize](https://developer.apple.com/documentation/kernel/iodmacommand/1547719-synchronize)

# synchronize

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

Bring IOMemoryDescriptor and IODMACommand buffers into sync.

## Declaration

```objectivec
virtual IOReturn synchronize(IOOptionBits options);
```

## Parameters

- `options`: Specifies the direction of the copy: kIODirectionOut copy IOMemoryDesciptor memory to any IODMACommand buffers. By default this action takes place automatically at prepare(). kIODirectionIn copy any IODMACommand buffers back to the IOMemoryDescriptor. By default this action takes place automatically at complete(). kForceDoubleBuffer copy the entire prepared range to a new page aligned buffer.

<a id="return_value"></a>

## Return Value

kIOReturnNotReady if not prepared, kIOReturnBadArgument if invalid options are passed, kIOReturnSuccess otherwise.

<a id="discussion"></a>

## Discussion

This method should not be called unless a prepare was previously issued. If needed a caller may synchronize any IODMACommand buffers with the original IOMemoryDescriptor buffers.

## See Also

### Preparing the Transfer Operation

- [prepare](1811284-prepare.md): Prepare the memory for an I/O transfer.
- [prepare](1547728-prepare.md): Prepare the memory for an I/O transfer.
- [prepareWithSpecification](1811291-preparewithspecification.md): Prepare the memory for an I/O transfer with a new specification.
- [prepareWithSpecification](1547733-preparewithspecification.md): Prepare the memory for an I/O transfer with a new specification.
- [prepareWithSpecification](3516451-preparewithspecification.md): Prepare the memory for an I/O transfer with a new specification.
- [complete](1811081-complete.md): Complete processing of DMA mappings after an I/O transfer is finished.
- [complete](1547730-complete.md): Complete processing of DMA mappings after an I/O transfer is finished.
- [synchronize](1811316-synchronize.md): Bring IOMemoryDescriptor and IODMACommand buffers into sync.
