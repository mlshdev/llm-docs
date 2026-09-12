> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_tp_certgroupconstruct](https://developer.apple.com/documentation/security/cssm_tp_certgroupconstruct)

# CSSM_TP_CertGroupConstruct

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_TP_CertGroupConstruct(CSSM_TP_HANDLE TPHandle, CSSM_CL_HANDLE CLHandle, CSSM_CSP_HANDLE CSPHandle, const CSSM_DL_DB_LIST *DBList, const void *ConstructParams, const CSSM_CERTGROUP *CertGroupFrag, CSSM_CERTGROUP_PTR*CertGroup);
```
