> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2lun/1551903-initmgmtorbwithlun](https://developer.apple.com/documentation/kernel/iofirewiresbp2lun/1551903-initmgmtorbwithlun)

# initMgmtORBWithLUN

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool initMgmtORBWithLUN(IOFireWireSBP2ManagementORB *orb, IOFireWireSBP2LUN *lun, void *refCon, FWSBP2ManagementCallback completion);
```
