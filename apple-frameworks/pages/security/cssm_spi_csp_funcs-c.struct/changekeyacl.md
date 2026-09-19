> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_spi_csp_funcs-c.struct/changekeyacl

# ChangeKeyAcl

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(long, const struct cssm_access_credentials *, const struct cssm_acl_edit *, const struct cssm_key *) ChangeKeyAcl;
```
