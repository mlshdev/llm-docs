> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/3553375-newuserclient](https://developer.apple.com/documentation/kernel/ioservice/3553375-newuserclient)

# newUserClient

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
IOReturn newUserClient(task_t owningTask, void *securityID, UInt32 type, OSSharedPtr<IOUserClient> & handler);
```
