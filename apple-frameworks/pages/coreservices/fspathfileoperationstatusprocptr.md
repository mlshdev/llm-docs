> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/fspathfileoperationstatusprocptr

# FSPathFileOperationStatusProcPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.4+

## Declaration

```objectivec
typedef void (*FSPathFileOperationStatusProcPtr)(FSFileOperationRef fileOp, const char *currentItem, FSFileOperationStage stage, OSStatus error, CFDictionaryRef statusDictionary, void *info);
```
