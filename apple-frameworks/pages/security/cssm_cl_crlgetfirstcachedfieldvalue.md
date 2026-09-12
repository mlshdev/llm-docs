> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_cl_crlgetfirstcachedfieldvalue](https://developer.apple.com/documentation/security/cssm_cl_crlgetfirstcachedfieldvalue)

# CSSM_CL_CrlGetFirstCachedFieldValue

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CL_CrlGetFirstCachedFieldValue(CSSM_CL_HANDLE CLHandle, CSSM_HANDLE CrlHandle, const SecAsn1Item *CrlRecordIndex, const SecAsn1Oid *CrlField, CSSM_HANDLE_PTR ResultsHandle, uint32 *NumberOfMatchedFields, CSSM_DATA_PTR*Value);
```
