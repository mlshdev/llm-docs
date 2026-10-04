> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_spi_tp_funcs-c.struct/certreclaimkey

# CertReclaimKey

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(long, const struct cssm_certgroup *, unsigned int, unsigned long long, long, const struct cssm_resource_control_context *) CertReclaimKey;
```
