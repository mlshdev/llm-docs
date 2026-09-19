> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secasn1decodedata

# SecAsn1DecodeData

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Decodes an ASN.1 item in DER format.

## Declaration

```objectivec
OSStatus SecAsn1DecodeData(SecAsn1CoderRef coder, const SecAsn1Item *src, const SecAsn1Template *templ, void *dest);
```
