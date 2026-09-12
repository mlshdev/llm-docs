> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewirecontroller/1457295-asyncstreamwrite](https://developer.apple.com/documentation/kernel/iofirewirecontroller/1457295-asyncstreamwrite)

# asyncStreamWrite

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn asyncStreamWrite(UInt32 generation, int speed, int tag, int sync, int channel, IOMemoryDescriptor *buf, IOByteCount offset, int size, IOFWAsyncStreamCommand *cmd);
```
