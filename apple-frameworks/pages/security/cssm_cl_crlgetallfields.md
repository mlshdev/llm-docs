> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_cl_crlgetallfields

# CSSM_CL_CrlGetAllFields

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CL_CrlGetAllFields(CSSM_CL_HANDLE CLHandle, const SecAsn1Item *Crl, uint32 *NumberOfCrlFields, CSSM_FIELD_PTR*CrlFields);
```
