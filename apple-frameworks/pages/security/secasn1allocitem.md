> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secasn1allocitem](https://developer.apple.com/documentation/security/secasn1allocitem)

# SecAsn1AllocItem

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Allocates memory for an item’s data field in the coder object’s memory pool.

## Declaration

```objectivec
OSStatus SecAsn1AllocItem(SecAsn1CoderRef coder, SecAsn1Item *item, size_t len);
```
