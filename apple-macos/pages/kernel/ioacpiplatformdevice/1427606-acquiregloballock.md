> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioacpiplatformdevice/1427606-acquiregloballock

# acquireGlobalLock

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn acquireGlobalLock(UInt32 *lockToken, const mach_timespec_t *timeout);
```
