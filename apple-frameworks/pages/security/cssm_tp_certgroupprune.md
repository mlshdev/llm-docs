> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_tp_certgroupprune

# CSSM_TP_CertGroupPrune

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_TP_CertGroupPrune(CSSM_TP_HANDLE TPHandle, CSSM_CL_HANDLE CLHandle, const CSSM_DL_DB_LIST *DBList, const CSSM_CERTGROUP *OrderedCertGroup, CSSM_CERTGROUP_PTR*PrunedCertGroup);
```
