> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_spi_dl_funcs-c.struct/datainsert](https://developer.apple.com/documentation/security/cssm_spi_dl_funcs-c.struct/datainsert)

# DataInsert

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(struct cssm_dl_db_handle, unsigned int, const struct cssm_db_record_attribute_data *, const struct cssm_data *, struct cssm_db_unique_record **) DataInsert;
```
