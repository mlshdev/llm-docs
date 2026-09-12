> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/mds_funcs-c.struct/datagetnext](https://developer.apple.com/documentation/security/mds_funcs-c.struct/datagetnext)

# DataGetNext

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(struct cssm_dl_db_handle, long, struct cssm_db_record_attribute_data *, struct cssm_data *, struct cssm_db_unique_record **) DataGetNext;
```
