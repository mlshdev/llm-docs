> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_spi_dl_funcs-c.struct/datagetfirst](https://developer.apple.com/documentation/security/cssm_spi_dl_funcs-c.struct/datagetfirst)

# DataGetFirst

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(struct cssm_dl_db_handle, const struct cssm_query *, long *, struct cssm_db_record_attribute_data *, struct cssm_data *, struct cssm_db_unique_record **) DataGetFirst;
```
