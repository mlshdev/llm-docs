> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohideventdriver/2967287-copyevent

# copyEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.14+ (deprecated in 10.15.1)

## Declaration

```objectivec
virtual IOHIDEvent * copyEvent(IOHIDEventType type, IOHIDEvent *matching, IOOptionBits options);
```
