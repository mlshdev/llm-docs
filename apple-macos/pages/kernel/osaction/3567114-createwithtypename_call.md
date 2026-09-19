> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osaction/3567114-createwithtypename_call

# CreateWithTypeName_Call

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
static kern_return_t CreateWithTypeName_Call(OSObject *target, uint64_t targetmsgid, uint64_t msgid, size_t referenceSize, OSString *typeName, OSAction **action);
```
