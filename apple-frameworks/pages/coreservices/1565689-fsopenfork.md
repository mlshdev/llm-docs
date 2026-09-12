> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1565689-fsopenfork](https://developer.apple.com/documentation/coreservices/1565689-fsopenfork)

# FSOpenFork

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSOpenFork(const FSRef *ref, UniCharCount forkNameLength, const UniChar *forkName, SInt8 permissions, FSIORefNum *forkRefNum);
```

## See Also

### Opening Files

- [PBOpenForkSync](1566802-pbopenforksync.md): Deprecated.
- [PBOpenForkAsync](1566059-pbopenforkasync.md): Deprecated.
