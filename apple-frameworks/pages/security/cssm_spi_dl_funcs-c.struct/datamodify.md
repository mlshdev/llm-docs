> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_spi_dl_funcs-c.struct/datamodify

# DataModify

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(struct cssm_dl_db_handle, unsigned int, struct cssm_db_unique_record *, const struct cssm_db_record_attribute_data *, const struct cssm_data *, unsigned int) DataModify;
```
