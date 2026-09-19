> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iostreamuserclient/1576510-initwithtask

# initWithTask

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool initWithTask(task_t owningTask, void *securityToken, UInt32 type, OSDictionary *properties);
```
