> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secasn1alloccopyitem

# SecAsn1AllocCopyItem

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Allocates memory for an item’s data field in the coder object’s memory pool and copies in a block of data from another item.

## Declaration

```objectivec
OSStatus SecAsn1AllocCopyItem(SecAsn1CoderRef coder, const SecAsn1Item *src, SecAsn1Item *dest);
```
