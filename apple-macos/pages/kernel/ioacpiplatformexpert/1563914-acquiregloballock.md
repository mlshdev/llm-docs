> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioacpiplatformexpert/1563914-acquiregloballock](https://developer.apple.com/documentation/kernel/ioacpiplatformexpert/1563914-acquiregloballock)

# acquireGlobalLock

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn acquireGlobalLock(IOService *client, UInt32 *lockToken, const mach_timespec_t *timeout);
```
