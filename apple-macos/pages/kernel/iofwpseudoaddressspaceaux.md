> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofwpseudoaddressspaceaux](https://developer.apple.com/documentation/kernel/iofwpseudoaddressspaceaux)

# IOFWPseudoAddressSpaceAux

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.2+

## Declaration

```objectivec
class IOFWPseudoAddressSpaceAux : IOFWAddressSpaceAux
```

## Topics

### Miscellaneous

- [setARxReqIntCompleteHandler](iofwpseudoaddressspaceaux/1812922-setarxreqintcompletehandler.md): Installs a callback to receive notification, when FWIM has completed ARxReqInt processing and no incoming packets are left in the queue.

### Instance Methods

- [createMemberVariables](iofwpseudoaddressspaceaux/1584058-createmembervariables.md)
- [destroyMemberVariables](iofwpseudoaddressspaceaux/1584076-destroymembervariables.md)
- [free](iofwpseudoaddressspaceaux/1584080-free.md)
- [getMetaClass](iofwpseudoaddressspaceaux/1584065-getmetaclass.md)
- [handleARxReqIntComplete](iofwpseudoaddressspaceaux/1584071-handlearxreqintcomplete.md)
- [init](iofwpseudoaddressspaceaux/1584053-init.md)
- [intersects](iofwpseudoaddressspaceaux/1584078-intersects.md)
- [setARxReqIntCompleteHandler](iofwpseudoaddressspaceaux/1584069-setarxreqintcompletehandler.md)

## Relationships

### Inherits From

- [IOFWAddressSpaceAux](iofwaddressspaceaux.md)

## See Also

### Address Spaces

- [IOFWAddressSpaceAux](iofwaddressspaceaux.md)
- [IOFWPhysicalAddressSpaceAux](iofwphysicaladdressspaceaux.md)
- [IOFWSimpleContiguousPhysicalAddressSpace](iofwsimplecontiguousphysicaladdressspace.md)
- [IOFireWirePCRSpace](iofirewirepcrspace.md): object to multiplex users of the PCR plug registers
- [IOFWPseudoAddressSpace](iofwpseudoaddressspace.md)
- [IOFWSimplePhysicalAddressSpace](iofwsimplephysicaladdressspace.md)
- [IOFWPhysicalAddressSpace](iofwphysicaladdressspace.md)
- [IOFWAddressSpace](iofwaddressspace.md)
