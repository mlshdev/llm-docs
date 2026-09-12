> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_spi_csp_funcs-c.struct/changekeyowner](https://developer.apple.com/documentation/security/cssm_spi_csp_funcs-c.struct/changekeyowner)

# ChangeKeyOwner

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(long, const struct cssm_access_credentials *, const struct cssm_key *, const struct cssm_acl_owner_prototype *) ChangeKeyOwner;
```
