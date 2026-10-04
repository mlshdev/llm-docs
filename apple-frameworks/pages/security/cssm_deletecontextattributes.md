> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_deletecontextattributes

# CSSM_DeleteContextAttributes

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_DeleteContextAttributes(CSSM_CC_HANDLE CCHandle, uint32 NumberOfAttributes, const CSSM_CONTEXT_ATTRIBUTE *ContextAttributes);
```
