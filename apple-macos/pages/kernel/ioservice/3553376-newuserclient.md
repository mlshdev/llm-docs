> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/3553376-newuserclient

# newUserClient

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
IOReturn newUserClient(task_t owningTask, void *securityID, UInt32 type, OSDictionary *properties, OSSharedPtr<IOUserClient> & handler);
```
