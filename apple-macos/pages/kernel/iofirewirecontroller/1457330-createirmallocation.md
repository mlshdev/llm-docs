> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewirecontroller/1457330-createirmallocation](https://developer.apple.com/documentation/kernel/iofirewirecontroller/1457330-createirmallocation)

# createIRMAllocation

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
IOFireWireIRMAllocation * createIRMAllocation(Boolean releaseIRMResourcesOnFree, IOFireWireIRMAllocation::AllocationLostNotificationProc allocationLostProc, void *pLostNotificationProcRefCon);
```
