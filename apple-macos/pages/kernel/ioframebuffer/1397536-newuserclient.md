> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioframebuffer/1397536-newuserclient](https://developer.apple.com/documentation/kernel/ioframebuffer/1397536-newuserclient)

# newUserClient

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn newUserClient(task_t owningTask, void *security_id, UInt32 type, IOUserClient **clientH);
```
