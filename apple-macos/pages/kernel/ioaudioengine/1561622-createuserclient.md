> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudioengine/1561622-createuserclient

# createUserClient

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
virtual IOReturn createUserClient(task_t task, void *securityID, UInt32 type, IOAudioEngineUserClient **newUserClient, OSDictionary *properties);
```
