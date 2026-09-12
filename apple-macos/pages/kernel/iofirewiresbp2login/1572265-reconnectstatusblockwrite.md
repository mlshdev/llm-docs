> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2login/1572265-reconnectstatusblockwrite](https://developer.apple.com/documentation/kernel/iofirewiresbp2login/1572265-reconnectstatusblockwrite)

# reconnectStatusBlockWrite

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual UInt32 reconnectStatusBlockWrite(UInt16 nodeID, IOFWSpeed & speed, FWAddress addr, UInt32 len, const void *buf, IOFWRequestRefCon lockRead);
```
