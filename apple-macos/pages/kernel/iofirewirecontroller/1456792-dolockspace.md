> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewirecontroller/1456792-dolockspace](https://developer.apple.com/documentation/kernel/iofirewirecontroller/1456792-dolockspace)

# doLockSpace

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
UInt32 doLockSpace(UInt16 nodeID, IOFWSpeed & speed, FWAddress addr, UInt32 inlen, const UInt32 *newVal, UInt32 & outLen, UInt32 *oldVal, UInt32 extType, IOFWRequestRefCon refcon);
```
