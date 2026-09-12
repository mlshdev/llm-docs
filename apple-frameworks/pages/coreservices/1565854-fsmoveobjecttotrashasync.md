> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1565854-fsmoveobjecttotrashasync](https://developer.apple.com/documentation/coreservices/1565854-fsmoveobjecttotrashasync)

# FSMoveObjectToTrashAsync

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.8)

## Declaration

```objectivec
OSStatus FSMoveObjectToTrashAsync(FSFileOperationRef fileOp, const FSRef *source, OptionBits flags, FSFileOperationStatusProcPtr callback, CFTimeInterval statusChangeInterval, FSFileOperationClientContext *clientContext);
```
