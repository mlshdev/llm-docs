> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_spi_ac_funcs-c.struct/authcompute](https://developer.apple.com/documentation/security/cssm_spi_ac_funcs-c.struct/authcompute)

# AuthCompute

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(long, const struct cssm_tuplegroup *, const struct cssm_tuplegroup *, unsigned int, const struct cssm_list *, const struct cssm_list *, const struct cssm_list *, struct cssm_tuplegroup *) AuthCompute;
```
