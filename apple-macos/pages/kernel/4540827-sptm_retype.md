> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4540827-sptm_retype

# sptm_retype

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.4+

## Declaration

```objectivec
void sptm_retype(sptm_paddr_t paddr, sptm_frame_type_t current_type, sptm_frame_type_t new_type, sptm_retype_params_t retype_params);
```
