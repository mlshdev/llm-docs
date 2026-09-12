> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1566175-fsallocatefork](https://developer.apple.com/documentation/coreservices/1566175-fsallocatefork)

# FSAllocateFork

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSAllocateFork(FSIORefNum forkRefNum, FSAllocationFlags flags, UInt16 positionMode, SInt64 positionOffset, UInt64 requestCount, UInt64 *actualCount);
```

## See Also

### Allocating Storage for Forks

- [PBAllocateForkSync](1565523-pballocateforksync.md): Deprecated.
- [PBAllocateForkAsync](1566083-pballocateforkasync.md): Deprecated.
