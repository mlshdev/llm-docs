> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_spi_dl_funcs-c.struct/changedbowner

# ChangeDbOwner

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(struct cssm_dl_db_handle, const struct cssm_access_credentials *, const struct cssm_acl_owner_prototype *) ChangeDbOwner;
```
