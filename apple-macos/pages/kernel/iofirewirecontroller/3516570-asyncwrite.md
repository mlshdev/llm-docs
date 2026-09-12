> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewirecontroller/3516570-asyncwrite](https://developer.apple.com/documentation/kernel/iofirewirecontroller/3516570-asyncwrite)

# asyncWrite

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
virtual IOReturn asyncWrite(UInt32 generation, UInt16 nodeID, UInt16 addrHi, UInt32 addrLo, int speed, int label, void *data, int size, IOFWAsyncCommand *cmd);
```
