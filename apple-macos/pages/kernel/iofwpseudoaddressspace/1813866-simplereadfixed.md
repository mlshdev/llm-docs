> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofwpseudoaddressspace/1813866-simplereadfixed](https://developer.apple.com/documentation/kernel/iofwpseudoaddressspace/1813866-simplereadfixed)

# simpleReadFixed

**Interface language:** Objective-C

**Framework:** Kernel

Create an address space object to handle fixed read-only memory (eg. the local ROM) handles everything itself

## Declaration

```objectivec
static IOFWPseudoAddressSpace* simpleReadFixed( 
 IOFireWireBus *bus, 
 FWAddressaddr, 
 UInt32len, 
 const void *data); 
```

## Parameters

- `bus`: Points to IOFireWireBus object.
- `addr`: Points to starting address for the Pseudo Address Space.
- `len`: Length of the Pseudo Address Space.
- `data`: The virtual address of the first byte in the memory.

<a id="return_value"></a>

## Return Value

returns valid IOFWPseudoAddressSpace on success, null on failure

## See Also

### Miscellaneous

- [contains](1813836-contains.md): returns number of bytes starting at addr in this space
- [doRead](1813839-doread.md): A method for processing an address space read request
- [doWrite](1813844-dowrite.md): A method for processing an address space write request
- [initAll](1813848-initall.md): Initialize an address space object to handle r/w memory
- [initFixed](1813852-initfixed.md): Initialize a fixed address space at top of kCSRRegisterSpaceBaseAddressHi
- [setARxReqIntCompleteHandler](1813855-setarxreqintcompletehandler.md): Installs a callback to receive notification, when FWIM has completed ARxReqInt processing and no incoming packets are left in the queue.
- [simpleRead](1813859-simpleread.md): Create an address space object to handle read-only memory (eg. the local ROM) handles everything itself
- [simpleReader](1813862-simplereader.md): A method for processing an address space read request
- [simpleRW(IOFireWireBus \*, FWAddress \*, IOMemoryDescriptor \*)](1813868-simplerw.md): Create an address space object to handle r/w memory handles everything itself
- [simpleRW(IOFireWireBus \*, FWAddress \*, UInt32, void \*)](1813871-simplerw.md): Create an address space object to handle r/w memory handles everything itself
- [simpleRWFixed](1813874-simplerwfixed.md): Create a Read/Write fixed address space at top of kCSRRegisterSpaceBaseAddressHi.
- [simpleWriter](1813878-simplewriter.md): A method for processing an address space write request
