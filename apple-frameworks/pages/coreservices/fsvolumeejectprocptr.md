> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/fsvolumeejectprocptr](https://developer.apple.com/documentation/coreservices/fsvolumeejectprocptr)

# FSVolumeEjectProcPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.2+

## Declaration

```objectivec
typedef void (*FSVolumeEjectProcPtr)(FSVolumeOperation volumeOp, void *clientData, OSStatus err, FSVolumeRefNum volumeRefNum, pid_t dissenter);
```
