> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioworkloop/3516505-sleepgate

# sleepGate

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
virtual int sleepGate(void *event, AbsoluteTime deadline, UInt32 interuptibleType);
```
