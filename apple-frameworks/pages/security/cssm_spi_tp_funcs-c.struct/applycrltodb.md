> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_spi_tp_funcs-c.struct/applycrltodb](https://developer.apple.com/documentation/security/cssm_spi_tp_funcs-c.struct/applycrltodb)

# ApplyCrlToDb

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(long, long, long, const struct cssm_encoded_crl *, const struct cssm_certgroup *, const struct cssm_tp_verify_context *, struct cssm_tp_verify_context_result *) ApplyCrlToDb;
```
