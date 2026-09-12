> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_spi_dl_funcs-c.struct/getdbacl](https://developer.apple.com/documentation/security/cssm_spi_dl_funcs-c.struct/getdbacl)

# GetDbAcl

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(struct cssm_dl_db_handle, const char (*)[68], unsigned int *, struct cssm_acl_entry_info **) GetDbAcl;
```
