> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/fsfileoperationstatusprocptr

# FSFileOperationStatusProcPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.4+

## Declaration

```objectivec
typedef void (*FSFileOperationStatusProcPtr)(FSFileOperationRef fileOp, const FSRef *currentItem, FSFileOperationStage stage, OSStatus error, CFDictionaryRef statusDictionary, void *info);
```
