> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostream/1809695-newuserclient](https://developer.apple.com/documentation/kernel/iostream/1809695-newuserclient)

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
