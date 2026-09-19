> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_cl_crladdcert

# CSSM_CL_CrlAddCert

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CL_CrlAddCert(CSSM_CL_HANDLE CLHandle, CSSM_CC_HANDLE CCHandle, const SecAsn1Item *Cert, uint32 NumberOfFields, const CSSM_FIELD *CrlEntryFields, const SecAsn1Item *OldCrl, CSSM_DATA_PTR NewCrl);
```
