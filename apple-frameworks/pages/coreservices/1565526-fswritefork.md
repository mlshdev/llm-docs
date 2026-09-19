> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1565526-fswritefork

# FSWriteFork

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSWriteFork(FSIORefNum forkRefNum, UInt16 positionMode, SInt64 positionOffset, ByteCount requestCount, const void *buffer, ByteCount *actualCount);
```

## See Also

### Reading, Writing, and Closing Files

- [FSReadFork](1565997-fsreadfork.md): Deprecated.
- [PBReadForkAsync](1566703-pbreadforkasync.md): Deprecated.
- [PBReadForkSync](1566739-pbreadforksync.md): Deprecated.
- [PBWriteForkSync](1565632-pbwriteforksync.md): Deprecated.
- [PBWriteForkAsync](1566491-pbwriteforkasync.md): Deprecated.
- [FSCloseFork](1566900-fsclosefork.md): Deprecated.
- [PBCloseForkSync](1566173-pbcloseforksync.md): Deprecated.
- [PBCloseForkAsync](1565189-pbcloseforkasync.md): Deprecated.
