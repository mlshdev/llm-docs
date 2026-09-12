> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostreamuserclient/1576510-initwithtask](https://developer.apple.com/documentation/kernel/iostreamuserclient/1576510-initwithtask)

# initWithTask

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool initWithTask(task_t owningTask, void *securityToken, UInt32 type, OSDictionary *properties);
```
