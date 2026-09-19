> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbhostinterface/3294680-newuserclient

# newUserClient

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual IOReturn newUserClient(task_t owningTask, void *securityID, UInt32 type, IOUserClient **handler);
```
