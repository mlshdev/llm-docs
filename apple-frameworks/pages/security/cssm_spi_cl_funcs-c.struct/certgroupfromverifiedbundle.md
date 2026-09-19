> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_spi_cl_funcs-c.struct/certgroupfromverifiedbundle

# CertGroupFromVerifiedBundle

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(long, unsigned long long, const struct cssm_cert_bundle *, const struct cssm_data *, struct cssm_certgroup **) CertGroupFromVerifiedBundle;
```
