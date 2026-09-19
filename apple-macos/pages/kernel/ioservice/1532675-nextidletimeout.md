> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/1532675-nextidletimeout

# nextIdleTimeout

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual SInt32 nextIdleTimeout(AbsoluteTime currentTime, AbsoluteTime lastActivity, unsigned int powerState);
```
