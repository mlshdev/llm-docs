> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_cl_crlgetallcachedrecordfields](https://developer.apple.com/documentation/security/cssm_cl_crlgetallcachedrecordfields)

# CSSM_CL_CrlGetAllCachedRecordFields

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CL_CrlGetAllCachedRecordFields(CSSM_CL_HANDLE CLHandle, CSSM_HANDLE CrlHandle, const SecAsn1Item *CrlRecordIndex, uint32 *NumberOfFields, CSSM_FIELD_PTR*CrlFields);
```
