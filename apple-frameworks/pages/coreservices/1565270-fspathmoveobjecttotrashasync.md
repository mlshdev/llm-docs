> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1565270-fspathmoveobjecttotrashasync](https://developer.apple.com/documentation/coreservices/1565270-fspathmoveobjecttotrashasync)

# FSPathMoveObjectToTrashAsync

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.8)

## Declaration

```objectivec
OSStatus FSPathMoveObjectToTrashAsync(FSFileOperationRef fileOp, const char *sourcePath, OptionBits flags, FSPathFileOperationStatusProcPtr callback, CFTimeInterval statusChangeInterval, FSFileOperationClientContext *clientContext);
```
