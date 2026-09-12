> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudioengine/1561570-newuserclient](https://developer.apple.com/documentation/kernel/ioaudioengine/1561570-newuserclient)

# newUserClient

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
virtual IOReturn newUserClient(task_t task, void *securityID, UInt32 type, IOUserClient **handler);
```
