> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secasn1malloc

# SecAsn1Malloc

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Allocates memory in the coder object’s memory pool.

## Declaration

```objectivec
void *SecAsn1Malloc(SecAsn1CoderRef coder, size_t len);
```
