> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidsystem/1646033-newuserclient](https://developer.apple.com/documentation/kernel/iohidsystem/1646033-newuserclient)

# newUserClient

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual IOReturn newUserClient(task_t owningTask, void *security_id, UInt32 type, OSDictionary *properties, IOUserClient **handler);
```
