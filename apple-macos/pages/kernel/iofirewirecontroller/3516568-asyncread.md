> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewirecontroller/3516568-asyncread](https://developer.apple.com/documentation/kernel/iofirewirecontroller/3516568-asyncread)

# asyncRead

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
virtual IOReturn asyncRead(UInt32 generation, UInt16 nodeID, UInt16 addrHi, UInt32 addrLo, int speed, int label, int size, IOFWAsyncCommand *cmd, IOFWReadFlags flags);
```
