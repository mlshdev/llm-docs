> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohideventservice/3753527-completecopyevent

# completeCopyEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 12.0+ (deprecated in 12.0)

## Declaration

```objectivec
virtual void completeCopyEvent(OSAction *action, IOHIDEvent *event, uint64_t context);
```
