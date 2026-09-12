> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2userclient/1529672-initwithtask](https://developer.apple.com/documentation/kernel/iofirewiresbp2userclient/1529672-initwithtask)

# initWithTask

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool initWithTask(task_t owningTask, void *securityToken, UInt32 type, OSDictionary *properties);
```
