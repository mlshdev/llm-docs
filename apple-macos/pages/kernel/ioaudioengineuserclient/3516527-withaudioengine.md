> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudioengineuserclient/3516527-withaudioengine

# withAudioEngine

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
static IOAudioEngineUserClient * withAudioEngine(IOAudioEngine *engine, task_t clientTask, void *securityToken, UInt32 type, OSDictionary *properties);
```
