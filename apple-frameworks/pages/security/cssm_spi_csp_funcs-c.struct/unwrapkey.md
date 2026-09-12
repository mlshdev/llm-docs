> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_spi_csp_funcs-c.struct/unwrapkey](https://developer.apple.com/documentation/security/cssm_spi_csp_funcs-c.struct/unwrapkey)

# UnwrapKey

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(long, unsigned long long, const struct cssm_context *, const struct cssm_key *, const struct cssm_key *, unsigned int, unsigned int, const struct cssm_data *, const struct cssm_resource_control_context *, struct cssm_key *, struct cssm_data *, unsigned long long) UnwrapKey;
```
