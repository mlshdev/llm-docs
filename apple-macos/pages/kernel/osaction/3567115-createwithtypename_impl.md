> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osaction/3567115-createwithtypename_impl

# CreateWithTypeName_Impl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
static kern_return_t CreateWithTypeName_Impl(OSObject *target, uint64_t targetmsgid, uint64_t msgid, size_t referenceSize, OSString *typeName, OSAction **action);
```
