> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewirecontroller/3516570-asyncwrite

# asyncWrite

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
virtual IOReturn asyncWrite(UInt32 generation, UInt16 nodeID, UInt16 addrHi, UInt32 addrLo, int speed, int label, void *data, int size, IOFWAsyncCommand *cmd);
```
