> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_spi_cl_funcs-c.struct/certgrouptosignedbundle](https://developer.apple.com/documentation/security/cssm_spi_cl_funcs-c.struct/certgrouptosignedbundle)

# CertGroupToSignedBundle

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(long, unsigned long long, const struct cssm_certgroup *, const struct cssm_cert_bundle_header *, struct cssm_data *) CertGroupToSignedBundle;
```
