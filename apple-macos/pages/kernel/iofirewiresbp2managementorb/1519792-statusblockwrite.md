> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2managementorb/1519792-statusblockwrite](https://developer.apple.com/documentation/kernel/iofirewiresbp2managementorb/1519792-statusblockwrite)

# statusBlockWrite

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual UInt32 statusBlockWrite(UInt16 nodeID, FWAddress addr, UInt32 len, const void *buf, IOFWRequestRefCon lockRead);
```
