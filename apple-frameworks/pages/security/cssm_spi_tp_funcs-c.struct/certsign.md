> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_spi_tp_funcs-c.struct/certsign

# CertSign

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(long, long, unsigned long long, const struct cssm_data *, const struct cssm_certgroup *, const struct cssm_tp_verify_context *, struct cssm_tp_verify_context_result *, struct cssm_data *) CertSign;
```
