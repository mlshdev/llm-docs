> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/4540827-sptm_retype](https://developer.apple.com/documentation/kernel/4540827-sptm_retype)

# sptm_retype

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.4+

## Declaration

```objectivec
void sptm_retype(sptm_paddr_t paddr, sptm_frame_type_t current_type, sptm_frame_type_t new_type, sptm_retype_params_t retype_params);
```
