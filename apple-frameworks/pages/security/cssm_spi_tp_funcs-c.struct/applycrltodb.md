> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_spi_tp_funcs-c.struct/applycrltodb

# ApplyCrlToDb

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(long, long, long, const struct cssm_encoded_crl *, const struct cssm_certgroup *, const struct cssm_tp_verify_context *, struct cssm_tp_verify_context_result *) ApplyCrlToDb;
```
