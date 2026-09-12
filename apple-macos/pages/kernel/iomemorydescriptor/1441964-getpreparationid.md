> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/1441964-getpreparationid](https://developer.apple.com/documentation/kernel/iomemorydescriptor/1441964-getpreparationid)

# getPreparationID

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual uint64_t getPreparationID(void);
```

## See Also

### Preparing the Buffer

- [prepare](1812845-prepare.md): Prepare the memory for an I/O transfer.
- [prepare](1442024-prepare.md): Prepare the memory for an I/O transfer.
- [complete](1812740-complete.md): Complete processing of the memory after an I/O transfer finishes.
- [complete](1442043-complete.md): Complete processing of the memory after an I/O transfer finishes.
- [setPreparationID](1442011-setpreparationid.md)
