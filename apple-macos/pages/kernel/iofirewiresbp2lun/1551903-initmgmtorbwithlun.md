> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewiresbp2lun/1551903-initmgmtorbwithlun

# initMgmtORBWithLUN

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool initMgmtORBWithLUN(IOFireWireSBP2ManagementORB *orb, IOFireWireSBP2LUN *lun, void *refCon, FWSBP2ManagementCallback completion);
```
