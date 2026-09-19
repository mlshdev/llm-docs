> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secasn1decode

# SecAsn1Decode

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Decodes untyped DER data.

## Declaration

```objectivec
OSStatus SecAsn1Decode(SecAsn1CoderRef coder, const void *src, size_t len, const SecAsn1Template *templates, void *dest);
```
