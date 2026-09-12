> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1565370-fsdeletefork](https://developer.apple.com/documentation/coreservices/1565370-fsdeletefork)

# FSDeleteFork

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSDeleteFork(const FSRef *ref, UniCharCount forkNameLength, const UniChar *forkName);
```

## See Also

### Creating and Deleting Named Forks

- [FSCreateFork](1565554-fscreatefork.md): Deprecated.
- [PBCreateForkSync](1566697-pbcreateforksync.md): Deprecated.
- [PBDeleteForkAsync](1566752-pbdeleteforkasync.md): Deprecated.
- [PBDeleteForkSync](1566822-pbdeleteforksync.md): Deprecated.
