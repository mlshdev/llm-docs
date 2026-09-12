> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewirecontroller/1457088-processlockrequest](https://developer.apple.com/documentation/kernel/iofirewirecontroller/1457088-processlockrequest)

# processLockRequest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual void processLockRequest(UInt16 sourceID, UInt32 tlabel, UInt32 *hdr, void *buf, int len, IOFWSpeed speed);
```
