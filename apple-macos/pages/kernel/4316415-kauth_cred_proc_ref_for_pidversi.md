> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4316415-kauth_cred_proc_ref_for_pidversi

# kauth_cred_proc_ref_for_pidversion

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 14.4+

## Declaration

```objectivec
kauth_cred_t kauth_cred_proc_ref_for_pidversion(pid_t pid, uint32_t version);
```
