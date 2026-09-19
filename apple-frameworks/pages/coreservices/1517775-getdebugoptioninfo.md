> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1517775-getdebugoptioninfo

# GetDebugOptionInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSStatus GetDebugOptionInfo(UInt32 itemIndex, OSType componentSignature, SInt32 *optionSelectorNum, Str255 optionName, Boolean *optionSetting);
```
