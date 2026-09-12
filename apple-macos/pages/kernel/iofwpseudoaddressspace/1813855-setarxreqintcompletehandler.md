> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofwpseudoaddressspace/1813855-setarxreqintcompletehandler](https://developer.apple.com/documentation/kernel/iofwpseudoaddressspace/1813855-setarxreqintcompletehandler)

# setARxReqIntCompleteHandler

**Interface language:** Objective-C

**Framework:** Kernel

Installs a callback to receive notification, when FWIM has completed ARxReqInt processing and no incoming packets are left in the queue.

## Declaration

```objectivec
inline void setARxReqIntCompleteHandler(
 void *refcon,
 IOFWARxReqIntCompleteHandlerhandler ) 
```

## Parameters

- `refcon`: Client's callback object.
- `handler`: Client callback to be invoked, at the end of interrupt processing.

<a id="return_value"></a>

## Return Value

none.

## See Also

### Miscellaneous

- [contains](1813836-contains.md): returns number of bytes starting at addr in this space
- [doRead](1813839-doread.md): A method for processing an address space read request
- [doWrite](1813844-dowrite.md): A method for processing an address space write request
- [initAll](1813848-initall.md): Initialize an address space object to handle r/w memory
- [initFixed](1813852-initfixed.md): Initialize a fixed address space at top of kCSRRegisterSpaceBaseAddressHi
- [simpleRead](1813859-simpleread.md): Create an address space object to handle read-only memory (eg. the local ROM) handles everything itself
- [simpleReader](1813862-simplereader.md): A method for processing an address space read request
- [simpleReadFixed](1813866-simplereadfixed.md): Create an address space object to handle fixed read-only memory (eg. the local ROM) handles everything itself
- [simpleRW(IOFireWireBus \*, FWAddress \*, IOMemoryDescriptor \*)](1813868-simplerw.md): Create an address space object to handle r/w memory handles everything itself
- [simpleRW(IOFireWireBus \*, FWAddress \*, UInt32, void \*)](1813871-simplerw.md): Create an address space object to handle r/w memory handles everything itself
- [simpleRWFixed](1813874-simplerwfixed.md): Create a Read/Write fixed address space at top of kCSRRegisterSpaceBaseAddressHi.
- [simpleWriter](1813878-simplewriter.md): A method for processing an address space write request
