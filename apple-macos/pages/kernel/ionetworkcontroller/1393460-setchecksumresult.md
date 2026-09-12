> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ionetworkcontroller/1393460-setchecksumresult](https://developer.apple.com/documentation/kernel/ionetworkcontroller/1393460-setchecksumresult)

# setChecksumResult

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool setChecksumResult(mbuf_t packet, UInt32 checksumFamily, UInt32 resultMask, UInt32 validMask, UInt32 param0, UInt32 param1);
```
