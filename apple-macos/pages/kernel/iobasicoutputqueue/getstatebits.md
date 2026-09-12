> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobasicoutputqueue/getstatebits](https://developer.apple.com/documentation/kernel/iobasicoutputqueue/getstatebits)

# GetStateBits

**Interface language:** Objective-C

**Framework:** Kernel

The bits in the value returned by getState().

## Declaration

```objectivec
enum {
   kStateRunning = 0x1,
   kStateOutputStalled = 0x2,
   kStateOutputActive = 0x4,
   kStateOutputServiceMask = 0xff00
};
```

## Topics

### Constants

- [kStateRunning](getstatebits/kstaterunning.md)
- [kStateStalled](getstatebits/kstatestalled.md)
- [kStateActive](getstatebits/kstateactive.md)
