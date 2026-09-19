> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_spi_tp_funcs-c.struct/submitcredrequest

# SubmitCredRequest

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
int (*)(long, const struct cssm_tp_authority_id *, unsigned int, const struct cssm_tp_request_set *, const struct cssm_tp_callerauth_context *, int *, struct cssm_data *) SubmitCredRequest;
```
