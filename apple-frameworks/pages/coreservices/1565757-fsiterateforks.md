> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1565757-fsiterateforks](https://developer.apple.com/documentation/coreservices/1565757-fsiterateforks)

# FSIterateForks

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSIterateForks(const FSRef *ref, CatPositionRec *forkIterator, HFSUniStr255 *forkName, SInt64 *forkSize, UInt64 *forkPhysicalSize);
```

## See Also

### Iterating Over Named Forks

- [PBIterateForksSync](1566093-pbiterateforkssync.md): Deprecated.
- [PBIterateForksAsync](1566251-pbiterateforksasync.md): Deprecated.
