> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1566762-fsmoveobjectasync](https://developer.apple.com/documentation/coreservices/1566762-fsmoveobjectasync)

# FSMoveObjectAsync

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.8)

## Declaration

```objectivec
OSStatus FSMoveObjectAsync(FSFileOperationRef fileOp, const FSRef *source, const FSRef *destDir, CFStringRef destName, OptionBits flags, FSFileOperationStatusProcPtr callback, CFTimeInterval statusChangeInterval, FSFileOperationClientContext *clientContext);
```

## See Also

### High-Level File Operations

- [FSFileOperationCopyStatus](1566279-fsfileoperationcopystatus.md): Deprecated.
- [FSPathFileOperationCopyStatus](1566335-fspathfileoperationcopystatus.md): Deprecated.
- [FSCopyObjectAsync](1566285-fscopyobjectasync.md): Deprecated.
- [FSPathCopyObjectAsync](1566056-fspathcopyobjectasync.md): Deprecated.
- [FSPathMoveObjectAsync](1566169-fspathmoveobjectasync.md): Deprecated.
- [FSFileOperationCancel](1565866-fsfileoperationcancel.md): Deprecated.
- [FSFileOperationCreate](1566666-fsfileoperationcreate.md): Deprecated.
- [FSFileOperationGetTypeID](1565673-fsfileoperationgettypeid.md): Deprecated.
- [FSFileOperationScheduleWithRunLoop](1565845-fsfileoperationschedulewithrunlo.md): Deprecated.
- [FSFileOperationUnscheduleFromRunLoop](1565483-fsfileoperationunschedulefromrun.md): Deprecated.
- [FSCopyObjectSync](1565258-fscopyobjectsync.md): Deprecated.
- [FSMoveObjectSync](1566525-fsmoveobjectsync.md): Deprecated.
- [FSPathCopyObjectSync](1565384-fspathcopyobjectsync.md): Deprecated.
- [FSPathMoveObjectSync](1566022-fspathmoveobjectsync.md): Deprecated.
