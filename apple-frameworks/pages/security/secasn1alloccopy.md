> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secasn1alloccopy

# SecAsn1AllocCopy

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Allocates memory for an item’s data field in the coder object’s memory pool and copies in a block of data.

## Declaration

```objectivec
OSStatus SecAsn1AllocCopy(SecAsn1CoderRef coder, const void *src, size_t len, SecAsn1Item *dest);
```
