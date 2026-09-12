> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioacpiplatformdevice/1427606-acquiregloballock](https://developer.apple.com/documentation/kernel/ioacpiplatformdevice/1427606-acquiregloballock)

# acquireGlobalLock

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn acquireGlobalLock(UInt32 *lockToken, const mach_timespec_t *timeout);
```
