> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/fspathfileoperationstatusprocptr](https://developer.apple.com/documentation/coreservices/fspathfileoperationstatusprocptr)

# FSPathFileOperationStatusProcPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.4+

## Declaration

```objectivec
typedef void (*FSPathFileOperationStatusProcPtr)(FSFileOperationRef fileOp, const char *currentItem, FSFileOperationStage stage, OSStatus error, CFDictionaryRef statusDictionary, void *info);
```
