> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_spi_kr_funcs-c.struct/getrecoveredobject

# GetRecoveredObject

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(unsigned int, long, unsigned int, long, const struct cssm_resource_control_context *, unsigned int, struct cssm_key *, struct cssm_data *) GetRecoveredObject;
```
