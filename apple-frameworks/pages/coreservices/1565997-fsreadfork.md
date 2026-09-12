> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1565997-fsreadfork](https://developer.apple.com/documentation/coreservices/1565997-fsreadfork)

# FSReadFork

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSReadFork(FSIORefNum forkRefNum, UInt16 positionMode, SInt64 positionOffset, ByteCount requestCount, void *buffer, ByteCount *actualCount);
```

## See Also

### Reading, Writing, and Closing Files

- [PBReadForkAsync](1566703-pbreadforkasync.md): Deprecated.
- [PBReadForkSync](1566739-pbreadforksync.md): Deprecated.
- [PBWriteForkSync](1565632-pbwriteforksync.md): Deprecated.
- [FSWriteFork](1565526-fswritefork.md): Deprecated.
- [PBWriteForkAsync](1566491-pbwriteforkasync.md): Deprecated.
- [FSCloseFork](1566900-fsclosefork.md): Deprecated.
- [PBCloseForkSync](1566173-pbcloseforksync.md): Deprecated.
- [PBCloseForkAsync](1565189-pbcloseforkasync.md): Deprecated.
