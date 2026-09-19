> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1547519-kauth_cred_gid2ntsid

# kauth_cred_gid2ntsid

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
int kauth_cred_gid2ntsid(gid_t _gid, ntsid_t *_sidp);
```
