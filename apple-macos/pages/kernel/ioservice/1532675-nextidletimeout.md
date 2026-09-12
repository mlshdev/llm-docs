> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/1532675-nextidletimeout](https://developer.apple.com/documentation/kernel/ioservice/1532675-nextidletimeout)

# nextIdleTimeout

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual SInt32 nextIdleTimeout(AbsoluteTime currentTime, AbsoluteTime lastActivity, unsigned int powerState);
```
