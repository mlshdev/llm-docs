> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_spi_csp_funcs-c.struct/generatekeypair

# GenerateKeyPair

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(long, unsigned long long, const struct cssm_context *, unsigned int, unsigned int, const struct cssm_data *, struct cssm_key *, unsigned int, unsigned int, const struct cssm_data *, const struct cssm_resource_control_context *, struct cssm_key *, unsigned long long) GenerateKeyPair;
```
