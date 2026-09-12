> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1565554-fscreatefork](https://developer.apple.com/documentation/coreservices/1565554-fscreatefork)

# FSCreateFork

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSCreateFork(const FSRef *ref, UniCharCount forkNameLength, const UniChar *forkName);
```

## See Also

### Creating and Deleting Named Forks

- [FSDeleteFork](1565370-fsdeletefork.md): Deprecated.
- [PBCreateForkSync](1566697-pbcreateforksync.md): Deprecated.
- [PBDeleteForkAsync](1566752-pbdeleteforkasync.md): Deprecated.
- [PBDeleteForkSync](1566822-pbdeleteforksync.md): Deprecated.
