> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewirecontroller/1457295-asyncstreamwrite

# asyncStreamWrite

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn asyncStreamWrite(UInt32 generation, int speed, int tag, int sync, int channel, IOMemoryDescriptor *buf, IOByteCount offset, int size, IOFWAsyncStreamCommand *cmd);
```
