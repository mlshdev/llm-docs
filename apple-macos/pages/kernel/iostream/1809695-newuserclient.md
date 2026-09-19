> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iostream/1809695-newuserclient

# newUserClient

**Interface language:** Objective-C

**Framework:** Kernel

See the documentation for the IOService method newUserClient.

## Declaration

```objectivec
virtual IOReturn newUserClient(
 task_t owningTask,
 void *securityID, 
 UInt32 type,
 OSDictionary *properties, 
 IOUserClient **handler ); 
```
