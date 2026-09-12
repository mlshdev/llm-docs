> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_cl_crlgetallfields](https://developer.apple.com/documentation/security/cssm_cl_crlgetallfields)

# CSSM_CL_CrlGetAllFields

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CL_CrlGetAllFields(CSSM_CL_HANDLE CLHandle, const SecAsn1Item *Crl, uint32 *NumberOfCrlFields, CSSM_FIELD_PTR*CrlFields);
```
