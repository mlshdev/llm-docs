> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secasn1decodedata](https://developer.apple.com/documentation/security/secasn1decodedata)

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
