> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iomemorydescriptor/1442040-dmacommandoperation

# dmaCommandOperation

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn dmaCommandOperation(DMACommandOps op, void *vData, UInt dataSize);
```

## See Also

### Operating on the Memory

- [performOperation](1812840-performoperation.md): Perform an operation on the memory descriptor's memory.
- [performOperation](1441761-performoperation.md): Perform an operation on the memory descriptor's memory.
