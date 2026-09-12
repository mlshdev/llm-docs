> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiocontrol/1485832-createuserclient](https://developer.apple.com/documentation/kernel/ioaudiocontrol/1485832-createuserclient)

# createUserClient

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
virtual IOReturn createUserClient(task_t task, void *securityID, UInt32 taskType, IOAudioControlUserClient **newUserClient, OSDictionary *properties);
```
