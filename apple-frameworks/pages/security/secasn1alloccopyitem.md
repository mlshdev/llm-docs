> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secasn1alloccopyitem](https://developer.apple.com/documentation/security/secasn1alloccopyitem)

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
