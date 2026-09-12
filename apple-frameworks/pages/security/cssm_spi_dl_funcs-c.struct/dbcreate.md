> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_spi_dl_funcs-c.struct/dbcreate](https://developer.apple.com/documentation/security/cssm_spi_dl_funcs-c.struct/dbcreate)

# DbCreate

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(long, const char *, const struct cssm_net_address *, const struct cssm_dbinfo *, unsigned int, const struct cssm_resource_control_context *, const void *, long *) DbCreate;
```
