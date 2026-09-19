> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohidsystem/1645987-postevent

# postEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
void postEvent(int what, IOFixedPoint64 *location, AbsoluteTime ts, NXEventData *myData, OSObject *sender, UInt32 extPID, bool processKEQ, UInt32 options);
```
