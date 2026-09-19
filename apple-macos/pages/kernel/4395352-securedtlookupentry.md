> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4395352-securedtlookupentry

# SecureDTLookupEntry

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.0+

## Declaration

```objectivec
int SecureDTLookupEntry(const DTEntry searchPoint, const char *pathName, DTEntry *foundEntry);
```
