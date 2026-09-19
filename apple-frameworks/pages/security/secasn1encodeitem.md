> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secasn1encodeitem

# SecAsn1EncodeItem

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Encodes data in DER format.

## Declaration

```objectivec
OSStatus SecAsn1EncodeItem(SecAsn1CoderRef coder, const void *src, const SecAsn1Template *templates, SecAsn1Item *dest);
```
